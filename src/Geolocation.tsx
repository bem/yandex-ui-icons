/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface GeolocationProps extends SVGAttributes<SVGSVGElement> {
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

export const Geolocation = forwardRef<SVGSVGElement, GeolocationProps>((props, ref) => {
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
        d="m9.5 14.5-6.737-1.773c-.915-.241-1.015-1.5-.15-1.882l16.878-7.458c.71-.313 1.435.411 1.122 1.121l-7.458 16.879c-.383.865-1.641.765-1.882-.15L9.5 14.5z"
        fill="currentColor"
      />
    </svg>
  )
})
