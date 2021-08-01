/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface HeartOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const HeartOutline = forwardRef<SVGSVGElement, HeartOutlineProps>((props, ref) => {
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
        d="M12.509 20.86C18.78 17.154 22 13.22 22 9c0-6.002-6.749-7.89-10-3.898C8.749 1.111 2 2.998 2 9c0 4.22 3.219 8.153 9.491 11.86a1 1 0 0 0 1.018 0zm.402-13.448C14.677 3.51 20 4.542 20 9c0 3.253-2.616 6.55-8 9.834C6.617 15.549 4 12.254 4 9c0-4.459 5.323-5.49 7.089-1.588.355.784 1.467.784 1.822 0z"
        fill="currentColor"
      />
    </svg>
  )
})
