import classNames from 'classnames'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { Variant } from '@/types/component'

type LinkProps = NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    variant?: Variant
    children: React.ReactNode
  }

export default function Link({ href, variant = 'primary', className, children, ...props }: LinkProps) {
  return (
    <NextLink href={href} className={classNames('link', `link-${variant}`, className)} {...props}>
      {children}
    </NextLink>
  )
}
