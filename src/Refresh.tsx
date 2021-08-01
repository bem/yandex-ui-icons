/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface RefreshProps extends SVGAttributes<SVGSVGElement> {
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

export const Refresh = forwardRef<SVGSVGElement, RefreshProps>((props, ref) => {
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
        d="M12 2.181a.75.75 0 0 1 1.177-.616l4.432 3.068a.75.75 0 0 1 0 1.234l-4.432 3.068A.75.75 0 0 1 12 8.32V6a7 7 0 1 0 7 7 1 1 0 1 1 2 0 9 9 0 1 1-9-9V2.181z"
        fill="currentColor"
      />
    </svg>
  )
})
