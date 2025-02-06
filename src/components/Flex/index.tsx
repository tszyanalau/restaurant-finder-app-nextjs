import classNames from 'classnames'

type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: 'horizontal' | 'vertical'
  gap?: number
  children: React.ReactNode
}

export default function Flex({ children, direction = 'horizontal', gap = 1, className, ...props }: FlexProps) {
  return (
    <div
      className={classNames(
        'flex',
        `gap-${gap}`,
        { 'flex-col': direction === 'vertical', 'items-center': direction === 'horizontal' },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
