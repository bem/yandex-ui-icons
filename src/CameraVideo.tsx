/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface CameraVideoProps extends SVGAttributes<SVGSVGElement> {
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

export const CameraVideo = forwardRef<SVGSVGElement, CameraVideoProps>((props, ref) => {
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
        d="M2.272 6.365C2 6.9 2 7.6 2 9v6c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 19 4.6 19 6 19h6c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C16 17.1 16 16.4 16 15v-.42l4.407 3.25A1 1 0 0 0 22 17.025V6.98a1 1 0 0 0-1.593-.805L16 9.42V9c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C14.1 5 13.4 5 12 5H6c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093z"
        fill="currentColor"
      />
    </svg>
  )
})
