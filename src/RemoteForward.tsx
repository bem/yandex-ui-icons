/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface RemoteForwardProps extends SVGAttributes<SVGSVGElement> {
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

export const RemoteForward = forwardRef<SVGSVGElement, RemoteForwardProps>((props, ref) => {
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
        d="M3 5.625C3 4.6 4.167 4.01 4.992 4.619L12 9.787V5.625c0-1.025 1.167-1.615 1.992-1.006l8.371 6.174a1.5 1.5 0 0 1 0 2.414l-8.371 6.174c-.825.609-1.992.02-1.992-1.006v-4.163l-7.008 5.169C4.167 19.99 3 19.401 3 18.375V5.625z"
        fill="currentColor"
      />
    </svg>
  )
})
