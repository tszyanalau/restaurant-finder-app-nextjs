import classNames from 'classnames'
import Flex from '@/components/Flex'
import Icon from '@/components/Icon'

type FlagProps = {
  flag: boolean
  label: string
  className?: string
}

export default function Flag({ label, flag = false, className }: FlagProps) {
  return (
    <Flex className={classNames(`text-${flag ? 'success' : 'error'}`, className)}>
      <Icon type={flag ? 'check-circle-fill' : 'x-circle-fill'} />
      {label}
    </Flex>
  )
}
