/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface ArtistProps extends SVGAttributes<SVGSVGElement> {
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

export const Artist = forwardRef<SVGSVGElement, ArtistProps>((props, ref) => {
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
        d="M15 5.4v-.9a.5.5 0 0 0-.5-.5H11c-4.112 0-7 2.063-7 6 0 2.672 1.531 5.833 3.34 7.466l.33.298a1 1 0 0 1 .33.742V20h7v-1.271a1 1 0 0 1 .565-.9l.564-.273c.464-.225 1-.442 1.595-.654l.421-.145a.506.506 0 0 0 .332-.601l-.507-2.03a1 1 0 0 1 .076-.69l1.13-2.26a.5.5 0 0 0-.19-.652L16.99 9.326a.5.5 0 0 1-.216-.267l-.178-.519a7.34 7.34 0 0 0-.711-1.502L13 8v2a1 1 0 0 1-1 1 1 1 0 0 0 0 2 1 1 0 0 1 0 2 3 3 0 0 1-1-5.83V7.678a1 1 0 0 1 .629-.928L15 5.4zM7 22a1 1 0 0 1-1-1v-2.05C4.087 17.225 2 13.613 2 10c0-6 5-8 9-8h4a2 2 0 0 1 2 2v1.15a9.296 9.296 0 0 1 1.489 2.743l2.717 1.63a1 1 0 0 1 .38 1.305l-1.503 3.007a.5.5 0 0 0-.038.344l.712 2.85a1.033 1.033 0 0 1-.723 1.234c-.77.223-1.865.569-2.75.961a.484.484 0 0 0-.284.446V21a1 1 0 0 1-1 1H7z"
        fill="currentColor"
      />
    </svg>
  )
})
