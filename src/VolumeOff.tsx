/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface VolumeOffProps extends SVGAttributes<SVGSVGElement> {
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

export const VolumeOff = forwardRef<SVGSVGElement, VolumeOffProps>((props, ref) => {
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
        d="M7.093 15H4.5A1.5 1.5 0 0 1 3 13.5v-3A1.5 1.5 0 0 1 4.5 9h2.593l5.181-5.469C12.896 2.875 14 3.315 14 4.22v15.562c0 .904-1.104 1.344-1.726.688L7.093 15zm9.2-4.794a1 1 0 1 1 1.414-1.413l1.794 1.794 1.792-1.79a1 1 0 1 1 1.414 1.414l-1.793 1.791 1.793 1.795a1 1 0 1 1-1.414 1.413l-1.794-1.794-1.792 1.791a1 1 0 0 1-1.414-1.415l1.793-1.79-1.793-1.796z"
        fill="currentColor"
      />
    </svg>
  )
})
