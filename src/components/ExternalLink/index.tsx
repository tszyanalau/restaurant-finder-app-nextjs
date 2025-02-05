import classNames from 'classnames'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Icon from '@/components/Icon'

export default function ExternalLink({ href, className, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={classNames(className, 'text-decoration-none', 'inline-flex', 'items-center')}
      {...props}
    >
      {children} <Icon className="ml-1" icon={ArrowTopRightOnSquareIcon} size={4} />
    </a>
  )
}
