/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface SearchImageProps extends SVGAttributes<SVGSVGElement> {
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

export const SearchImage = forwardRef<SVGSVGElement, SearchImageProps>((props, ref) => {
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
        d="M8.269 3.637c-.294.263-.505.624-.927 1.348L6.75 6H6c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2 7.9 2 8.6 2 10v6c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 20 4.6 20 6 20h12c1.326 0 2.024 0 2.549-.232L15.363 16a5 5 0 1 1 1.182-1.613l5.325 3.869C22 17.762 22 17.095 22 16v-6c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 6 19.4 6 18 6h-.75l-.592-1.015c-.422-.724-.633-1.085-.927-1.348a2.5 2.5 0 0 0-.898-.516C14.458 3 14.04 3 13.203 3h-2.405c-.838 0-1.256 0-1.631.121a2.5 2.5 0 0 0-.898.516zM15 12.3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
        fill="currentColor"
      />
    </svg>
  )
})
