/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ErrorOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const ErrorOutline = forwardRef<SVGSVGElement, ErrorOutlineProps>((props, ref) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-9.25 4.243c0-.723.55-1.243 1.243-1.243.708 0 1.257.52 1.257 1.243 0 .722-.55 1.257-1.257 1.257a1.228 1.228 0 0 1-1.243-1.257zM11.322 6a.5.5 0 0 0-.5.522l.307 7a.5.5 0 0 0 .5.478h.742a.5.5 0 0 0 .5-.478l.306-7a.5.5 0 0 0-.5-.522h-1.355z"
        fill="currentColor"
      />
    </svg>
  )
})
