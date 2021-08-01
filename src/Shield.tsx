/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ShieldProps extends SVGAttributes<SVGSVGElement> {
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

export const Shield = forwardRef<SVGSVGElement, ShieldProps>((props, ref) => {
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
        d="M12 22c-1.148 0-3.418-1.362-5.13-3.34C4.44 15.854 3 11.967 3 7a1 1 0 0 1 .629-.929c3.274-1.31 5.88-2.613 7.816-3.903a1 1 0 0 1 1.11 0c1.935 1.29 4.543 2.594 7.816 3.903A1 1 0 0 1 21 7c0 4.968-1.44 8.855-3.87 11.66C15.419 20.637 13.149 22 12 22z"
        fill="currentColor"
      />
    </svg>
  )
})
