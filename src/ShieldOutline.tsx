/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ShieldOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const ShieldOutline = forwardRef<SVGSVGElement, ShieldOutlineProps>((props, ref) => {
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
        d="M6.87 18.66C8.581 20.637 10.851 22 12 22c1.148 0 3.418-1.362 5.13-3.34C19.56 15.854 21 11.967 21 7a1 1 0 0 0-.629-.929c-3.273-1.31-5.88-2.613-7.816-3.903a1 1 0 0 0-1.11 0C9.51 3.458 6.903 4.762 3.63 6.07A1 1 0 0 0 3 7c0 4.968 1.44 8.855 3.87 11.66zM12 20c-.469 0-2.25-1.068-3.62-2.65-2.006-2.317-3.25-5.52-3.37-9.68C7.82 6.516 10.149 5.359 12 4.19c1.851 1.168 4.18 2.325 6.99 3.479-.12 4.16-1.364 7.363-3.37 9.68C14.25 18.932 12.468 20 12 20z"
        fill="currentColor"
      />
    </svg>
  )
})
