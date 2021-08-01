/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface MessengerProps extends SVGAttributes<SVGSVGElement> {
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

export const Messenger = forwardRef<SVGSVGElement, MessengerProps>((props, ref) => {
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
        d="M15.136 20.28A9.47 9.47 0 0 1 11.5 21a9.5 9.5 0 1 1 9.5-9.5 9.47 9.47 0 0 1-.72 3.636c-.432 1.04-.26 2.062-.217 2.274.005.027.012.053.019.08l.678 2.592a.555.555 0 0 1-.678.678l-2.616-.684-.01-.003-.023-.006a4.055 4.055 0 0 0-2.297.212zm.364-8.78a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
        fill="currentColor"
      />
    </svg>
  )
})
