import { optimize, extendDefaultPlugins } from 'svgo'

export function optimizeSvg(svg: string) {
  const result = optimize(svg, { plugins })

  return result.data
}

const plugins = extendDefaultPlugins([
  {
    name: 'removeViewBox',
    active: false,
  },
  {
    name: 'conver-fill',
    type: 'perItem',
    fn: (ast) => {
      if (ast.name === 'path' && ast.attributes.fill !== undefined) {
        ast.attributes.fill = 'currentColor'
      }

      if (ast.name === 'path' && ast.attributes.stroke !== undefined) {
        ast.attributes.stroke = 'currentColor'
      }
    },
  },
])
