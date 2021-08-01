/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface KidsModeProps extends SVGAttributes<SVGSVGElement> {
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

export const KidsMode = forwardRef<SVGSVGElement, KidsModeProps>((props, ref) => {
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
        d="M5.25 2a4.25 4.25 0 0 1 3.862 2.473A8.989 8.989 0 0 1 12 4c1.01 0 1.982.166 2.888.473a4.25 4.25 0 1 1 5.639 5.639c.307.906.473 1.878.473 2.888a9 9 0 1 1-17.527-2.888A4.25 4.25 0 0 1 5.25 2zM12 20c2.485 0 4.5-1.515 4.5-4 0-2.485-2.015-5-4.5-5s-4.5 2.515-4.5 5 2.015 4 4.5 4zM9.2 9.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0zm6.8 1.2A1.2 1.2 0 1 0 16 8a1.2 1.2 0 0 0 0 2.4zM13.75 14c0 .552-.784 1.5-1.75 1.5s-1.75-.948-1.75-1.5.784-1 1.75-1 1.75.448 1.75 1z"
        fill="currentColor"
      />
    </svg>
  )
})
