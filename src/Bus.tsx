/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface BusProps extends SVGAttributes<SVGSVGElement> {
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

export const Bus = forwardRef<SVGSVGElement, BusProps>((props, ref) => {
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
        d="M3 21.25c0 .414.336.75.75.75h1.615a.75.75 0 0 0 .74-.627L6.5 19h11l.395 2.373a.75.75 0 0 0 .74.627h1.615a.75.75 0 0 0 .75-.75V10l.78-.78a.75.75 0 0 0 .22-.53V6.75a.75.75 0 0 0-.75-.75H21v-.995c0-1.171-.814-2.183-1.97-2.373C17.299 2.347 14.65 2 12 2c-2.65 0-5.299.347-7.03.632C3.814 2.822 3 3.834 3 5.005V6h-.25a.75.75 0 0 0-.75.75v1.94c0 .198.079.389.22.53L3 10v11.25zm5-6.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm9.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5 5.145V11h14V5.145c0-.37-.27-.685-.638-.732-1.166-.15-3.764-.442-6.362-.442-2.598 0-5.196.291-6.362.442A.734.734 0 0 0 5 5.145z"
        fill="currentColor"
      />
    </svg>
  )
})
