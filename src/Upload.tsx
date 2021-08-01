/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface UploadProps extends SVGAttributes<SVGSVGElement> {
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

export const Upload = forwardRef<SVGSVGElement, UploadProps>((props, ref) => {
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
        d="M10.942 2.406a1.497 1.497 0 0 1 2.116 0L16.45 5.79c.39.39.39 1.03 0 1.42a.996.996 0 0 1-1.41 0l-.466-.466a10.002 10.002 0 0 1-1.407-1.768l-.215-.344-.206.207A10 10 0 0 1 13 7.079V15a1 1 0 1 1-2 0V7.078a10 10 0 0 1 .254-2.24l-.206-.206-.215.344c-.4.64-.873 1.234-1.407 1.768l-.466.466a.996.996 0 0 1-1.41 0c-.39-.39-.39-1.03 0-1.42l3.392-3.384zM20 11a1 1 0 0 0-1 1v6.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V12a1 1 0 0 0-2 0v6.077c0 .76.082 1.185.319 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V12a1 1 0 0 0-1-1z"
        fill="currentColor"
      />
    </svg>
  )
})
