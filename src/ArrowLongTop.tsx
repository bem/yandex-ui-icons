/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ArrowLongTopProps extends SVGAttributes<SVGSVGElement> {
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

export const ArrowLongTop = forwardRef<SVGSVGElement, ArrowLongTopProps>((props, ref) => {
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
        d="M13.06 2.407a1.495 1.495 0 0 0-2.115 0C9.13 4.218 5.59 7.75 5.303 8.04c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l2.716-2.716a9.992 9.992 0 0 0 1.407-1.768l.214-.343.207.209a10 10 0 0 0-.255 2.239v13.922a1 1 0 1 0 2 0V7.08a10 10 0 0 0-.254-2.24l.207-.208.214.343c.401.64.872 1.233 1.407 1.768l2.716 2.716c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42-.288-.289-3.827-3.822-5.642-5.633z"
        fill="currentColor"
      />
    </svg>
  )
})
