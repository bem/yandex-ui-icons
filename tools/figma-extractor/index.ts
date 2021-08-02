import { removeSync } from 'fs-extra'
import { resolve } from 'path'
import fg from 'fast-glob'

import { extractSvgFromFigma } from './extract-svg-from-figma'

async function main() {
  prepareDirectory()
  await extractSvgFromFigma()
}

function prepareDirectory() {
  const cwd = process.cwd()
  const ignore = ['./src/__tests__', './src/__examples__']
  const files = fg.sync('./src/**/*', { ignore, cwd })

  for (const file of files) {
    removeSync(resolve(cwd, file))
  }
}

main()
