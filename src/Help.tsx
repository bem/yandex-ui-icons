/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface HelpProps extends SVGAttributes<SVGSVGElement> {
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

export const Help = forwardRef<SVGSVGElement, HelpProps>((props, ref) => {
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
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7.92 9.234v.102a.5.5 0 0 0 .5.5h.997a.499.499 0 0 0 .499-.499c0-1.29.998-1.979 2.34-1.979 1.308 0 2.168.689 2.168 1.67 0 .928-.482 1.359-1.686 1.91l-.344.154C11.379 11.54 11 12.21 11 13.381v.119a.5.5 0 0 0 .5.5h.997a.499.499 0 0 0 .499-.499c0-.516.138-.723.55-.912l.345-.155c1.445-.654 2.529-1.514 2.529-3.39v-.103c0-1.978-1.72-3.441-4.164-3.441-2.478 0-4.336 1.428-4.336 3.734zm2.58 7.757c0 .867.659 1.509 1.491 1.509.85 0 1.509-.642 1.509-1.509 0-.867-.659-1.491-1.509-1.491-.832 0-1.491.624-1.491 1.491z"
        fill="currentColor"
      />
    </svg>
  )
})
