import classNames from 'classnames'

type IconProps = {
  icon: React.ElementType
  size?: number
  className?: string
}

export default function Icon({ icon: IconComponent, size = 6, className }: IconProps) {
  return <IconComponent className={classNames(`size-${size}`, className)} />
}
