/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface RemoteNextOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const RemoteNextOutline = forwardRef<SVGSVGElement, RemoteNextOutlineProps>((props, ref) => {
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
        d="M4 4.684a1.5 1.5 0 0 1 2.286-1.277L17 10V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-5L6.286 20.593A1.5 1.5 0 0 1 4 19.316V4.684zm2 13.737L16.434 12 6 5.58v12.84z"
        fill="currentColor"
      />
    </svg>
  )
})
