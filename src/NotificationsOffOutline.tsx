/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface NotificationsOffOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const NotificationsOffOutline = forwardRef<SVGSVGElement, NotificationsOffOutlineProps>(
  (props, ref) => {
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
          d="m17.972 12.751-.42-3.782a5.586 5.586 0 0 0-3.24-4.469l-.3-.164a1.5 1.5 0 0 1-.75-1.021l-.142-.712A.75.75 0 0 0 12.385 2h-.77a.75.75 0 0 0-.736.603l-.142.712a1.5 1.5 0 0 1-.75 1.02l-.3.165a5.582 5.582 0 0 0-.616.329l1.478 1.477a3.586 3.586 0 0 1 5.015 2.884l.266 2.398 1.912 1.912a.241.241 0 0 0 .241.06.08.08 0 0 0 .056-.085l-.067-.724z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.293 4.707 6.63 8.044a5.61 5.61 0 0 0-.182.925l-.54 4.865a3.375 3.375 0 0 1-1.283 2.291l-.354.275a1.5 1.5 0 0 0-.534 1.548L3.75 18c.147.588.675 1 1.28 1H9a3 3 0 1 0 6 0h2.586l1.707 1.707a1 1 0 0 0 1.414-1.414l-16-16a1 1 0 0 0-1.414 1.414zM6.1 17h9.486L8.369 9.784l-.474 4.27C7.773 15.154 7.499 16.15 6.1 17z"
          fill="currentColor"
        />
      </svg>
    )
  },
)
