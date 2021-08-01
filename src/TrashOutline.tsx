/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface TrashOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const TrashOutline = forwardRef<SVGSVGElement, TrashOutlineProps>((props, ref) => {
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
        d="M12.663 1.5h-1.326c-1.069 0-1.49.09-1.921.27-.432.181-.792.453-1.084.82-.292.365-.493.746-.784 1.774L7.368 5H5a1 1 0 0 0 0 2h.5l.844 12.666A2.5 2.5 0 0 0 8.84 22h6.322a2.5 2.5 0 0 0 2.495-2.334L18.5 7.001V7h.5a1 1 0 1 0 0-2h-2.367l-.18-.636c-.292-1.028-.493-1.409-.785-1.775a2.694 2.694 0 0 0-1.084-.819c-.431-.18-.852-.27-1.92-.27zm1.89 3.5-.025-.09c-.203-.717-.29-.905-.424-1.074a.696.696 0 0 0-.292-.221c-.2-.084-.404-.115-1.149-.115h-1.326c-.745 0-.95.031-1.149.115a.696.696 0 0 0-.292.221c-.135.169-.221.357-.424 1.074L9.446 5h5.108zm1.943 2H7.505l.835 12.533a.5.5 0 0 0 .499.467h6.322a.5.5 0 0 0 .499-.467L16.496 7zM9.4 9.63a.85.85 0 0 1 1.699-.059l.272 7.795a.85.85 0 1 1-1.7.06L9.4 9.63zm4.381-.879a.85.85 0 0 0-.88.82l-.271 7.795a.85.85 0 1 0 1.699.06L14.6 9.63a.85.85 0 0 0-.82-.88z"
        fill="currentColor"
      />
    </svg>
  )
})
