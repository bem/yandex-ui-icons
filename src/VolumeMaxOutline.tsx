/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface VolumeMaxOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const VolumeMaxOutline = forwardRef<SVGSVGElement, VolumeMaxOutlineProps>((props, ref) => {
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
        d="M11.843 3.987 7.093 9H4.5A1.5 1.5 0 0 0 3 10.5v3A1.5 1.5 0 0 0 4.5 15h2.593l4.75 5.013a1.25 1.25 0 0 0 2.157-.86V4.847a1.25 1.25 0 0 0-2.157-.86zM5 13v-2h2.953L12 6.729V17.27L7.953 13H5zm15.071 6.07a1 1 0 1 1-1.414-1.413A7.97 7.97 0 0 0 21 12a7.97 7.97 0 0 0-2.343-5.656 1 1 0 1 1 1.415-1.415A9.97 9.97 0 0 1 23 12a9.97 9.97 0 0 1-2.929 7.072zm-3.673-3.269a1 1 0 0 0 1.4-.198A5.978 5.978 0 0 0 19 12a5.977 5.977 0 0 0-1.197-3.596 1 1 0 0 0-1.6 1.2c.515.686.797 1.518.797 2.396 0 .88-.284 1.713-.8 2.401a1 1 0 0 0 .198 1.4z"
        fill="currentColor"
      />
    </svg>
  )
})
