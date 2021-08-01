/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface BroadcastProps extends SVGAttributes<SVGSVGElement> {
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

export const Broadcast = forwardRef<SVGSVGElement, BroadcastProps>((props, ref) => {
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
        d="M18 17a1 1 0 1 1 2 0v1.077c0 .76-.082 1.185-.319 1.627a2.363 2.363 0 0 1-.977.977c-.442.237-.867.319-1.627.319H5.923c-.76 0-1.185-.082-1.627-.319a2.363 2.363 0 0 1-.978-.977C3.082 19.262 3 18.838 3 18.077L2.999 6.5A2.5 2.5 0 0 1 5.502 4l1.5.005a1 1 0 1 1-.005 2L5.499 6a.5.5 0 0 0-.5.5v11.577c0 .459.023.57.083.684.038.07.087.12.157.157.113.06.225.082.684.082h11.154c.459 0 .57-.022.684-.082a.363.363 0 0 0 .157-.157c.06-.113.082-.225.082-.684V17zm4-4a1 1 0 1 1-2 0 9 9 0 0 0-9-9 1 1 0 1 1 0-2c6.075 0 11 4.925 11 11zm-4 0a1 1 0 1 1-2 0 5 5 0 0 0-5-5 1 1 0 1 1 0-2 7 7 0 0 1 7 7zm-4 0a1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 3 3 0 0 1 3 3z"
        fill="currentColor"
      />
    </svg>
  )
})
