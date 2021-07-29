import { parse } from 'svg-parser'
import convertToBabelAst from '@svgr/hast-util-to-babel-ast'
import { transformFromAstSync } from '@babel/core'
import traverse from '@babel/traverse'
import * as t from '@babel/types'

import { format } from './formatter'

export function convertSvgToJsx(svg: string, name: string) {
  const hast = parse(svg)
  const ast = convertToBabelAst(hast)

  prepareSvgJsxAst(ast)

  const result = transformFromAstSync(ast, svg)
  const content = template({ name, svg: normalizeResultCode(result?.code ?? '') })

  return content
}

function prepareSvgJsxAst(ast: any) {
  traverse(ast, {
    JSXOpeningElement: (path) => {
      if (t.isJSXIdentifier(path.node.name) && path.node.name.name === 'svg') {
        path.node.attributes = path.node.attributes.filter((attr) => {
          return t.isJSXAttribute(attr) && attr.name.name !== 'fill' && attr.name.name !== 'xmlns'
        })

        path.node.attributes = path.node.attributes.map((attr) => {
          if (
            t.isJSXAttribute(attr) &&
            (attr.name.name === 'width' || attr.name.name === 'height')
          ) {
            attr.value = t.jsxExpressionContainer(t.identifier('size'))
          }
          return attr
        })

        path.node.attributes.push(
          t.jsxSpreadAttribute(t.identifier('otherProps')),
          t.jsxAttribute(t.jsxIdentifier('focusable'), t.stringLiteral('false')),
          t.jsxAttribute(t.jsxIdentifier('aria-hidden'), t.stringLiteral('true')),
          t.jsxAttribute(t.jsxIdentifier('className'), t.stringLiteral('SvgIcon')),
          t.jsxAttribute(t.jsxIdentifier('ref'), t.jsxExpressionContainer(t.identifier('ref'))),
        )
      }
    },
  })
}

function normalizeResultCode(code: string) {
  return code.replace(/;$/, '')
}

function template(props: { svg: string; name: string }) {
  const { svg, name } = props

  const template = `
    /* This file was created automatically, don't change it manually. */

    import React, { forwardRef } from 'react'

    export interface ${name}Props {
      /**
       * Additional className for svg root
       */
      className?: string
      /**
       * Icon size
       *
       * @default 24
       */
      size?: 12 | 16 | 24 | 32
    }

    export const ${name} = forwardRef<SVGSVGElement, ${name}Props>((props, ref) => {
      const { className, size = 24, ...otherProps } = props

      return (
        ${svg}
      )
    })
  `

  return format(template)
}
