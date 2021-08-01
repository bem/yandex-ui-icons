/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface SubscribedProps extends SVGAttributes<SVGSVGElement> {
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

export const Subscribed = forwardRef<SVGSVGElement, SubscribedProps>((props, ref) => {
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
        d="M3.691 8.507c0 2.847 1.582 5.29 3.806 5.29 2.223 0 3.803-2.443 3.803-5.29 0-2.846-1.348-4.51-3.803-4.51-2.456 0-3.806 1.664-3.806 4.51zM1.326 19.192c.82.537 2.879.805 6.174.805 3.295 0 5.353-.268 6.174-.804a.5.5 0 0 0 .225-.453c-.152-2.228-2.287-3.343-6.403-3.343-4.117 0-6.249 1.115-6.395 3.344a.5.5 0 0 0 .225.451zm21.381-8.485a1 1 0 1 0-1.414-1.414L17 13.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l5-5z"
        fill="currentColor"
      />
    </svg>
  )
})
