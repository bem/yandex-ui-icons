/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface CheckProps extends SVGAttributes<SVGSVGElement> {
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

export const Check = forwardRef<SVGSVGElement, CheckProps>((props, ref) => {
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
        d="M19.716 4.386a1 1 0 0 1 1.572 1.236L10.665 19.136a1.5 1.5 0 0 1-2.324.042l-5.104-6.032a1 1 0 1 1 1.526-1.292l4.708 5.564L19.716 4.386z"
        fill="currentColor"
      />
    </svg>
  )
})
