/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface RemoteNextProps extends SVGAttributes<SVGSVGElement> {
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

export const RemoteNext = forwardRef<SVGSVGElement, RemoteNextProps>((props, ref) => {
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
        d="M4 4.684a1.5 1.5 0 0 1 2.286-1.277L18 10.615V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-5.616l-11.714 7.21A1.5 1.5 0 0 1 4 19.315V4.684z"
        fill="currentColor"
      />
    </svg>
  )
})
