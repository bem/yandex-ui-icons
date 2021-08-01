/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface GridFeedProps extends SVGAttributes<SVGSVGElement> {
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

export const GridFeed = forwardRef<SVGSVGElement, GridFeedProps>((props, ref) => {
  const { className, size = 24, ...otherProps } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...otherProps}
      focusable="false"
      aria-hidden="true"
      className={'SvgIcon' + (className ? ' ' + className : '')}
      ref={ref}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1zm0 7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C6.9 6 7.6 6 9 6h6c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C19 7.9 19 8.6 19 10v4c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C17.1 18 16.4 18 15 18H9c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C5 16.1 5 15.4 5 14v-4zm1 10a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6z"
        fill="currentColor"
      />
    </svg>
  )
})
