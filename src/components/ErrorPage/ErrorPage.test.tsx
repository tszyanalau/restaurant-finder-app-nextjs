import { render } from '@testing-library/react'
import ErrorPage from './index'

describe('ErrorPage', () => {
  it('renders the ErrorPage with the correct children', () => {
    const { getByText } = render(
      <ErrorPage>
        <p>Test Error Message</p>
      </ErrorPage>
    )
    const errorMessage = getByText('Test Error Message')

    expect(errorMessage).toBeInTheDocument()
  })

  it('renders the heading with the correct text', () => {
    const { getByText } = render(
      <ErrorPage>
        <p>Test Error Message</p>
      </ErrorPage>
    )
    const heading = getByText('Opps!')

    expect(heading).toBeInTheDocument()
  })

  it('renders the link with the correct text and href', () => {
    const { getByText } = render(
      <ErrorPage>
        <p>Test Error Message</p>
      </ErrorPage>
    )
    const link = getByText('Go to Top')

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })
})
