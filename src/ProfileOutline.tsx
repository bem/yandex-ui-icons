/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ProfileOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const ProfileOutline = forwardRef<SVGSVGElement, ProfileOutlineProps>((props, ref) => {
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
        d="M12 14.35c-3.25 0-5-3.175-5-6.725C7 4.15 9 2 12 2s5 2.15 5 5.625c0 3.55-1.75 6.725-5 6.725zm0-2c1.74 0 3-1.849 3-4.725C15 5.246 13.878 4 12 4S9 5.246 9 7.625c0 2.876 1.26 4.725 3 4.725zm-7.06 9.648a1 1 0 0 0 1.058-.938C6.114 19.138 8.041 18 12.004 18c3.96 0 5.883 1.136 6 3.06A1 1 0 0 0 20 20.94c-.195-3.218-3.11-4.94-7.996-4.94-4.89 0-7.81 1.724-8.002 4.94a1 1 0 0 0 .938 1.058z"
        fill="currentColor"
      />
    </svg>
  )
})
