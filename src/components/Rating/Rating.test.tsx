import { render } from '@testing-library/react'
import Rating from './index'

describe('Rating', () => {
  it('renders the correct number of filled stars based on the rating', () => {
    const { container } = render(<Rating value={3} max={5} />)
    const filledStars = container.querySelectorAll('svg[data-icon="star-fill-icon"]')
    const emptyStars = container.querySelectorAll('svg[data-icon="star-icon"]')

    expect(filledStars.length).toBe(3)
    expect(emptyStars.length).toBe(2)
  })

  it('renders the correct number of empty stars based on the max rating', () => {
    const { container } = render(<Rating value={2} max={5} />)
    const filledStars = container.querySelectorAll('svg[data-icon="star-fill-icon"]')
    const emptyStars = container.querySelectorAll('svg[data-icon="star-icon"]')

    expect(filledStars.length).toBe(2)
    expect(emptyStars.length).toBe(3)
  })

  it('applies additional class names correctly', () => {
    const { container } = render(<Rating value={3} max={5} className="custom-class" />)
    const ratingElement = container.firstChild

    expect(ratingElement).toHaveClass('custom-class')
  })

  it('renders the correct number of stars when max is changed', () => {
    const { container } = render(<Rating value={3} max={10} />)
    const filledStars = container.querySelectorAll('svg[data-icon="star-fill-icon"]')
    const emptyStars = container.querySelectorAll('svg[data-icon="star-icon"]')

    expect(filledStars.length).toBe(2) // 3/10 normalized to 5 is 1.5, rounded to 2
    expect(emptyStars.length).toBe(3)
  })
})
