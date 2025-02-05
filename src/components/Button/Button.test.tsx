import { render, fireEvent } from '@testing-library/react'
import Button from './index'

describe('Button', () => {
  it('renders the button with the correct text', () => {
    const { getByText } = render(<Button>Click Me</Button>)
    const button = getByText('Click Me')

    expect(button).toBeInTheDocument()
  })

  it('applies the primary variant class by default', () => {
    const { container } = render(<Button>Click Me</Button>)
    const button = container.firstChild

    expect(button).toHaveClass('btn')
    expect(button).toHaveClass('btn-primary')
  })

  it('applies the correct variant class when specified', () => {
    const { container } = render(<Button variant="secondary">Click Me</Button>)
    const button = container.firstChild

    expect(button).toHaveClass('btn')
    expect(button).toHaveClass('btn-secondary')
  })

  it('applies the correct size class when specified', () => {
    const { container } = render(<Button size="lg">Click Me</Button>)
    const button = container.firstChild

    expect(button).toHaveClass('btn')
    expect(button).toHaveClass('btn-lg')
  })

  it('applies the outline class when specified', () => {
    const { container } = render(<Button outline>Click Me</Button>)
    const button = container.firstChild

    expect(button).toHaveClass('btn')
    expect(button).toHaveClass('btn-outline')
  })

  it('applies additional class names correctly', () => {
    const { container } = render(<Button className="custom-class">Click Me</Button>)
    const button = container.firstChild

    expect(button).toHaveClass('btn')
    expect(button).toHaveClass('custom-class')
  })

  it('handles click events correctly', () => {
    const handleClick = vi.fn()
    const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>)
    const button = getByText('Click Me')

    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
