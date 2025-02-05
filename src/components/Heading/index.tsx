import React from 'react'
import classNames from 'classnames'

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4 | 5 | 6
  margin?: boolean
  children: React.ReactNode
}

export default function Heading({ level, margin = false, className, children, ...props }: HeadingProps) {
  return React.createElement(
    `h${level}`,
    {
      className: classNames(className, { 'm-0': !margin }),
      ...props,
    },
    children
  )
}
