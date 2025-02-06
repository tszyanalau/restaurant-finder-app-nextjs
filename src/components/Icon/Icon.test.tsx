import { render } from '@testing-library/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Icon from './index'

describe('Icon', () => {
  it('renders the icon component', () => {
    const { container } = render(<Icon icon={CheckCircleIcon} />)
    const icon = container.querySelector('svg')

    expect(icon).toBeInTheDocument()
  })

  it('applies the default size class', () => {
    const { container } = render(<Icon icon={CheckCircleIcon} />)
    const icon = container.querySelector('svg')

    expect(icon).toHaveClass('size-6')
  })

  it('applies the correct size class when specified', () => {
    const { container } = render(<Icon icon={CheckCircleIcon} size={8} />)
    const icon = container.querySelector('svg')

    expect(icon).toHaveClass('size-8')
  })

  it('applies additional class names correctly', () => {
    const { container } = render(<Icon icon={CheckCircleIcon} className="custom-class" />)
    const icon = container.querySelector('svg')

    expect(icon).toHaveClass('custom-class')
  })

  it('passes additional props to the SVG element', () => {
    const { container } = render(<Icon icon={CheckCircleIcon} aria-label="icon" />)
    const icon = container.querySelector('svg')

    expect(icon).toHaveAttribute('aria-label', 'icon')
  })
})
