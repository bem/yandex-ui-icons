/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface PlayOffProps extends SVGAttributes<SVGSVGElement> {
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

export const PlayOff = forwardRef<SVGSVGElement, PlayOffProps>((props, ref) => {
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
        d="M19.707 20.707a1 1 0 0 0 0-1.414l-16-16a1 1 0 0 0-1.414 1.414L6 8.414v10.902a1.5 1.5 0 0 0 2.286 1.277l6.124-3.769 3.883 3.883a1 1 0 0 0 1.414 0zm.467-7.43-2.262 1.392L6.674 3.432a1.488 1.488 0 0 1 1.612-.025l11.888 7.315a1.5 1.5 0 0 1 0 2.555z"
        fill="currentColor"
      />
    </svg>
  )
})
