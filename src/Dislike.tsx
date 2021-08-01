/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface DislikeProps extends SVGAttributes<SVGSVGElement> {
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

export const Dislike = forwardRef<SVGSVGElement, DislikeProps>((props, ref) => {
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
        d="M8.1 20.5c0 1.5 1.482 2.5 2.64 2.5.806 0 .869-.613.993-1.82.055-.53.121-1.174.267-1.93.386-2.002 1.72-4.56 2.996-5.325V8C15 5.75 14.25 5 11 5H7.227C5.051 5 4.524 6.432 4.328 6.964A15.85 15.85 0 0 1 4.315 7c-.114.306-.358.546-.638.82-.31.306-.664.653-.927 1.18-.311.623-.27 1.177-.233 1.67.023.299.044.575-.017.83-.064.27-.146.475-.225.671-.143.356-.275.686-.275 1.329 0 1.5.748 2.498 2.315 2.498H8.5S8.1 19 8.1 20.5zM18.5 15a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-3 0v7a1.5 1.5 0 0 0 1.5 1.5z"
        fill="currentColor"
      />
    </svg>
  )
})
