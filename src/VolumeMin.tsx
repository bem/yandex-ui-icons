/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface VolumeMinProps extends SVGAttributes<SVGSVGElement> {
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

export const VolumeMin = forwardRef<SVGSVGElement, VolumeMinProps>((props, ref) => {
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
        d="M4.5 15h2.593l5.181 5.468c.622.657 1.726.217 1.726-.687V4.219c0-.904-1.104-1.344-1.726-.688L7.093 9H4.5A1.5 1.5 0 0 0 3 10.5v3A1.5 1.5 0 0 0 4.5 15zm11.898.801a1 1 0 0 0 1.4-.198A5.978 5.978 0 0 0 19 12a5.977 5.977 0 0 0-1.197-3.596 1 1 0 0 0-1.6 1.2c.515.686.797 1.518.797 2.396 0 .88-.284 1.714-.8 2.401a1 1 0 0 0 .198 1.4z"
        fill="currentColor"
      />
    </svg>
  )
})
