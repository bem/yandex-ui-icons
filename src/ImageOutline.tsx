/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ImageOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const ImageOutline = forwardRef<SVGSVGElement, ImageOutlineProps>((props, ref) => {
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
        d="M17.795 21H6.205c-1.115 0-1.519-.116-1.926-.334a2.272 2.272 0 0 1-.945-.945C3.116 19.314 3 18.91 3 17.795V6.205c0-1.115.116-1.519.334-1.926.218-.407.538-.727.945-.945C4.686 3.116 5.09 3 6.205 3h11.59c1.114 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926v11.59c0 1.114-.116 1.519-.334 1.926a2.272 2.272 0 0 1-.945.945c-.407.218-.811.334-1.926.334zM9 19H5.377l2.871-3.897 2.298 1.477a1.5 1.5 0 0 0 2.059-.43l3.09-4.634L19 14.454V19H9zm-4-3c0 .218-.012.49-.032.783.372-.777.93-1.84 1.49-2.62l.459-.624a1.5 1.5 0 0 1 2.018-.372l2.278 1.465 3.136-4.704a1.5 1.5 0 0 1 2.245-.29L19 11.779V6.205c0-.427-.019-.694-.049-.849a.353.353 0 0 0-.049-.134.275.275 0 0 0-.124-.124.353.353 0 0 0-.134-.049c-.155-.03-.422-.049-.849-.049H6.205c-.427 0-.694.019-.849.049a.353.353 0 0 0-.134.049.275.275 0 0 0-.124.124.353.353 0 0 0-.049.134c-.03.155-.049.422-.049.849V16zm3.74-9C7.769 7 7 7.728 7 8.74c0 1.011.769 1.76 1.74 1.76.991 0 1.76-.749 1.76-1.76C10.5 7.728 9.731 7 8.74 7z"
        fill="currentColor"
      />
    </svg>
  )
})
