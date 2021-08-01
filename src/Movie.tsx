/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface MovieProps extends SVGAttributes<SVGSVGElement> {
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

export const Movie = forwardRef<SVGSVGElement, MovieProps>((props, ref) => {
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
        opacity=".6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4h18a1 1 0 0 1 1 1v1H2V5a1 1 0 0 1 1-1z"
        fill="currentColor"
      />
      <path
        opacity=".3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2h14a1 1 0 0 1 1 1v1H4V3a1 1 0 0 1 1-1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 6h22a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 2v3h3V8H1zm0 5v3h3v-3H1zm0 5v3h3v-3H1zM20 8v3h3V8h-3zm0 5v3h3v-3h-3zm0 5v3h3v-3h-3z"
        fill="currentColor"
      />
    </svg>
  )
})
