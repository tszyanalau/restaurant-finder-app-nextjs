import classNames from 'classnames'

type IconProps = React.HTMLAttributes<HTMLLIElement> & {
  type: string
}

export default function Icon({ className, type, ...props }: IconProps) {
  return <i className={classNames(className, 'bi', `bi-${type}`)} {...props} />
}
