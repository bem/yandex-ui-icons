/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ArrowShortForwardProps extends SVGAttributes<SVGSVGElement> {
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

export const ArrowShortForward = forwardRef<SVGSVGElement, ArrowShortForwardProps>((props, ref) => {
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
        d="M8.293 5.707a1 1 0 0 1 1.414-1.414l6.647 6.646a1.5 1.5 0 0 1 0 2.122l-6.647 6.646a1 1 0 0 1-1.414-1.414L14.586 12 8.293 5.707z"
        fill="currentColor"
      />
    </svg>
  )
})
