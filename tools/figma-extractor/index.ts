import { emptyDirSync } from 'fs-extra'
import { resolve } from 'path'

import { extractSvgFromFigma } from './extract-svg-from-figma'

async function main() {
  prepareDirectory()
  await extractSvgFromFigma()
}

function prepareDirectory() {
  emptyDirSync(resolve(__dirname, '../../src'))
}

main()
