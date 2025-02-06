import classNames from 'classnames'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'
import Flex from '@/components/Flex'
import Icon from '@/components/Icon'

type FlagProps = {
  flag: boolean
  label: string
  className?: string
}

export default function Flag({ label, flag, className }: FlagProps) {
  return (
    <Flex className={classNames(`text-${flag ? 'success' : 'error'}`, className)}>
      <Icon icon={flag ? CheckCircleIcon : XCircleIcon} size={4} />
      {label}
    </Flex>
  )
}
