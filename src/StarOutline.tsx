/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface StarOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const StarOutline = forwardRef<SVGSVGElement, StarOutlineProps>((props, ref) => {
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
        d="m12 17.328-5.403 3.286a.75.75 0 0 1-1.12-.813l1.456-6.155-4.796-4.123a.75.75 0 0 1 .428-1.316l6.303-.517 2.44-5.835a.75.75 0 0 1 1.384 0l2.44 5.835 6.303.517a.75.75 0 0 1 .427 1.316l-4.795 4.123 1.456 6.155a.75.75 0 0 1-1.12.813L12 17.328zm.52-2.025 3.369 2.05-.908-3.838a1 1 0 0 1 .321-.989l2.99-2.57-3.93-.323a1 1 0 0 1-.84-.61L12 5.383l-1.521 3.638a1 1 0 0 1-.841.611l-3.93.323 2.99 2.57a1 1 0 0 1 .321.989l-.908 3.837 3.37-2.049a1 1 0 0 1 1.039 0z"
        fill="currentColor"
      />
    </svg>
  )
})
