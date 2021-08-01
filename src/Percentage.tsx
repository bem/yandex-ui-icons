/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface PercentageProps extends SVGAttributes<SVGSVGElement> {
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

export const Percentage = forwardRef<SVGSVGElement, PercentageProps>((props, ref) => {
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
        d="M7.25 10.5a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5zm-1.543 9.207a1 1 0 0 1-1.414-1.414l14-14a1 1 0 1 1 1.414 1.414l-14 14zM13 17.25a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0zM7.25 8.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm11.25 8.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"
        fill="currentColor"
      />
    </svg>
  )
})
