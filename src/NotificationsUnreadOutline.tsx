/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface NotificationsUnreadOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const NotificationsUnreadOutline = forwardRef<
  SVGSVGElement,
  NotificationsUnreadOutlineProps
>((props, ref) => {
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
        d="M11.989 2.527a.75.75 0 0 1 .812-.494l.763.107a.75.75 0 0 1 .644.7l.042.724a1.5 1.5 0 0 0 .6 1.116l.275.204a5.586 5.586 0 0 1 2.586 4.877l-.142 4.892c-.026.91.317 1.793.95 2.447l.313.322a1.5 1.5 0 0 1 .314 1.607l-.02.05a1.32 1.32 0 0 1-1.408.812l-2.76-.388a3 3 0 0 1-5.94-.835l-5.103-.717a1.32 1.32 0 0 1-1.129-1.169l-.006-.053a1.5 1.5 0 0 1 .745-1.458l.388-.224a3.375 3.375 0 0 0 1.59-2.09l1.211-4.742a5.586 5.586 0 0 1 3.83-3.975l.32-.12a1.5 1.5 0 0 0 .885-.908l.24-.685zm3.58 12.067c-.032 1.106.105 2.131 1.368 3.167L5.252 16.12c1.504-.647 1.914-1.595 2.188-2.667L8.652 8.71a3.586 3.586 0 0 1 7.06.993l-.142 4.892z"
        fill="currentColor"
      />
    </svg>
  )
})
