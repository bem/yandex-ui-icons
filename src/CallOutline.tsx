/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface CallOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const CallOutline = forwardRef<SVGSVGElement, CallOutlineProps>((props, ref) => {
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
        d="M14.086 14.287c-.62-.344-1.318-.895-2.081-1.658-.763-.763-1.313-1.46-1.657-2.079l.935-.809a2.75 2.75 0 0 0 .472-3.63l-1.588-2.327a3.133 3.133 0 0 0-.027-.038 2.75 2.75 0 0 0-3.87-.63c-.279.205-.565.417-.857.637-3.759 2.818-2.817 7.912 2.369 13.099 5.187 5.186 10.282 6.13 13.101 2.371.22-.294.433-.581.638-.862l.026-.035.025-.037a2.75 2.75 0 0 0-.721-3.821l-2.327-1.588a2.75 2.75 0 0 0-3.63.472l-.808.935zm5.197 3.736c-1.674 2.233-5.203 2.299-10.087-2.585-4.884-4.884-4.816-8.41-2.583-10.085.287-.216.566-.423.84-.623a.75.75 0 0 1 1.062.182l1.588 2.327a.75.75 0 0 1-.128.99l-1.23 1.064a1.5 1.5 0 0 0-.384 1.759c.428.936 1.172 1.933 2.23 2.99 1.059 1.06 2.056 1.803 2.993 2.232a1.5 1.5 0 0 0 1.758-.383l1.065-1.23a.75.75 0 0 1 .99-.129l2.326 1.588a.75.75 0 0 1 .183 1.062 83 83 0 0 1-.623.841z"
        fill="currentColor"
      />
    </svg>
  )
})
