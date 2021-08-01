/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ShareOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const ShareOutline = forwardRef<SVGSVGElement, ShareOutlineProps>((props, ref) => {
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
        d="M17.25 9.25a3.49 3.49 0 0 1-2.545-1.098l-5.122 2.776a3.498 3.498 0 0 1-.002 2.148l5.123 2.773a3.5 3.5 0 1 1-.9 1.787l-5.365-2.904a3.5 3.5 0 1 1 .004-5.46l5.361-2.906A3.5 3.5 0 1 1 17.25 9.25zm1.5-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM7.75 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
        fill="currentColor"
      />
    </svg>
  )
})
