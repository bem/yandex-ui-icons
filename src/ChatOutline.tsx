/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ChatOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const ChatOutline = forwardRef<SVGSVGElement, ChatOutlineProps>((props, ref) => {
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
        d="M4.136 20.915c.078.054.17.084.266.085 2.724.03 4.721-.496 5.985-1.643.68.143 1.387.218 2.113.218 5.247 0 9.5-3.934 9.5-8.787C22 5.933 17.747 2 12.5 2S3 5.934 3 10.787c0 2.25.914 4.303 2.418 5.858-.128 1.27-.593 2.483-1.398 3.64-.15.216-.1.48.116.63zM10.8 17.42a1.875 1.875 0 0 0-1.646.446c-.503.457-1.566 1.088-2.563 1.28.468-.679.714-1.669.786-2.38a1.875 1.875 0 0 0-.518-1.491C5.663 14.038 5 12.463 5 10.797 5 7.077 8.327 4 12.5 4S20 7.077 20 10.797c0 3.72-3.327 6.797-7.5 6.797-.579 0-1.148-.06-1.7-.175z"
        fill="currentColor"
      />
    </svg>
  )
})
