/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface EqualProps extends SVGAttributes<SVGSVGElement> {
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

export const Equal = forwardRef<SVGSVGElement, EqualProps>((props, ref) => {
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
        d="M20.75 7a1.25 1.25 0 1 1 0 2.5H3.25a1.25 1.25 0 0 1 0-2.5h17.5zM20.75 15.5a1.25 1.25 0 1 1 0 2.5H3.25a1.25 1.25 0 1 1 0-2.5h17.5z"
        fill="currentColor"
      />
    </svg>
  )
})
