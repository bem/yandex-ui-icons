/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface EyeOffOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const EyeOffOutline = forwardRef<SVGSVGElement, EyeOffOutlineProps>((props, ref) => {
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
        d="M20.707 20.707a1 1 0 0 0 0-1.414l-16-16a1 1 0 0 0-1.414 1.414L5.205 6.62C2.785 8.338 1.5 10.683 1.5 12c0 2.25 3.75 7.5 10.5 7.5 1.916 0 3.59-.423 5.006-1.08l2.287 2.287a1 1 0 0 0 1.414 0zm-5.228-3.814-1.774-1.774A4 4 0 0 1 8.38 9.794L6.644 8.058a9.332 9.332 0 0 0-1.09.84C4.28 10.034 3.5 11.417 3.5 12c0 .584.781 1.966 2.052 3.103C7.231 16.605 9.438 17.5 12 17.5c1.25 0 2.417-.213 3.48-.607zm4.841-.815C21.751 14.61 22.5 13.006 22.5 12c0-2.25-3.75-7.5-10.5-7.5-1.043 0-2.015.125-2.912.346l1.721 1.72c.388-.043.785-.066 1.191-.066 2.562 0 4.77.895 6.448 2.397 1.27 1.137 2.052 2.52 2.052 3.103 0 .51-.596 1.63-1.595 2.663l1.415 1.415z"
        fill="currentColor"
      />
    </svg>
  )
})
