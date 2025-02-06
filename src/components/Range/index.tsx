import classNames from 'classnames'
import { Variant, Size } from '@/types/component'

type RangeProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  variant?: Variant
  thickness?: Size // size is already a prop in inputHTMLAttributes
  min: number
  max: number
  value: number
  step: number
}

export default function Range({ min, max, value, step, variant = 'primary', thickness = 'xs', className, ...props }: RangeProps) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      step={step}
      className={classNames('range', `range-${variant}`, `range-${thickness}`, className)}
      {...props}
    />
  )
}
