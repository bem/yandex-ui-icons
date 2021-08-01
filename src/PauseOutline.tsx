/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface PauseOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const PauseOutline = forwardRef<SVGSVGElement, PauseOutlineProps>((props, ref) => {
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
        d="M9.077 3H6.923c-.669 0-.911.07-1.156.2-.244.131-.436.323-.567.567-.13.245-.2.487-.2 1.156v14.154c0 .669.07.911.2 1.156.131.244.323.436.567.567.245.13.487.2 1.156.2h2.154c.669 0 .911-.07 1.156-.2.244-.131.436-.323.567-.567.13-.245.2-.487.2-1.156V4.923c0-.669-.07-.911-.2-1.156a1.363 1.363 0 0 0-.567-.567c-.245-.13-.487-.2-1.156-.2zm8 0h-2.154c-.669 0-.911.07-1.156.2-.244.131-.436.323-.567.567-.13.245-.2.487-.2 1.156v14.154c0 .669.07.911.2 1.156.131.244.323.436.567.567.245.13.487.2 1.156.2h2.154c.669 0 .911-.07 1.156-.2.244-.131.436-.323.567-.567.13-.245.2-.487.2-1.156V4.923c0-.669-.07-.911-.2-1.156a1.363 1.363 0 0 0-.567-.567c-.245-.13-.487-.2-1.156-.2zM7 5v14h2V5H7zm10 14h-2V5h2v14z"
        fill="currentColor"
      />
    </svg>
  )
})
