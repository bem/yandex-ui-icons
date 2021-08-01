/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface MessengerUnreadProps extends SVGAttributes<SVGSVGElement> {
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

export const MessengerUnread = forwardRef<SVGSVGElement, MessengerUnreadProps>((props, ref) => {
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
        d="M23 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 5a5 5 0 0 1-4.838-6.268A9.471 9.471 0 0 0 11.5 2a9.5 9.5 0 1 0 0 19 9.47 9.47 0 0 0 3.636-.72 4.055 4.055 0 0 1 2.297-.213l.017.004.016.005 2.616.684a.555.555 0 0 0 .678-.678l-.678-2.592a1.468 1.468 0 0 1-.02-.08c-.042-.212-.214-1.233.217-2.274A9.47 9.47 0 0 0 21 11.5c0-.88-.12-1.733-.344-2.543A5.046 5.046 0 0 1 20 9zm-4.5 2.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
        fill="currentColor"
      />
    </svg>
  )
})
