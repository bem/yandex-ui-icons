/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface EyeOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const EyeOutline = forwardRef<SVGSVGElement, EyeOutlineProps>((props, ref) => {
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
        d="M12 4.5C5.25 4.5 1.5 9.75 1.5 12s3.75 7.5 10.5 7.5 10.5-5.25 10.5-7.5S18.75 4.5 12 4.5zM5.552 15.103C4.282 13.966 3.5 12.583 3.5 12c0-.584.781-1.966 2.052-3.103C7.231 7.395 9.438 6.5 12 6.5c2.562 0 4.77.895 6.448 2.397 1.27 1.137 2.052 2.52 2.052 3.103 0 .584-.781 1.966-2.052 3.103C16.769 16.605 14.562 17.5 12 17.5c-2.562 0-4.77-.895-6.448-2.397zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm2-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
        fill="currentColor"
      />
    </svg>
  )
})
