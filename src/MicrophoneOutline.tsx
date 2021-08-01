/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface MicrophoneOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const MicrophoneOutline = forwardRef<SVGSVGElement, MicrophoneOutlineProps>((props, ref) => {
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
        d="M12 2a3 3 0 0 1 3 3v7a3 3 0 1 1-6 0V5a3 3 0 0 1 3-3zm-6 9a1 1 0 0 0-1 1 7.001 7.001 0 0 0 6 6.93V21a1 1 0 1 0 2 0v-2.07A7.001 7.001 0 0 0 19 12a1 1 0 1 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-1-1zm5-6a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0V5z"
        fill="currentColor"
      />
    </svg>
  )
})
