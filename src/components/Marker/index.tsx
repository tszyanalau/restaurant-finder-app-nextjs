import { Pin } from '@vis.gl/react-google-maps'
import { Variant } from '@/types/component'

type MarkerProps = {
  variant?: Variant
}

const variables: Record<Variant, string> = {
  primary: 'p',
  secondary: 's',
  accent: 'a',
}

export default function Marker({ variant = 'primary' }: MarkerProps) {
  return (
    <Pin
      background={`oklch(var(--${variables[variant]})`}
      borderColor={`oklch(var(--${variables[variant]}c)`}
      glyphColor={`oklch(var(--${variables[variant]}c)`}
    />
  )
}
