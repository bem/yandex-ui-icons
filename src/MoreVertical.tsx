/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface MoreVerticalProps extends SVGAttributes<SVGSVGElement> {
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

export const MoreVertical = forwardRef<SVGSVGElement, MoreVerticalProps>((props, ref) => {
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
        d="M12 6.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm0 14a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM13.75 12a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"
        fill="currentColor"
      />
    </svg>
  )
})
