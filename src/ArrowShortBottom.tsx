/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ArrowShortBottomProps extends SVGAttributes<SVGSVGElement> {
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

export const ArrowShortBottom = forwardRef<SVGSVGElement, ArrowShortBottomProps>((props, ref) => {
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
        d="m12 14.586 6.293-6.293a1 1 0 1 1 1.414 1.414l-6.646 6.647a1.5 1.5 0 0 1-2.122 0L4.293 9.707a1 1 0 0 1 1.414-1.414L12 14.586z"
        fill="currentColor"
      />
    </svg>
  )
})
