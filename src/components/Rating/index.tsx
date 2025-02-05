import classNames from 'classnames'
import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarFillIcon } from '@heroicons/react/24/solid'
import { Variant } from '@/types/component'
import Flex from '@/components/Flex'
import Icon from '@/components/Icon'

type RatingProps = {
  value: number
  max?: number
  variant?: Variant
}

export default function Rating({ value, max = 5, variant = 'primary' }: RatingProps) {
  const normalizedValue = (value / max) * 5
  const roundedValue = Math.round(normalizedValue)
  return (
    <Flex direction="horizontal" gap={0} className={classNames('rating', 'rating-sm', 'rating-half', `text-${variant}`)}>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1
        if (roundedValue >= starValue) {
          return <Icon key={index} icon={StarFillIcon} size={4} />
        }
        return <Icon key={index} icon={StarIcon} size={4} />
      })}
    </Flex>
  )
}
