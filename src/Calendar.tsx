/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface CalendarProps extends SVGAttributes<SVGSVGElement> {
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

export const Calendar = forwardRef<SVGSVGElement, CalendarProps>((props, ref) => {
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
        d="M13 20v-4h4.001v4H13zm-6 0v-4h4v4H7zm-6 0v-4h4v4H1zm12-6v-4h4v4h-4zm-6 0v-4h4v4H7zm-6 0v-4h4v4H1zm18-6V3.999h4V8h-4zm0 6v-4h4v4h-4zm-6-6V3.999h4.001V8H13zM7 8V3.999h4V8H7z"
        fill="currentColor"
      />
    </svg>
  )
})
