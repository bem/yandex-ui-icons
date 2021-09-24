import { createName } from './create-name'
import { Meta, parseMeta } from './parse-meta'

export interface Component {
  name: string
  meta: Meta
}

export interface FigmaChildren {
  id: string
  name: string
  type: 'COMPONENT_SET' | 'COMPONENT'
  children: FigmaChildren[]
}

export const parseComponents = (page: FigmaChildren) => {
  const components = new Map<string, Component>()
  const visited = new Map<string, { count: number; max: number }>()

  for (const firstLevelChild of page.children) {
    if (firstLevelChild.type === 'COMPONENT_SET') {
      const setMeta = parseMeta(firstLevelChild.name)
      if (!setMeta.isExported) {
        continue
      }

      for (const secondLevelChild of firstLevelChild.children) {
        if (secondLevelChild.type === 'COMPONENT') {
          parseComponent(secondLevelChild, firstLevelChild.name, { visited, components })
        }
      }
    }
    if (firstLevelChild.type === 'COMPONENT') {
      parseComponent(firstLevelChild, undefined, { visited, components })
    }
  }

  return components
}

function parseComponent(
  component: FigmaChildren,
  parentName: string | undefined,
  closure: {
    visited: Map<string, { count: number; max: number }>
    components: Map<string, Component>
  },
) {
  const { visited, components } = closure
  const componentMeta = parseMeta(component.name)

  if (!componentMeta.isExported) {
    return
  }

  const name = createName(parentName || component.name, componentMeta.isOutline)
  const previous = visited.get(name)

  if (previous) {
    if (previous.max < componentMeta.size) {
      components.forEach((component, componentKey) => {
        if (component.name === name) {
          components.delete(componentKey)
        }
      })
      components.set(component.id, { meta: componentMeta, name })
      visited.set(name, {
        count: ++previous.count,
        max: componentMeta.size,
      })
    } else {
      if (previous.max === componentMeta.size) {
        console.log(`⚠️ Found name collision: ${name} ${componentMeta.size}`)
      }
      visited.set(name, {
        count: ++previous.count,
        max: previous.max,
      })
    }
  } else {
    components.set(component.id, { meta: componentMeta, name })
    visited.set(name, { count: 0, max: componentMeta.size })
  }
}
