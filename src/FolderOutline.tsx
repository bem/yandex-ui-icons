/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface FolderOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const FolderOutline = forwardRef<SVGSVGElement, FolderOutlineProps>((props, ref) => {
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
        d="M7.723 3H5.205c-1.115 0-1.519.116-1.926.334a2.272 2.272 0 0 0-.945.945C2.116 4.686 2 5.09 2 6.205v9.59c0 1.115.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h13.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.218-.407.334-.811.334-1.926v-6.59c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945C20.314 6.116 19.91 6 18.795 6H12l-.737-1.105c-.505-.758-.724-1-1.008-1.236a2.65 2.65 0 0 0-.945-.506C8.957 3.047 8.633 3 7.723 3zM4.356 5.049c.155-.03.422-.049.849-.049h2.518c.669 0 .843.018 1.011.069.098.03.168.067.247.132.135.111.247.247.618.803l.737 1.105A2 2 0 0 0 12 8h6.795c.427 0 .694.019.849.049.06.012.074.017.134.049a.275.275 0 0 1 .125.124c.031.06.036.073.048.134.03.155.049.422.049.849v6.59c0 .427-.019.694-.049.849a.353.353 0 0 1-.049.134.275.275 0 0 1-.124.125.353.353 0 0 1-.134.048c-.155.03-.422.049-.849.049H5.205c-.427 0-.694-.019-.849-.049a.353.353 0 0 1-.134-.049.275.275 0 0 1-.124-.124.353.353 0 0 1-.049-.134c-.03-.155-.049-.422-.049-.849v-9.59c0-.427.019-.694.049-.849a.353.353 0 0 1 .049-.134.275.275 0 0 1 .124-.124.353.353 0 0 1 .134-.049z"
        fill="currentColor"
      />
    </svg>
  )
})
