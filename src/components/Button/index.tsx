'use client'

import classNames from 'classnames'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  outline?: boolean
}

const Button = ({ type = 'button', variant = 'primary', size = 'sm', outline, className, children, ...props }: ButtonProps) => {
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

export default Button
