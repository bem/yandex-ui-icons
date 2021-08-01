/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface TagProps extends SVGAttributes<SVGSVGElement> {
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

export const Tag = forwardRef<SVGSVGElement, TagProps>((props, ref) => {
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
        d="M2.678 11.422a2.5 2.5 0 0 0 0 3.536l6.364 6.364a2.5 2.5 0 0 0 3.536 0l7.69-7.69A2.5 2.5 0 0 0 21 11.864V4.5A1.5 1.5 0 0 0 19.5 3h-7.365a2.5 2.5 0 0 0-1.768.732l-7.69 7.69zM14.988 7C13.878 7 13 7.832 13 8.988c0 1.157.878 2.012 1.988 2.012C16.121 11 17 10.145 17 8.988 17 7.832 16.12 7 14.988 7z"
        fill="currentColor"
      />
    </svg>
  )
})
