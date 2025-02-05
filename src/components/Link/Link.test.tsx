import { render } from '@testing-library/react'
import Link from './index'

describe('Link', () => {
  it('renders the link with the correct text', () => {
    const { getByText } = render(<Link href="/test">Test Link</Link>)
    const link = getByText('Test Link')

    expect(link).toBeInTheDocument()
  })

  it('sets the correct href attribute', () => {
    const { getByText } = render(<Link href="/test">Test Link</Link>)
    const link = getByText('Test Link')

    expect(link).toHaveAttribute('href', '/test')
  })

  it('applies the primary variant class by default', () => {
    const { container } = render(<Link href="/test">Test Link</Link>)
    const link = container.firstChild

    expect(link).toHaveClass('link')
    expect(link).toHaveClass('link-primary')
  })

  it('applies the correct variant class when specified', () => {
    const { container } = render(
      <Link href="/test" variant="secondary">
        Test Link
      </Link>
    )
    const link = container.firstChild

    expect(link).toHaveClass('link')
    expect(link).toHaveClass('link-secondary')
  })

  it('applies additional class names correctly', () => {
    const { container } = render(
      <Link href="/test" className="custom-class">
        Test Link
      </Link>
    )
    const link = container.firstChild

    expect(link).toHaveClass('custom-class')
  })
})
