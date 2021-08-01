/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface AlisaOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const AlisaOutline = forwardRef<SVGSVGElement, AlisaOutlineProps>((props, ref) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-4.579-4.773c-1.784-1.774 2.552-8.574 4.581-8.584 2.025.01 6.36 6.81 4.577 8.584-.718.715-2.63 1.144-4.579 1.151-1.949-.007-3.861-.436-4.579-1.15zm4.571-.849c1.316-.005 2.538-.256 3.005-.465a2.617 2.617 0 0 0-.053-.361c-.132-.625-.473-1.442-.956-2.276-.477-.823-1.05-1.591-1.583-2.126A4.648 4.648 0 0 0 12 8.785a4.64 4.64 0 0 0-.404.365c-.533.535-1.108 1.303-1.585 2.126-.483.834-.824 1.651-.956 2.276-.03.143-.047.265-.054.36.467.21 1.687.461 2.99.466z"
        fill="currentColor"
      />
    </svg>
  )
})
