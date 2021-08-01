/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ArrowLongBackProps extends SVGAttributes<SVGSVGElement> {
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

export const ArrowLongBack = forwardRef<SVGSVGElement, ArrowLongBackProps>((props, ref) => {
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
        d="M2.407 13.058a1.495 1.495 0 0 1 0-2.116L8.04 5.3c.39-.39 1.03-.39 1.42 0 .39.39.39 1.02 0 1.41L6.744 9.427a9.992 9.992 0 0 1-1.768 1.406l-.342.214.208.207A10 10 0 0 1 7.082 11h13.92a1 1 0 1 1 0 2H7.083a10 10 0 0 1-2.24-.254l-.208.207.342.214c.641.4 1.233.872 1.768 1.406L9.46 17.29c.39.39.39 1.02 0 1.41-.39.39-1.03.39-1.42 0l-5.633-5.642z"
        fill="currentColor"
      />
    </svg>
  )
})
