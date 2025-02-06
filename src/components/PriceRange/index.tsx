import { Price } from '@/types/place'

type PriceRangeProps = React.HTMLAttributes<HTMLSpanElement> & {
  startPrice: Price
  endPrice?: Price
}

export default function PriceRange({ startPrice, endPrice, className, ...props }: PriceRangeProps) {
  if (!endPrice) {
    return (
      <span className={className} {...props}>
        More than {startPrice.units} {startPrice.currencyCode}
      </span>
    )
  }
  return (
    <span className={className} {...props}>
      {startPrice.units} {startPrice.currencyCode} - {endPrice.units} {endPrice.currencyCode}
    </span>
  )
}
