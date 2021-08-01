/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface VolumeOffOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const VolumeOffOutline = forwardRef<SVGSVGElement, VolumeOffOutlineProps>((props, ref) => {
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
        d="M11.843 3.987 7.093 9H4.5A1.5 1.5 0 0 0 3 10.5v3A1.5 1.5 0 0 0 4.5 15h2.593l4.75 5.013a1.25 1.25 0 0 0 2.157-.86V4.847a1.25 1.25 0 0 0-2.157-.86zM5 13v-2h2.953L12 6.729V17.27L7.953 13H5zm11.293-2.794a1 1 0 1 1 1.414-1.413l1.794 1.794 1.792-1.79a1 1 0 0 1 1.414 1.414l-1.793 1.791 1.793 1.795a1 1 0 1 1-1.414 1.413l-1.794-1.794-1.792 1.79a1 1 0 0 1-1.414-1.414l1.793-1.791-1.793-1.795z"
        fill="currentColor"
      />
    </svg>
  )
})
