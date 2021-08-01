/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ArrowLongBottomProps extends SVGAttributes<SVGSVGElement> {
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

export const ArrowLongBottom = forwardRef<SVGSVGElement, ArrowLongBottomProps>((props, ref) => {
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
        d="M10.944 21.596c.586.585 1.53.585 2.116 0 1.815-1.811 5.353-5.345 5.643-5.633.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-2.717 2.716a9.993 9.993 0 0 0-1.407 1.768l-.214.342-.207-.208a10 10 0 0 0 .255-2.24V3a1 1 0 1 0-2 0v13.922a10 10 0 0 0 .254 2.24l-.207.207-.214-.342a9.993 9.993 0 0 0-1.407-1.768l-2.716-2.716a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42l5.641 5.633z"
        fill="currentColor"
      />
    </svg>
  )
})
