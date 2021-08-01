/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ShowcaseProps extends SVGAttributes<SVGSVGElement> {
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

export const Showcase = forwardRef<SVGSVGElement, ShowcaseProps>((props, ref) => {
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
        d="M6 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C7.9 2 8.6 2 10 2h4c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C18 3.9 18 4.6 18 6v12c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C16.1 22 15.4 22 14 22h-4c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C6 20.1 6 19.4 6 18V6zm14 0a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V6zM3 5a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1z"
        fill="currentColor"
      />
    </svg>
  )
})
