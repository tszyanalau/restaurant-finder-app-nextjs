import { render } from '@testing-library/react'
import Page from './index'

describe('Page', () => {
  it('renders the Page component with the correct children', () => {
    const { getByText } = render(<Page>Test Content</Page>)
    const content = getByText('Test Content')

    expect(content).toBeInTheDocument()
  })

  it('applies the default classes', () => {
    const { container } = render(<Page>Test Content</Page>)
    const pageElement = container.firstChild

    expect(pageElement).toHaveClass('p-4')
    expect(pageElement).toHaveClass('m-auto')
    expect(pageElement).toHaveClass('prose')
  })
})
