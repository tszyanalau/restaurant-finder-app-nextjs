import { render } from '@testing-library/react'
import Flag from './index'

describe('Flag', () => {
  it('renders the flag with the correct label', () => {
    const { getByText } = render(<Flag label="Test Label" flag />)
    const label = getByText('Test Label')

    expect(label).toBeInTheDocument()
  })

  it('applies the success class and icon when flag is true', () => {
    const { container } = render(<Flag label="Test Label" flag />)
    const flagElement = container.firstChild
    const icon = container.querySelector('i')

    expect(flagElement).toHaveClass('text-success')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('bi', 'bi-check-circle-fill')
  })

  it('applies the error class and icon when flag is false', () => {
    const { container } = render(<Flag label="Test Label" flag={false} />)
    const flagElement = container.firstChild
    const icon = container.querySelector('i')

    expect(flagElement).toHaveClass('text-error')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('bi', 'bi-x-circle-fill')
  })

  it('applies additional class names correctly', () => {
    const { container } = render(<Flag label="Test Label" flag className="custom-class" />)
    const flagElement = container.firstChild

    expect(flagElement).toHaveClass('custom-class')
  })
})
