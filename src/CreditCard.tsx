/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface CreditCardProps extends SVGAttributes<SVGSVGElement> {
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

export const CreditCard = forwardRef<SVGSVGElement, CreditCardProps>((props, ref) => {
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
        d="M2 9c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 5 4.6 5 6 5h12c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C22 6.9 22 7.6 22 9H2zm0 2h20v4c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 19 19.4 19 18 19H6c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 17.1 2 16.4 2 15v-4zm3 4a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2H6a1 1 0 0 0-1 1z"
        fill="currentColor"
      />
    </svg>
  )
})
