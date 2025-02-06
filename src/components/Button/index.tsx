'use client'

import classNames from 'classnames'
import { Variant, Size } from '@/types/component'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  outline?: boolean
  children: React.ReactNode
}

export default function Button({
  type = 'button',
  variant = 'primary',
  size = 'sm',
  outline,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames('btn', `btn-${variant}`, `btn-${size}`, { 'btn-outline': outline }, className)}
      {...props}
    >
      {children}
    </button>
  )
}
