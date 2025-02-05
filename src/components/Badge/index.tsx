import classNames from 'classnames'
import { Variant } from '@/types/component'

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: Variant
  children: React.ReactNode
}

export default function Badge({ children, variant = 'primary', className, ...props }: BadgeProps) {
  return (
    <div className={classNames('badge', `badge-${variant}`, className)} {...props}>
      {children}
    </div>
  )
}
