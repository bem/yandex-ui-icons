import { pascalCase } from 'change-case'

export function createName(baseName: string, isOutline: boolean) {
  assertName(baseName, (name) => `❗️ Found unexpected symbols in name: ${name}`)

  if (isOutline) {
    return pascalCase(`${baseName}Outline`)
  }

  return pascalCase(baseName)
}

function assertName(name: string, fn: (name: string) => string) {
  if (name.match(/_|\d/)) {
    console.log(fn(name))
  }
}
