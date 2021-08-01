/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface CommentOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const CommentOutline = forwardRef<SVGSVGElement, CommentOutlineProps>((props, ref) => {
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
        d="m8.417 15.816-.016-.003a1.5 1.5 0 0 0-1.217.298c-.54.43-1.006.74-1.397.934a4.91 4.91 0 0 0 .335-1.245 1.7 1.7 0 0 0-.472-1.397l-.159-.161C4.408 13.205 3.8 11.844 3.8 10.4c0-3.06 2.746-5.6 6.2-5.6s6.2 2.54 6.2 5.6c0 3.06-2.746 5.6-6.2 5.6a6.832 6.832 0 0 1-1.583-.184zM3.71 18.949c1.814-.146 3.244-.607 4.29-1.382.64.152 1.31.233 2 .233 4.418 0 8-3.313 8-7.4S14.418 3 10 3s-8 3.313-8 7.4c0 2.076.924 3.952 2.413 5.296a4.7 4.7 0 0 1-1.115 2.444.49.49 0 0 0 .412.809zm13.166-1.202c-1.263.674-3.03 1.154-5.552 1.24A7.392 7.392 0 0 0 15 19.95a7.434 7.434 0 0 0 3.183-.707c.869.52 1.986.834 3.354.944a.43.43 0 0 0 .36-.709 4.135 4.135 0 0 1-1.01-2.497A6.1 6.1 0 0 0 22 13.475c0-2.14-1.123-4.038-2.852-5.216.464.934.772 1.989.896 3.157.129 1.207.095 2.116-.091 2.857-.117.502-.322.99-.61 1.448l-.027.045a1.7 1.7 0 0 0-.075 1.577c.113.241.256.481.43.72-.316-.07-.69-.218-1.118-.447a1.5 1.5 0 0 0-1.386-.013l-.093.047a9.538 9.538 0 0 1-.198.097z"
        fill="currentColor"
      />
    </svg>
  )
})
