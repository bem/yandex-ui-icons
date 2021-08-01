/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface EyeOffProps extends SVGAttributes<SVGSVGElement> {
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

export const EyeOff = forwardRef<SVGSVGElement, EyeOffProps>((props, ref) => {
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
        d="M20.707 20.707a1 1 0 0 0 0-1.414l-16-16a1 1 0 0 0-1.414 1.414L5.205 6.62C2.785 8.338 1.5 10.683 1.5 12c0 2.25 3.75 7.5 10.5 7.5 1.916 0 3.59-.423 5.006-1.08l2.287 2.287a1 1 0 0 0 1.414 0zm-6.13-4.716-1.51-1.51a2.7 2.7 0 0 1-3.548-3.548l-1.51-1.51a4.75 4.75 0 0 0 6.568 6.568zM22.5 12c0 1.005-.749 2.61-2.18 4.078l-3.594-3.595a4.75 4.75 0 0 0-5.209-5.209L9.088 4.846C9.985 4.626 10.957 4.5 12 4.5c6.75 0 10.5 5.25 10.5 7.5z"
        fill="currentColor"
      />
    </svg>
  )
})
