/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface DocumentOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const DocumentOutline = forwardRef<SVGSVGElement, DocumentOutlineProps>((props, ref) => {
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
        d="M8.205 2h3.786c.775 0 1.043.028 1.34.096.297.069.56.178.818.34.258.161.468.33 1.015.878l2.522 2.522c.547.547.717.757.879 1.015.161.258.27.521.338.818.069.297.097.565.097 1.34v9.786c0 1.114-.116 1.519-.334 1.926a2.272 2.272 0 0 1-.945.945c-.407.218-.811.334-1.926.334h-7.59c-1.115 0-1.519-.116-1.926-.334a2.272 2.272 0 0 1-.945-.945C5.116 20.314 5 19.91 5 18.795V5.205c0-1.115.116-1.519.334-1.926.218-.407.538-.727.945-.945C6.686 2.116 7.09 2 8.205 2zm0 2c-.427 0-.694.019-.849.049a.353.353 0 0 0-.134.049.275.275 0 0 0-.124.124.353.353 0 0 0-.049.134c-.03.155-.049.422-.049.849v13.59c0 .427.019.694.049.849.012.06.017.074.049.134a.275.275 0 0 0 .124.125c.06.031.073.036.134.048.155.03.422.049.849.049h7.59c.427 0 .694-.019.849-.049a.353.353 0 0 0 .134-.049.275.275 0 0 0 .125-.124.353.353 0 0 0 .048-.134c.03-.155.049-.422.049-.849V10h-2.795c-1.114 0-1.519-.116-1.926-.334a2.272 2.272 0 0 1-.945-.945C11.116 8.314 11 7.91 11 6.795V4H8.205zM13 4.083v2.712c0 .427.019.694.049.849.012.06.017.074.049.134a.275.275 0 0 0 .124.124c.06.032.073.037.134.049.155.03.422.049.849.049h2.711a.676.676 0 0 0-.047-.088c-.079-.126-.18-.245-.598-.662l-2.52-2.521c-.418-.417-.537-.52-.662-.598A.69.69 0 0 0 13 4.083z"
        fill="currentColor"
      />
    </svg>
  )
})
