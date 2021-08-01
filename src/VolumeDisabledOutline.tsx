/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface VolumeDisabledOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const VolumeDisabledOutline = forwardRef<SVGSVGElement, VolumeDisabledOutlineProps>(
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
          d="M21.707 20.707a1 1 0 0 0 0-1.414l-16-16a1 1 0 0 0-1.414 1.414L8.586 9H6.5A1.5 1.5 0 0 0 5 10.5v3A1.5 1.5 0 0 0 6.5 15h2.593l4.75 5.013a1.25 1.25 0 0 0 2.157-.86v-2.739l4.293 4.293a1 1 0 0 0 1.414 0zM14 14.414l-3.74-3.74-.307.326H7v2h2.953L14 17.271v-2.857zm2-9.567v5.91l-2-2V6.73l-.987 1.041-1.415-1.414 2.245-2.37a1.25 1.25 0 0 1 2.157.86z"
          fill="currentColor"
        />
      </svg>
    )
  },
)
