import { render } from '@testing-library/react'
import Flex from './index'

describe('Flex', () => {
  it('renders the Flex component with the correct children', () => {
    const { getByText } = render(<Flex>Test Content</Flex>)
    const content = getByText('Test Content')

    expect(content).toBeInTheDocument()
  })

  it('applies the default horizontal direction class', () => {
    const { container } = render(<Flex>Test Content</Flex>)
    const flexElement = container.firstChild

    expect(flexElement).toHaveClass('flex')
    expect(flexElement).toHaveClass('items-center')
    expect(flexElement).not.toHaveClass('flex-col')
  })

  it('applies the vertical direction class when specified', () => {
    const { container } = render(<Flex direction="vertical">Test Content</Flex>)
    const flexElement = container.firstChild

    expect(flexElement).toHaveClass('flex')
    expect(flexElement).toHaveClass('flex-col')
    expect(flexElement).not.toHaveClass('items-center')
  })

  it('applies the correct gap class when specified', () => {
    const { container } = render(<Flex gap={2}>Test Content</Flex>)
    const flexElement = container.firstChild

    expect(flexElement).toHaveClass('gap-2')
  })

  it('applies additional class names correctly', () => {
    const { container } = render(<Flex className="custom-class">Test Content</Flex>)
    const flexElement = container.firstChild

    expect(flexElement).toHaveClass('custom-class')
  })
})
