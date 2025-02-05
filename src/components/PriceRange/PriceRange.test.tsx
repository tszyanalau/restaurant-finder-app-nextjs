import { render } from '@testing-library/react'
import { Price } from '@/types/place'
import PriceRange from './index'

describe('PriceRange', () => {
  const startPrice: Price = { units: '10', currencyCode: 'USD' }
  const endPrice: Price = { units: '20', currencyCode: 'USD' }

  it('renders the price range with start and end prices', () => {
    const { getByText } = render(<PriceRange startPrice={startPrice} endPrice={endPrice} />)
    const priceRange = getByText('10 USD - 20 USD')

    expect(priceRange).toBeInTheDocument()
  })

  it('renders the price range with only the start price', () => {
    const { getByText } = render(<PriceRange startPrice={startPrice} />)
    const priceRange = getByText('More than 10 USD')

    expect(priceRange).toBeInTheDocument()
  })

  it('applies additional class names correctly', () => {
    const { container } = render(<PriceRange startPrice={startPrice} className="custom-class" />)
    const priceRange = container.firstChild

    expect(priceRange).toHaveClass('custom-class')
  })
})
