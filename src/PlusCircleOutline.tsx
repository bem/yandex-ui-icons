/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface PlusCircleOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const PlusCircleOutline = forwardRef<SVGSVGElement, PlusCircleOutlineProps>((props, ref) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM7 13a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4l4 .002a1 1 0 0 1 0 2L13 13V17a1 1 0 1 1-2 0v-4H7z"
        fill="currentColor"
      />
    </svg>
  )
})
