/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface EditOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const EditOutline = forwardRef<SVGSVGElement, EditOutlineProps>((props, ref) => {
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
        d="m14.793 7.368-8.36 8.36a2 2 0 0 0-.425.625L4.28 19.52l3.365-1.53c.233-.101.445-.245.624-.424l8.36-8.362a5.085 5.085 0 0 0-.813-1.024 5.086 5.086 0 0 0-1.023-.812zm1.446-1.446c.335.237.665.519.99.844.327.326.609.657.846.992l1.47-1.471a.5.5 0 0 0 .11-.542c-.106-.262-.297-.537-.582-.822-.284-.284-.559-.475-.822-.582a.5.5 0 0 0-.541.11l-1.471 1.471zM4.17 15.564a4 4 0 0 1 .848-1.25L16.296 3.036a2.5 2.5 0 0 1 2.708-.549c.525.214 1.02.557 1.484 1.021.464.465.807.959 1.02 1.484a2.5 2.5 0 0 1-.548 2.708L9.683 18.98a4 4 0 0 1-1.249.847l-3.442 1.48a1.75 1.75 0 0 1-2.3-2.298l1.478-3.445z"
        fill="currentColor"
      />
    </svg>
  )
})
