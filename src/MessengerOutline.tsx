/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface MessengerOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const MessengerOutline = forwardRef<SVGSVGElement, MessengerOutlineProps>((props, ref) => {
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
        d="M15.136 20.28A9.47 9.47 0 0 1 11.5 21a9.5 9.5 0 1 1 9.5-9.5 9.47 9.47 0 0 1-.72 3.636c-.3.721-.381 1.435-.246 2.143.019.095.044.19.076.281l.663 1.902a1.03 1.03 0 0 1-1.31 1.311l-1.914-.667a2 2 0 0 0-.26-.071c-.699-.143-1.417-.061-2.153.244zm-.766-1.848a5.774 5.774 0 0 1 1.815-.439C17.409 17.908 19 19 19 19s-1.087-1.592-1.003-2.817c.041-.609.187-1.216.435-1.813.373-.9.568-1.87.568-2.87a7.5 7.5 0 1 0-4.63 6.932zM11.5 16a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm2.5-4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
        fill="currentColor"
      />
    </svg>
  )
})
