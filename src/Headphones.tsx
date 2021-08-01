/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface HeadphonesProps extends SVGAttributes<SVGSVGElement> {
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

export const Headphones = forwardRef<SVGSVGElement, HeadphonesProps>((props, ref) => {
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
        d="M12 5a7 7 0 0 0-7 7v1h2.08c.67 0 1 0 1.26.13.23.12.41.3.53.53.13.25.13.59.13 1.26v4.16c0 .67 0 1-.13 1.26-.12.23-.3.41-.53.53-.25.13-.59.13-1.26.13H6.2c-1.12 0-1.68 0-2.1-.22a2 2 0 0 1-.88-.87C3.02 19.5 3 18.99 3 18v-6a9 9 0 1 1 18 0v6c0 .99-.01 1.5-.22 1.9a2 2 0 0 1-.87.88c-.43.22-.99.22-2.11.22h-.88c-.67 0-1 0-1.26-.13a1.2 1.2 0 0 1-.53-.53c-.13-.25-.13-.59-.13-1.26v-4.16c0-.67 0-1 .13-1.26.12-.23.3-.41.53-.53.25-.13.59-.13 1.26-.13H19v-1a7 7 0 0 0-7-7z"
        fill="currentColor"
      />
    </svg>
  )
})
