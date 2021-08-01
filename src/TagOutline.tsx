/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface TagOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const TagOutline = forwardRef<SVGSVGElement, TagOutlineProps>((props, ref) => {
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
        d="M10.367 3.732A2.5 2.5 0 0 1 12.136 3H19.5A1.5 1.5 0 0 1 21 4.5v7.364a2.5 2.5 0 0 1-.733 1.768l-7.69 7.69a2.5 2.5 0 0 1-3.535 0l-6.364-6.364a2.5 2.5 0 0 1 0-3.536l7.69-7.69zM12.136 5a.5.5 0 0 0-.353.146l-7.69 7.69a.5.5 0 0 0 0 .708l6.364 6.364a.5.5 0 0 0 .707 0l7.69-7.69a.5.5 0 0 0 .147-.354V5h-6.865zm2.853 2C13.878 7 13 7.832 13 8.988c0 1.157.878 2.012 1.988 2.012C16.121 11 17 10.145 17 8.988 17 7.832 16.12 7 14.988 7z"
        fill="currentColor"
      />
    </svg>
  )
})
