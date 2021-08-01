/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface TurboProps extends SVGAttributes<SVGSVGElement> {
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

export const Turbo = forwardRef<SVGSVGElement, TurboProps>((props, ref) => {
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
        d="M11.74 1.97c-5.22 0-9.023 3.513-9.76 8.62-.052.366.112.673.416.72.3.047.554-.188.616-.538.723-4.068 4.273-6.782 8.729-6.782 4.856 0 8.24 3.384 8.24 8.24 0 4.266-2.926 7.965-6.795 8.724-.35.07-.583.327-.532.626.05.303.357.467.722.415 5.105-.724 8.625-4.538 8.625-9.765 0-6.019-4.242-10.26-10.26-10.26zM8.69 12.156c.498-.622 1.09-1.3 1.79-1.985 2.67-2.693 5.644-2.857 5.916-2.569.296.28.117 3.231-2.568 5.932-.685.7-1.355 1.292-1.985 1.79v1.994c0 .68 0 .717-.468 1.066-.05.037-.13.1-.238.183-.459.356-1.392 1.08-2.377 1.685-.296.18-.545.031-.35-.233a9.652 9.652 0 0 0 1.097-1.946c.218-.514.218-.981 0-1.386-.778.25-1.417.171-1.891-.288-.483-.467-.545-1.121-.296-1.907a1.58 1.58 0 0 0-1.401 0c-.592.218-1.23.591-1.947 1.09-.28.202-.428-.047-.233-.343.63-1.046 1.406-2.024 1.743-2.448l.125-.16c.35-.467.39-.467 1.168-.467h1.892l.023-.008zm-2.39 4.204c.042.046-.084.147-.29.314-.565.457-1.734 1.403-1.734 3.033 1.638 0 2.586-1.154 3.045-1.713.169-.206.272-.331.318-.287.156.155-.366 1.424-1.261 2.312A5.161 5.161 0 0 1 2.5 21.498c0-1.79.584-2.99 1.48-3.877.894-.895 2.156-1.417 2.319-1.245v-.016z"
        fill="currentColor"
      />
    </svg>
  )
})
