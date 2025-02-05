import classNames from 'classnames'

type IconProps = React.SVGProps<SVGSVGElement> & {
  icon: React.ElementType
  size?: number
  className?: string
}

export default function Icon({ icon: IconComponent, size = 6, className, ...props }: IconProps) {
  return <IconComponent className={classNames(`size-${size}`, className)} {...props} />
}
