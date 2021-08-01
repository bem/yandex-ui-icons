/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface InfoOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const InfoOutline = forwardRef<SVGSVGElement, InfoOutlineProps>((props, ref) => {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-8.538 5.504c-1.025 0-1.362-.628-1.362-1.21 0-.244.077-.611.138-.825l1.07-4.612h-1.253a.25.25 0 0 1-.243-.307l.076-.325a.35.35 0 0 1 .28-.265l2.838-.5a.5.5 0 0 1 .573.608L12.14 16.05a.189.189 0 0 0 .33.164l1.165-1.425a.322.322 0 0 1 .514.386l-.7 1.013c-.734 1.07-1.407 1.316-1.988 1.316zm.338-9.862c0 .505.398.933 1.102.933.688 0 1.193-.382 1.346-.994.03-.123.046-.26.046-.368 0-.505-.398-.933-1.102-.933-.673 0-1.193.382-1.346.994-.03.123-.046.26-.046.368z"
        fill="currentColor"
      />
    </svg>
  )
})
