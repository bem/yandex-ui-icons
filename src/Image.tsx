/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ImageProps extends SVGAttributes<SVGSVGElement> {
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

export const Image = forwardRef<SVGSVGElement, ImageProps>((props, ref) => {
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
        d="M6.205 3h11.59c1.114 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926v7.51l-4.391-4.053a1.5 1.5 0 0 0-2.265.27l-3.13 4.695-2.303-1.48a1.5 1.5 0 0 0-1.96.298L3.005 18.15A12.98 12.98 0 0 1 3 17.795V6.205c0-1.115.116-1.519.334-1.926.218-.407.538-.727.945-.945C4.686 3.116 5.09 3 6.205 3zm9.477 8.53L21 16.437v1.357c0 1.114-.116 1.519-.334 1.926a2.272 2.272 0 0 1-.945.945c-.407.218-.811.334-1.926.334H6.205c-1.115 0-1.519-.116-1.926-.334a2.305 2.305 0 0 1-.485-.345L8.2 15.067l2.346 1.508a1.5 1.5 0 0 0 2.059-.43l3.077-4.616zM7.988 6C6.878 6 6 6.832 6 7.988 6 9.145 6.879 10 7.988 10 9.121 10 10 9.145 10 7.988 10 6.832 9.121 6 7.988 6z"
        fill="currentColor"
      />
    </svg>
  )
})
