import { resolve } from 'path'
import prettier from 'prettier'

export function format(code: string) {
  const options = prettier.resolveConfig.sync(resolve(process.cwd(), '.prettierrc'))

  if (!options) {
    throw new Error('Cannot load prettier config.')
  }

  const result = prettier.format(code, options)

  return result
}
