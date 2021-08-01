/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ArrowLongForwardProps extends SVGAttributes<SVGSVGElement> {
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

export const ArrowLongForward = forwardRef<SVGSVGElement, ArrowLongForwardProps>((props, ref) => {
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
        d="M21.596 13.058a1.495 1.495 0 0 0 0-2.116A39833.83 39833.83 0 0 0 15.963 5.3c-.39-.39-1.03-.39-1.42 0a.996.996 0 0 0 0 1.41l2.716 2.717a9.994 9.994 0 0 0 1.768 1.406l.342.214-.208.207a10 10 0 0 0-2.24-.254H3a1 1 0 1 0 0 2h13.922a10 10 0 0 0 2.24-.254l.207.207-.342.214c-.641.4-1.233.872-1.768 1.406l-2.716 2.717a.996.996 0 0 0 0 1.41c.39.39 1.03.39 1.42 0l5.633-5.642z"
        fill="currentColor"
      />
    </svg>
  )
})
