/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface NotificationsOffProps extends SVGAttributes<SVGSVGElement> {
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

export const NotificationsOff = forwardRef<SVGSVGElement, NotificationsOffProps>((props, ref) => {
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
        d="m17.972 12.751-.42-3.782a5.586 5.586 0 0 0-3.24-4.469l-.3-.164a1.5 1.5 0 0 1-.75-1.021l-.142-.712A.75.75 0 0 0 12.385 2h-.77a.75.75 0 0 0-.736.603l-.142.712a1.5 1.5 0 0 1-.75 1.02l-.3.165a5.582 5.582 0 0 0-.616.329l8.671 8.67a.241.241 0 0 0 .241.06.08.08 0 0 0 .056-.083l-.067-.725zM6.448 8.97a5.61 5.61 0 0 1 .182-.926L3.293 4.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414L17.586 19H15a3 3 0 1 1-6 0H5.03a1.32 1.32 0 0 1-1.28-1l-.013-.052A1.5 1.5 0 0 1 4.27 16.4l.354-.275a3.375 3.375 0 0 0 1.282-2.291l.54-4.865z"
        fill="currentColor"
      />
    </svg>
  )
})
