import { render } from '@testing-library/react'
import Icon from './index'

describe('Icon', () => {
  it('renders the icon component', () => {
    const { container } = render(<Icon type="check-circle-fill" />)
    const icon = container.querySelector('i')

    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('bi', 'bi-check-circle-fill')
  })

  it('applies additional class names correctly', () => {
    const { container } = render(<Icon type="check-circle-fill" className="custom-class" />)
    const icon = container.querySelector('i')

    expect(icon).toHaveClass('custom-class')
  })

  it('passes additional props to the i element', () => {
    const { container } = render(<Icon type="check-circle-fill" aria-label="icon" />)
    const icon = container.querySelector('i')

    expect(icon).toHaveAttribute('aria-label', 'icon')
  })
})
