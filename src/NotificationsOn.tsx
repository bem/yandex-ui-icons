/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface NotificationsOnProps extends SVGAttributes<SVGSVGElement> {
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

export const NotificationsOn = forwardRef<SVGSVGElement, NotificationsOnProps>((props, ref) => {
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
        d="M12.308 2.132a.75.75 0 0 1 .494-.102l.763.106a.75.75 0 0 1 .644.7l.042.724a1.499 1.499 0 0 0 .6 1.116l.276.205a5.586 5.586 0 0 1 2.388 3.235l-1.312 1.312-.261-.262a2.991 2.991 0 0 0-4.23 4.23l2.206 2.206a2.995 2.995 0 0 0 2.285 1.053 2.984 2.984 0 0 0 1.671-.504c.16.35.379.67.647.946l.312.321a1.5 1.5 0 0 1 .313 1.607l-.02.05a1.32 1.32 0 0 1-1.407.812l-2.76-.388a3 3 0 0 1-5.94-.835l-5.103-.717a1.32 1.32 0 0 1-1.13-1.168l-.005-.053a1.5 1.5 0 0 1 .745-1.459l.388-.224a3.375 3.375 0 0 0 1.589-2.09l1.212-4.741a5.586 5.586 0 0 1 3.83-3.976l.32-.12a1.5 1.5 0 0 0 .885-.907l.24-.685a.75.75 0 0 1 .318-.392z"
        fill="currentColor"
      />
      <path
        d="M21.7 9.5c.003.311-.12.612-.34.836l-4.245 4.165a1.225 1.225 0 0 1-.858.348c-.321 0-.63-.125-.857-.348l-2.426-2.38a1.179 1.179 0 0 1-.34-.837c.003-.312.13-.61.355-.83a1.225 1.225 0 0 1 1.7-.014l1.568 1.537 3.388-3.323a1.225 1.225 0 0 1 1.7.014c.225.22.352.52.355.831z"
        fill="currentColor"
      />
    </svg>
  )
})
