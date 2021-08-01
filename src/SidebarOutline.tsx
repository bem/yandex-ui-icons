/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface SidebarOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const SidebarOutline = forwardRef<SVGSVGElement, SidebarOutlineProps>((props, ref) => {
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
        d="M3 5.517a2.5 2.5 0 0 1 2.497-2.5l13-.014A2.5 2.5 0 0 1 21 5.503V18.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5V5.517zm2 0V18.5a.5.5 0 0 0 .5.5H14V5.008l-8.5.01a.5.5 0 0 0-.5.5zm11-.511V19h2.5a.5.5 0 0 0 .5-.5V5.503a.5.5 0 0 0-.5-.5l-2.5.003z"
        fill="currentColor"
      />
    </svg>
  )
})
