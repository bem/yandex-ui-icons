/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ShareProps extends SVGAttributes<SVGSVGElement> {
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

export const Share = forwardRef<SVGSVGElement, ShareProps>((props, ref) => {
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
        d="M20 5.75a3.25 3.25 0 0 1-5.532 2.314L9.31 10.906a3.245 3.245 0 0 1-.001 2.192l5.156 2.84a3.25 3.25 0 1 1-.922 1.775l-5.478-3.017a3.25 3.25 0 1 1 .004-5.389l5.474-3.018A3.25 3.25 0 1 1 20 5.75z"
        fill="currentColor"
      />
    </svg>
  )
})
