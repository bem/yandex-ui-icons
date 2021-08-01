/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface NotificationsUnreadProps extends SVGAttributes<SVGSVGElement> {
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

export const NotificationsUnread = forwardRef<SVGSVGElement, NotificationsUnreadProps>(
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
          d="M11.99 2.524a.75.75 0 0 1 .812-.495l.763.107a.75.75 0 0 1 .644.7l.042.724a1.5 1.5 0 0 0 .6 1.116l.276.205a5.586 5.586 0 0 1 2.585 4.876l-.142 4.892c-.027.91.316 1.794.95 2.448l.313.321a1.5 1.5 0 0 1 .314 1.608l-.02.05a1.32 1.32 0 0 1-1.408.811l-2.76-.388a3 3 0 0 1-5.94-.834l-5.103-.718a1.32 1.32 0 0 1-1.13-1.168l-.005-.053a1.5 1.5 0 0 1 .745-1.459l.388-.223a3.375 3.375 0 0 0 1.59-2.09l1.211-4.742a5.586 5.586 0 0 1 3.83-3.975l.32-.121a1.5 1.5 0 0 0 .885-.907l.24-.685z"
          fill="currentColor"
        />
      </svg>
    )
  },
)
