/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface CopyProps extends SVGAttributes<SVGSVGElement> {
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

export const Copy = forwardRef<SVGSVGElement, CopyProps>((props, ref) => {
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
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 5h7.795c1.115 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926V16a1 1 0 1 0 2 0V8.128c0-1.783-.186-2.43-.534-3.082a3.635 3.635 0 0 0-1.512-1.512C18.302 3.186 17.655 3 15.872 3H8a1 1 0 0 0 0 2zm7.721 2.334C15.314 7.116 14.91 7 13.795 7h-7.59c-1.115 0-1.519.116-1.926.334a2.272 2.272 0 0 0-.945.945C3.116 8.686 3 9.09 3 10.205v7.59c0 1.114.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h7.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.218-.407.334-.811.334-1.926v-7.59c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})
