/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface RecentOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const RecentOutline = forwardRef<SVGSVGElement, RecentOutlineProps>((props, ref) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 12 20zm4.42-5.106a.999.999 0 0 0-.526-1.313L13 12.34V7a1 1 0 0 0-2 0v5.67c0 .6.358 1.143.91 1.379l3.196 1.37a1 1 0 0 0 1.313-.525h.001z"
        fill="currentColor"
      />
    </svg>
  )
})
