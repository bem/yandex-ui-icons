/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface CloseCircleOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const CloseCircleOutline = forwardRef<SVGSVGElement, CloseCircleOutlineProps>(
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
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM7.756 9.167a1 1 0 1 1 1.415-1.414L12 10.585l2.828-2.828a1 1 0 1 1 1.414 1.414L13.415 12l2.828 2.83a1 1 0 1 1-1.415 1.414L12 13.414l-2.83 2.83a1 1 0 0 1-1.414-1.414l2.83-2.83-2.83-2.833z"
          fill="currentColor"
        />
      </svg>
    )
  },
)
