import classNames from 'classnames'
import Icon from '@/components/Icon'

type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  type: 'info' | 'error'
  children: React.ReactNode
}

export default function Alert({ type, children, className }: AlertProps) {
  return (
    <div role="alert" className={classNames('alert', className)}>
      <Icon type={type === 'info' ? 'info-circle' : 'x-circle'} className={`text-${type}`} />
      <span>{children}</span>
    </div>
  )
}
