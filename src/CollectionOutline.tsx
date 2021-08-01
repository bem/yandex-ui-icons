/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface CollectionOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const CollectionOutline = forwardRef<SVGSVGElement, CollectionOutlineProps>((props, ref) => {
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
        d="M8 3a1 1 0 0 0 1 1h5.795c1.114 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926V17a1 1 0 0 0 2 0V7.128c0-1.783-.186-2.43-.534-3.082a3.635 3.635 0 0 0-1.512-1.512C17.302 2.186 16.655 2 14.872 2H9a1 1 0 0 0-1 1zm4.795 3h-5.59c-1.115 0-1.519.116-1.926.334a2.272 2.272 0 0 0-.945.945C4.116 7.686 4 8.09 4 9.205v11.728a1 1 0 0 0 1.62.784L10 18.25l4.38 3.467a1.001 1.001 0 0 0 1.62-.784V9.205c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945C14.314 6.116 13.91 6 12.795 6zm1.156 2.356c.03.155.049.422.049.849v9.66l-2.759-2.183a2 2 0 0 0-2.482 0L6 18.866V9.205c0-.427.019-.694.049-.849a.353.353 0 0 1 .049-.134.275.275 0 0 1 .124-.124.353.353 0 0 1 .134-.049c.155-.03.422-.049.849-.049h5.59c.427 0 .694.019.849.049.06.012.074.017.134.049.054.027.097.07.124.124.032.06.037.073.049.134z"
        fill="currentColor"
      />
    </svg>
  )
})
