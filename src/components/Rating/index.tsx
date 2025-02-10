import classNames from 'classnames'
import { Variant } from '@/types/component'
import Flex from '@/components/Flex'
import Icon from '@/components/Icon'

type RatingProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number
  max?: number
  variant?: Variant
}

export default function Rating({ value, max = 5, variant = 'primary', className }: RatingProps) {
  const normalizedValue = (value / max) * 5
  const roundedValue = Math.round(normalizedValue * 2) / 2
  return (
    <Flex
      direction="horizontal"
      gap={0}
      className={classNames('rating', 'rating-sm', 'rating-half', `text-${variant}`, className)}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1
        if (roundedValue >= starValue) {
          return <Icon key={index} type="star-fill" />
        }
        if (roundedValue + 0.5 >= starValue) {
          return <Icon key={index} type="star-half" />
        }
        return <Icon key={index} type="star" />
      })}
    </Flex>
  )
}
