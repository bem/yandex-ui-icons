/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface LocationProps extends SVGAttributes<SVGSVGElement> {
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

export const Location = forwardRef<SVGSVGElement, LocationProps>((props, ref) => {
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
        d="M12 23.5c-1 0 .183-1.579-4.747-4.035a7.857 7.857 0 0 1-.785-.45C4.015 17.419 2.5 14.5 2.5 11.358 2.5 6.19 6.753 2 12 2s9.5 4.19 9.5 9.357c0 3.462-1.844 6.657-4.745 8.104C11.82 21.92 13 23.5 12 23.5zm0-8.39c2.111 0 3.8-1.672 3.8-3.705C15.8 9.372 14.111 7.7 12 7.7c-2.111 0-3.8 1.672-3.8 3.705 0 2.033 1.689 3.705 3.8 3.705z"
        fill="currentColor"
      />
    </svg>
  )
})
