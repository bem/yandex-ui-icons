/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface SidebarProps extends SVGAttributes<SVGSVGElement> {
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

export const Sidebar = forwardRef<SVGSVGElement, SidebarProps>((props, ref) => {
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
        d="M5.497 3.017A2.5 2.5 0 0 0 3 5.517V18.5A2.5 2.5 0 0 0 5.5 21h13a2.5 2.5 0 0 0 2.5-2.5V5.503a2.5 2.5 0 0 0-2.503-2.5l-13 .014zM5 18.5V5.517a.5.5 0 0 1 .5-.5l8.5-.014V19H5.5a.5.5 0 0 1-.5-.5z"
        fill="currentColor"
      />
    </svg>
  )
})
