/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface RemoteForwardOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const RemoteForwardOutline = forwardRef<SVGSVGElement, RemoteForwardOutlineProps>(
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
          d="M3.276 5.183A1.5 1.5 0 0 0 3 6.05v11.9a1.5 1.5 0 0 0 2.367 1.224L12 14.478v3.402a1.5 1.5 0 0 0 2.39 1.207l7.973-5.88a1.5 1.5 0 0 0 0-2.415l-7.973-5.88A1.5 1.5 0 0 0 12 6.12v3.402L5.367 4.826a1.5 1.5 0 0 0-2.091.357zM5 7.016v9.967L12.039 12 5 7.016zM20.63 12 14 16.89V7.11L20.63 12z"
          fill="currentColor"
        />
      </svg>
    )
  },
)
