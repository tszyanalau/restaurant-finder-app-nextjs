import classNames from 'classnames'
import { InformationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import Icon from '@/components/Icon'

type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  type: 'info' | 'error'
  children: React.ReactNode
}

export default function Alert({ type, children, className }: AlertProps) {
  const icon = type === 'info' ? InformationCircleIcon : XCircleIcon

  return (
    <div role="alert" className={classNames('alert', className)}>
      <Icon icon={icon} className={`text-${type}`} />
      <span>{children}</span>
    </div>
  )
}
