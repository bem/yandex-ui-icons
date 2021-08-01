/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface UnlockedOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const UnlockedOutline = forwardRef<SVGSVGElement, UnlockedOutlineProps>((props, ref) => {
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
        d="M7 7v3.001c-.961.014-1.34.129-1.721.333a2.272 2.272 0 0 0-.945.945c-.218.407-.334.812-.334 1.926v4.59c0 1.114.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h9.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.218-.407.334-.811.334-1.926v-4.59c0-1.114-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945c-.407-.218-.811-.334-1.926-.334H9V7a3 3 0 1 1 6 0 1 1 0 1 0 2 0A5 5 0 0 0 7 7zm-.644 5.049c.155-.03.422-.049.849-.049h9.59c.427 0 .694.019.849.049.06.012.074.017.134.049a.275.275 0 0 1 .125.124c.031.06.036.073.048.134.03.155.049.422.049.849v4.59c0 .427-.019.694-.049.849a.353.353 0 0 1-.049.134.275.275 0 0 1-.124.125.353.353 0 0 1-.134.048c-.155.03-.422.049-.849.049h-9.59c-.427 0-.694-.019-.849-.049a.353.353 0 0 1-.134-.049.275.275 0 0 1-.124-.124.353.353 0 0 1-.049-.134c-.03-.155-.049-.422-.049-.849v-4.59c0-.427.019-.694.049-.849a.353.353 0 0 1 .049-.134.275.275 0 0 1 .124-.124.353.353 0 0 1 .134-.049z"
        fill="currentColor"
      />
    </svg>
  )
})
