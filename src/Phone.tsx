/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface PhoneProps extends SVGAttributes<SVGSVGElement> {
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

export const Phone = forwardRef<SVGSVGElement, PhoneProps>((props, ref) => {
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
        d="M14.795 2h-5.59c-1.115 0-1.519.116-1.926.334a2.272 2.272 0 0 0-.945.945C6.116 3.686 6 4.09 6 5.205v13.59c0 1.114.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h5.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.218-.407.334-.811.334-1.926V5.205c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945C16.314 2.116 15.91 2 14.795 2zM8 17.995V6.005h8v11.99H8z"
        fill="currentColor"
      />
    </svg>
  )
})
