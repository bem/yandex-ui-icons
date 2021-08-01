/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface VolumeDisabledProps extends SVGAttributes<SVGSVGElement> {
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

export const VolumeDisabled = forwardRef<SVGSVGElement, VolumeDisabledProps>((props, ref) => {
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
        d="M21.707 20.707a1 1 0 0 0 0-1.414l-16-16a1 1 0 0 0-1.414 1.414L8.586 9H6.5A1.5 1.5 0 0 0 5 10.5v3A1.5 1.5 0 0 0 6.5 15h2.593l5.181 5.468c.622.657 1.726.217 1.726-.687v-3.367l4.293 4.293a1 1 0 0 0 1.414 0zM16 4.22v6.538l-4.402-4.401 2.676-2.825C14.896 2.875 16 3.315 16 4.22z"
        fill="currentColor"
      />
    </svg>
  )
})
