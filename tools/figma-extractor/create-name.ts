import { pascalCase } from 'change-case'

export function createName(baseName: string, isOutline: boolean) {
  if (isOutline) {
    return pascalCase(`${baseName}Outline`)
  }

  return pascalCase(baseName)
}
