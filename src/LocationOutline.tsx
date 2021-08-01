/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface LocationOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const LocationOutline = forwardRef<SVGSVGElement, LocationOutlineProps>((props, ref) => {
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
        d="M15.862 16.67c2.19-1.092 3.638-3.574 3.638-6.313C19.5 6.301 16.149 3 12 3s-7.5 3.3-7.5 7.357c0 2.478 1.183 4.76 3.06 5.983.189.123.384.235.585.334C9.9 17.55 11.144 18.42 12 19.327c.858-.908 2.103-1.78 3.861-2.656zM12 22.5c-1 0 .183-1.579-4.747-4.035a7.857 7.857 0 0 1-.785-.45C4.015 16.419 2.5 13.5 2.5 10.358 2.5 5.19 6.753 1 12 1s9.5 4.19 9.5 9.357c0 3.462-1.844 6.657-4.745 8.104C11.82 20.92 13 22.5 12 22.5zm0-7.7a4.3 4.3 0 1 0 0-8.6 4.3 4.3 0 0 0 0 8.6zm0-2a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6z"
        fill="currentColor"
      />
    </svg>
  )
})
