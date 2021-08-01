/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface HelpOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const HelpOutline = forwardRef<SVGSVGElement, HelpOutlineProps>((props, ref) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-9.25 4.243c0-.723.55-1.243 1.243-1.243.708 0 1.257.52 1.257 1.243 0 .722-.55 1.257-1.257 1.257a1.228 1.228 0 0 1-1.243-1.257zM12.225 6.5c-2.157 0-3.775 1.243-3.775 3.25v.025a.5.5 0 0 0 .5.5h.803c.24 0 .435-.195.435-.435 0-1.123.868-1.722 2.037-1.722 1.138 0 1.887.599 1.887 1.453 0 .809-.42 1.183-1.468 1.663l-.3.134c-.883.39-1.213.974-1.213 1.993v.139a.5.5 0 0 0 .5.5h.738a.5.5 0 0 0 .5-.5v-.034c0-.45.12-.63.48-.794l.299-.135c1.258-.57 2.202-1.318 2.202-2.951v-.09c0-1.723-1.498-2.996-3.625-2.996z"
        fill="currentColor"
      />
    </svg>
  )
})
