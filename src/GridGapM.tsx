/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface GridGapMProps extends SVGAttributes<SVGSVGElement> {
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

export const GridGapM = forwardRef<SVGSVGElement, GridGapMProps>((props, ref) => {
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
        d="M5.497 3.006A2.5 2.5 0 0 0 3 5.506V10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.001a1 1 0 0 0-1.001-1l-4.502.005zM3 14.008a1 1 0 0 1 .999-1l6-.007a1 1 0 0 1 1.001 1V20a1 1 0 0 1-1 1H5.5A2.5 2.5 0 0 1 3 18.5v-4.492zm10 0a1 1 0 0 1 .999-1l6-.007a1 1 0 0 1 1.001 1V18.5a2.5 2.5 0 0 1-2.5 2.5H14a1 1 0 0 1-1-1v-5.992zm0-10a1 1 0 0 1 .999-1l4.498-.005A2.5 2.5 0 0 1 21 5.503V10a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V4.008z"
        fill="currentColor"
      />
    </svg>
  )
})
