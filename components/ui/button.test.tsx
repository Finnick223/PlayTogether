import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './button'

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    render(<Button>Default Button</Button>)
    const button = screen.getByRole('button', { name: /default button/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary text-primary-foreground')
  })

  it('renders with the "destructive" variant', () => {
    render(<Button variant='destructive'>Destructive Button</Button>)
    const button = screen.getByRole('button', { name: /destructive button/i })
    expect(button).toHaveClass('bg-destructive text-destructive-foreground')
  })

  it('renders with different sizes', () => {
    render(<Button size='sm'>Small Button</Button>)
    const button = screen.getByRole('button', { name: /small button/i })
    expect(button).toHaveClass('h-8 px-3 text-xs')

    render(<Button size='lg'>Large Button</Button>)
    const largeButton = screen.getByRole('button', { name: /large button/i })
    expect(largeButton).toHaveClass('h-10 px-8')
  })

  it('is disabled when the "disabled" prop is true', async () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole('button', { name: /disabled button/i })
    expect(button).toBeDisabled()
    expect(button).toHaveClass(
      'disabled:pointer-events-none disabled:opacity-50',
    )
  })

  it('triggers onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Clickable Button</Button>)
    const button = screen.getByRole('button', { name: /clickable button/i })

    await userEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders as a custom component when "asChild" is true', () => {
    render(
      <Button asChild>
        <a href='/custom-link'>Custom Link</a>
      </Button>,
    )
    const link = screen.getByRole('link', { name: /custom link/i })
    expect(link).toHaveAttribute('href', '/custom-link')
  })
})
