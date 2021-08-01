/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface GeolocationOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const GeolocationOutline = forwardRef<SVGSVGElement, GeolocationOutlineProps>(
  (props, ref) => {
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
          d="M2.763 12.727 9.5 14.5l1.773 6.737a1 1 0 0 0 1.882.15l7.458-16.879a.85.85 0 0 0-1.121-1.12L2.613 10.844a1 1 0 0 0 .15 1.882zm7.246-.161L6.035 11.52l11.547-5.103-5.102 11.548-1.046-3.974a2 2 0 0 0-1.425-1.425z"
          fill="currentColor"
        />
      </svg>
    )
  },
)
