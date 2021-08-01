/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface NotificationsUnreadDotProps extends SVGAttributes<SVGSVGElement> {
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

export const NotificationsUnreadDot = forwardRef<SVGSVGElement, NotificationsUnreadDotProps>(
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
        <path d="M16.752 10.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="currentColor" />
        <path
          d="M11.802 2.03a.75.75 0 0 0-.813.494l-.24.685a1.5 1.5 0 0 1-.884.907l-.32.12a5.586 5.586 0 0 0-3.83 3.976l-1.212 4.741a3.375 3.375 0 0 1-1.59 2.09l-.388.224a1.5 1.5 0 0 0-.744 1.459l.005.053a1.32 1.32 0 0 0 1.13 1.168l5.104.718a3 3 0 0 0 5.94.835l2.758.387c.6.084 1.18-.25 1.408-.812l.02-.05a1.5 1.5 0 0 0-.314-1.607l-.312-.321a3.375 3.375 0 0 1-.95-2.448l.069-2.4A5 5 0 0 1 13.26 3.67a1.48 1.48 0 0 1-.01-.11l-.042-.724a.75.75 0 0 0-.644-.7l-.763-.107z"
          fill="currentColor"
        />
      </svg>
    )
  },
)
