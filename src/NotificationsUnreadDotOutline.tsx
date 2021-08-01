/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface NotificationsUnreadDotOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const NotificationsUnreadDotOutline = forwardRef<
  SVGSVGElement,
  NotificationsUnreadDotOutlineProps
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
        d="M12.801 2.03a.75.75 0 0 0-.812.494l-.24.685a1.5 1.5 0 0 1-.885.907l-.32.121a5.586 5.586 0 0 0-3.83 3.975l-1.212 4.741a3.375 3.375 0 0 1-1.589 2.09l-.388.224a1.5 1.5 0 0 0-.745 1.459l.006.053a1.32 1.32 0 0 0 1.13 1.168l5.103.718a3 3 0 0 0 5.94.835l2.759.387c.6.084 1.18-.25 1.407-.812l.02-.05a1.5 1.5 0 0 0-.313-1.607l-.312-.321a3.375 3.375 0 0 1-.951-2.448l.07-2.4a4.977 4.977 0 0 1-1.988-.46l-.081 2.802c-.032 1.106.104 2.13 1.367 3.167L5.252 16.116c1.504-.647 1.914-1.596 2.188-2.668l1.212-4.741a3.586 3.586 0 0 1 4.233-2.617 4.993 4.993 0 0 1 1.375-2.421 1.503 1.503 0 0 1-.01-.109l-.042-.724a.75.75 0 0 0-.644-.7L12.8 2.03z"
        fill="currentColor"
      />
      <path d="M17.75 10.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="currentColor" />
    </svg>
  )
})
