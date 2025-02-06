import { render } from '@testing-library/react'
import Alert from './index'

describe('Alert', () => {
  it('renders the info alert with the correct icon and text', () => {
    const { getByRole, getByText } = render(<Alert type="info">Info message</Alert>)
    const alert = getByRole('alert')
    const icon = alert.querySelector('svg')
    const text = getByText('Info message')

    expect(alert).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('text-info')
    expect(text).toBeInTheDocument()
  })

  it('renders the error alert with the correct icon and text', () => {
    const { getByRole, getByText } = render(<Alert type="error">Error message</Alert>)
    const alert = getByRole('alert')
    const icon = alert.querySelector('svg')
    const text = getByText('Error message')

    expect(alert).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('text-error')
    expect(text).toBeInTheDocument()
  })

  it('applies additional class names correctly', () => {
    const { getByRole } = render(
      <Alert type="info" className="custom-class">
        Info message
      </Alert>
    )
    const alert = getByRole('alert')

    expect(alert).toHaveClass('alert')
    expect(alert).toHaveClass('custom-class')
  })
})
