/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface FilterOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const FilterOutline = forwardRef<SVGSVGElement, FilterOutlineProps>((props, ref) => {
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
        d="M15 11a4.002 4.002 0 0 1-3.874-3H3a1 1 0 0 1 0-2h8.126a4.002 4.002 0 0 1 7.748 0H21a1 1 0 1 1 0 2h-2.126A4.002 4.002 0 0 1 15 11zM3 16a1 1 0 1 0 0 2h2.126a4.002 4.002 0 0 0 7.748 0H21a1 1 0 1 0 0-2h-8.126a4.002 4.002 0 0 0-7.748 0H3zm12-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
        fill="currentColor"
      />
    </svg>
  )
})
