/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface CameraProps extends SVGAttributes<SVGSVGElement> {
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

export const Camera = forwardRef<SVGSVGElement, CameraProps>((props, ref) => {
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
        d="M7.342 4.985c.422-.724.633-1.085.927-1.348a2.5 2.5 0 0 1 .898-.516C9.542 3 9.96 3 10.797 3h2.405c.838 0 1.256 0 1.631.121a2.5 2.5 0 0 1 .898.516c.294.263.505.624.927 1.348L17.25 6H18c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C22 7.9 22 8.6 22 10v6c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 20 19.4 20 18 20H6c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 18.1 2 17.4 2 16v-6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 6 4.6 6 6 6h.75l.592-1.015zM12 17.05a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5zm2.7-4.75a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0z"
        fill="currentColor"
      />
    </svg>
  )
})
