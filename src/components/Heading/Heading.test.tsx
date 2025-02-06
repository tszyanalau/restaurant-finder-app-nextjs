import { render } from '@testing-library/react'
import Heading from './index'

describe('Heading', () => {
  it('renders the correct heading level', () => {
    const { container } = render(<Heading level={1}>Test Heading</Heading>)
    const heading = container.querySelector('h1')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Test Heading')
  })

  it('applies the margin class correctly', () => {
    const { container } = render(
      <Heading level={1} margin>
        Test Heading
      </Heading>
    )
    const heading = container.querySelector('h1')
    expect(heading).not.toHaveClass('m-0')
  })

  it('does not apply the margin class when margin is false', () => {
    const { container } = render(
      <Heading level={1} margin={false}>
        Test Heading
      </Heading>
    )
    const heading = container.querySelector('h1')
    expect(heading).toHaveClass('m-0')
  })

  it('does not apply the margin class by default', () => {
    const { container } = render(<Heading level={1}>Test Heading</Heading>)
    const heading = container.querySelector('h1')
    expect(heading).toHaveClass('m-0')
  })

  it('applies additional class names correctly', () => {
    const { container } = render(
      <Heading level={1} className="custom-class">
        Test Heading
      </Heading>
    )
    const heading = container.querySelector('h1')
    expect(heading).toHaveClass('custom-class')
  })

  it('renders the correct heading level for different levels', () => {
    const { container: container2 } = render(<Heading level={2}>Test Heading 2</Heading>)
    const heading2 = container2.querySelector('h2')
    expect(heading2).toBeInTheDocument()
    expect(heading2).toHaveTextContent('Test Heading 2')

    const { container: container3 } = render(<Heading level={3}>Test Heading 3</Heading>)
    const heading3 = container3.querySelector('h3')
    expect(heading3).toBeInTheDocument()
    expect(heading3).toHaveTextContent('Test Heading 3')
  })
})
