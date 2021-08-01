/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface VolumeMinOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const VolumeMinOutline = forwardRef<SVGSVGElement, VolumeMinOutlineProps>((props, ref) => {
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
        d="m7.093 9 4.75-5.013a1.25 1.25 0 0 1 2.157.86v14.306a1.25 1.25 0 0 1-2.157.86L7.093 15H4.5A1.5 1.5 0 0 1 3 13.5v-3A1.5 1.5 0 0 1 4.5 9h2.593zM5 11v2h2.953L12 17.27V6.73l-4.047 4.27H5zM16.398 15.8a1 1 0 0 0 1.4-.198A5.978 5.978 0 0 0 19 12a5.977 5.977 0 0 0-1.197-3.596 1 1 0 0 0-1.6 1.2c.515.686.797 1.518.797 2.396 0 .88-.284 1.713-.8 2.401a1 1 0 0 0 .198 1.4z"
        fill="currentColor"
      />
    </svg>
  )
})
