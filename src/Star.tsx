/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface StarProps extends SVGAttributes<SVGSVGElement> {
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

export const Star = forwardRef<SVGSVGElement, StarProps>((props, ref) => {
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
        d="m12 17.328-5.403 3.286a.75.75 0 0 1-1.12-.813l1.456-6.155-4.796-4.123a.75.75 0 0 1 .428-1.316l6.303-.517 2.44-5.835a.75.75 0 0 1 1.384 0l2.44 5.835 6.303.517a.75.75 0 0 1 .427 1.316l-4.795 4.123 1.456 6.155a.75.75 0 0 1-1.12.813L12 17.328z"
        fill="currentColor"
      />
    </svg>
  )
})
