/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface TrendProps extends SVGAttributes<SVGSVGElement> {
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

export const Trend = forwardRef<SVGSVGElement, TrendProps>((props, ref) => {
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
        d="M20.684 4.042A1.029 1.029 0 0 1 22 5.03l-.001 5.712a1.03 1.03 0 0 1-1.647.823L18.71 10.33l-4.18 5.568a1.647 1.647 0 0 1-2.155.428l-.15-.1-3.337-2.507-4.418 5.885c-.42.56-1.185.707-1.777.368l-.144-.095a1.372 1.372 0 0 1-.368-1.776l.095-.144 5.077-6.762a1.646 1.646 0 0 1 2.156-.428l.149.1 3.336 2.506 3.522-4.69-1.647-1.237a1.03 1.03 0 0 1 .194-1.76l.137-.05 5.485-1.595-.001.001z"
        fill="currentColor"
      />
    </svg>
  )
})
