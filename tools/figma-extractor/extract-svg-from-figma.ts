import { writeFile } from 'fs-extra'
import { resolve } from 'path'
import fetch, { Headers } from 'node-fetch'
import qs from 'query-string'

import { FigmaChildren, parseComponents, Component } from './parse-components'
import { optimizeSvg } from './optimize-svg'
import { convertSvgToJsx } from './svg-to-jsx'
import { format } from './formatter'
import dotenv from 'dotenv'

dotenv.config()

const { FIGMA_TOKEN = '', FIGMA_PROJECT, FIGMA_DOCUMENT } = process.env

const headers = new Headers({
  'X-Figma-Token': FIGMA_TOKEN,
})

export async function extractSvgFromFigma() {
  console.log('❯ Fetch components from figma')

  const components = await fetchSvgComponents()
  const urls = await fetchSvgUrl(Array.from(components.keys()))

  for (const [id, url] of urls) {
    const component = components.get(id)!

    const source = await fetchSvgSource(url)
    const jsx = convertSvgToJsx(source, component.name)

    await Promise.all([
      writeSvgFile(`${component.name}.tsx`, jsx),
      writeSvgFile(`${component.name}.svg`, source),
    ])

    console.log('❯ Component fetched and created:', `${component.name}`)
  }

  writeIndexFile(components)

  console.log('❯ Index created')
}

export async function fetchSvgComponents() {
  interface OkResponse {
    document: {
      id: string
      children: FigmaChildren[]
    }
  }

  const response = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_PROJECT}?ids=${FIGMA_DOCUMENT}`,
    {
      method: 'GET',
      headers,
    },
  )

  if (!response.ok) {
    throw new Error(`Unexpected response: ${response.statusText}.`)
  }

  const json: OkResponse = await response.json()
  const page = json.document.children.find((child) => child.id === FIGMA_DOCUMENT)

  if (!page) {
    throw new Error(`Cannot find page: ${FIGMA_DOCUMENT}.`)
  }
  return parseComponents(page)
}

async function fetchSvgUrl(ids: string[]) {
  const query = qs.stringify({ ids, format: 'svg' }, { arrayFormat: 'comma' })
  const response = await fetch(`https://api.figma.com/v1/images/${FIGMA_PROJECT}?${query}`, {
    method: 'GET',
    headers,
  })

  if (!response.ok) {
    throw new Error(`Unexpected response: ${response.statusText}.`)
  }

  interface OkResponse {
    err?: any
    images: Record<string, string>
  }

  const json: OkResponse = await response.json()

  if (json.err) {
    throw new Error(json.err)
  }

  const images = new Map(Object.entries(json.images))

  return images
}

async function fetchSvgSource(path: string) {
  const response = await fetch(path, { method: 'GET' })

  if (!response.ok) {
    throw new Error(`Unexpected response: ${response.statusText}`)
  }

  let content = await response.text()
  content = optimizeSvg(content)

  return content
}

async function writeSvgFile(name: string, content: string) {
  writeFile(resolve(__dirname, '../../src', name), content)
}

async function writeIndexFile(components: Map<string, Component>) {
  const exports = []

  for (const [_, component] of components) {
    exports.push(`export * from './${component.name}'`)
  }

  const content = format(exports.join('\n'))

  await writeFile(resolve(__dirname, '../../src/index.ts'), content)
}
