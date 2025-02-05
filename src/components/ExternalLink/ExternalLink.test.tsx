import { render } from '@testing-library/react'
import ExternalLink from './index'

describe('ExternalLink', () => {
  it('renders the link with the correct text', () => {
    const { getByText } = render(<ExternalLink href="https://example.com">Example</ExternalLink>)
    const link = getByText('Example')

    expect(link).toBeInTheDocument()
  })

  it('sets the correct href attribute', () => {
    const { getByText } = render(<ExternalLink href="https://example.com">Example</ExternalLink>)
    const link = getByText('Example')

    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('sets the target attribute to _blank', () => {
    const { getByText } = render(<ExternalLink href="https://example.com">Example</ExternalLink>)
    const link = getByText('Example')

    expect(link).toHaveAttribute('target', '_blank')
  })

  it('sets the rel attribute to noreferrer', () => {
    const { getByText } = render(<ExternalLink href="https://example.com">Example</ExternalLink>)
    const link = getByText('Example')

    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('applies additional class names correctly', () => {
    const { getByText } = render(
      <ExternalLink href="https://example.com" className="custom-class">
        Example
      </ExternalLink>
    )
    const link = getByText('Example')

    expect(link).toHaveClass('custom-class')
  })

  it('renders the icon with the correct class', () => {
    const { container } = render(<ExternalLink href="https://example.com">Example</ExternalLink>)
    const icon = container.querySelector('svg')

    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('ml-1')
  })
})
