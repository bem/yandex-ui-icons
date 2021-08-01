/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface NightOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const NightOutline = forwardRef<SVGSVGElement, NightOutlineProps>((props, ref) => {
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
        d="M2.611 18.046c2.464 3.086 7.108 4.669 10.98 3.631 5.336-1.43 8.501-6.913 7.072-12.247-1.038-3.873-4.73-7.104-8.635-7.694a1 1 0 0 0-1.03 1.463c1.89 3.51 2.045 6.512.536 9.125-1.509 2.613-4.187 3.98-8.17 4.098a1 1 0 0 0-.753 1.624zm16.12-8.099a8 8 0 0 1-5.657 9.798c-2.433.652-5.738.002-7.82-1.512 3.474-.555 6.449-2.202 8.012-4.909 1.563-2.707 1.494-6.1.238-9.386 2.353 1.045 4.575 3.576 5.227 6.01z"
        fill="currentColor"
      />
    </svg>
  )
})
