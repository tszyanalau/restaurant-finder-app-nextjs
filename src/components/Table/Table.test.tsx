import { render, screen } from '@testing-library/react'
import Table from './index'

describe('Table Component', () => {
  const data = [
    { label: 'Phone Number', value: '123-456-7890' },
    { label: 'Website', value: <a href="https://example.com">example.com</a> },
    { label: 'Price Range', value: '$$' },
  ]

  it('renders table with provided data', () => {
    render(<Table data={data} />)

    expect(screen.getByText('Phone Number')).toBeInTheDocument()
    expect(screen.getByText('123-456-7890')).toBeInTheDocument()
    expect(screen.getByText('Website')).toBeInTheDocument()
    expect(screen.getByText('example.com')).toBeInTheDocument()
    expect(screen.getByText('Price Range')).toBeInTheDocument()
    expect(screen.getByText('$$')).toBeInTheDocument()

    const anchorElement = screen.getByText('example.com').closest('a')
    expect(anchorElement).toHaveAttribute('href', 'https://example.com')
  })
})
