import { render } from '@testing-library/react'
import Badge from './index'

describe('Badge', () => {
  it('renders the badge with the correct text', () => {
    const { getByText } = render(<Badge>Test Badge</Badge>)
    const badge = getByText('Test Badge')

    expect(badge).toBeInTheDocument()
  })

  it('applies the primary variant class by default', () => {
    const { container } = render(<Badge>Test Badge</Badge>)
    const badge = container.firstChild

    expect(badge).toHaveClass('badge')
    expect(badge).toHaveClass('badge-primary')
  })

  it('applies the correct variant class when specified', () => {
    const { container } = render(<Badge variant="secondary">Test Badge</Badge>)
    const badge = container.firstChild

    expect(badge).toHaveClass('badge')
    expect(badge).toHaveClass('badge-secondary')
  })

  it('applies additional class names correctly', () => {
    const { container } = render(<Badge className="custom-class">Test Badge</Badge>)
    const badge = container.firstChild

    expect(badge).toHaveClass('badge')
    expect(badge).toHaveClass('badge-primary')
    expect(badge).toHaveClass('custom-class')
  })
})
