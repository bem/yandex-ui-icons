/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ListProps extends SVGAttributes<SVGSVGElement> {
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

export const List = forwardRef<SVGSVGElement, ListProps>((props, ref) => {
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
        d="M3.25 5.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM7 6a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H7zm0 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H7zm-1 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm-4-5a1.25 1.25 0 1 1 2.5 0A1.25 1.25 0 0 1 2 12zm1.25 3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"
        fill="currentColor"
      />
    </svg>
  )
})
