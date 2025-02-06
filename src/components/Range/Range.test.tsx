import { render, fireEvent } from '@testing-library/react'
import Range from './index'

describe('Range', () => {
  it('renders the range input with the correct attributes', () => {
    const { getByRole } = render(<Range min={0} max={100} value={50} step={1} readOnly />)
    const rangeInput = getByRole('slider')

    expect(rangeInput).toBeInTheDocument()
    expect(rangeInput).toHaveAttribute('min', '0')
    expect(rangeInput).toHaveAttribute('max', '100')
    expect(rangeInput).toHaveAttribute('value', '50')
    expect(rangeInput).toHaveAttribute('step', '1')
  })

  it('applies the primary variant class by default', () => {
    const { container } = render(<Range min={0} max={100} value={50} step={1} readOnly />)
    const rangeInput = container.firstChild

    expect(rangeInput).toHaveClass('range')
    expect(rangeInput).toHaveClass('range-primary')
  })

  it('applies the correct variant class when specified', () => {
    const { container } = render(<Range min={0} max={100} value={50} step={1} variant="secondary" readOnly />)
    const rangeInput = container.firstChild

    expect(rangeInput).toHaveClass('range')
    expect(rangeInput).toHaveClass('range-secondary')
  })

  it('applies the xs size class by default', () => {
    const { container } = render(<Range min={0} max={100} value={50} step={1} readOnly />)
    const rangeInput = container.firstChild

    expect(rangeInput).toHaveClass('range')
    expect(rangeInput).toHaveClass('range-xs')
  })

  it('applies the correct thickness class when specified', () => {
    const { container } = render(<Range min={0} max={100} value={50} step={1} thickness="lg" readOnly />)
    const rangeInput = container.firstChild

    expect(rangeInput).toHaveClass('range')
    expect(rangeInput).toHaveClass('range-lg')
  })

  it('applies additional class names correctly', () => {
    const { container } = render(<Range min={0} max={100} value={50} step={1} className="custom-class" readOnly />)
    const rangeInput = container.firstChild

    expect(rangeInput).toHaveClass('custom-class')
  })

  it('handles change events correctly', () => {
    const handleChange = vi.fn()
    const { getByRole } = render(<Range min={0} max={100} value={50} step={1} onChange={handleChange} />)
    const rangeInput = getByRole('slider')

    fireEvent.change(rangeInput, { target: { value: '75' } })

    expect(handleChange).toHaveBeenCalled()
  })
})
