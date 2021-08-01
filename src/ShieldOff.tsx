/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ShieldOffProps extends SVGAttributes<SVGSVGElement> {
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

export const ShieldOff = forwardRef<SVGSVGElement, ShieldOffProps>((props, ref) => {
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
        d="M21 7c0 3.147-.578 5.86-1.619 8.139L8.25 4.007a31.17 31.17 0 0 0 3.196-1.839 1 1 0 0 1 1.11 0c1.935 1.29 4.543 2.594 7.816 3.903A1 1 0 0 1 21 7zM4.36 5.774c-.24.1-.484.198-.731.297A1 1 0 0 0 3 7c0 4.968 1.44 8.855 3.87 11.66C8.581 20.637 10.851 22 12 22c1.148 0 3.418-1.362 5.13-3.34l.054-.062 2.109 2.11a1 1 0 0 0 1.414-1.415l-16-16a1 1 0 0 0-1.414 1.414L4.36 5.774z"
        fill="currentColor"
      />
    </svg>
  )
})
