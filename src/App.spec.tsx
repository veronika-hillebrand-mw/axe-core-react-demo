import {axe} from 'vitest-axe'
import App from './App'
import { render, screen, userEvent } from './tests/utils'

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />)
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
  })

  it('should increment count on click', async () => {
    render(<App />)
    userEvent.click(screen.getByRole('button'))
    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument()
  })

  it('uses flexbox in app header', async () => {
    render(<App />)
    const element = screen.getByText('Click on the Vite and React logos to learn more')
    expect(element.className).toEqual('read-the-docs')
    expect(getComputedStyle(element).color).toEqual('rgb(136, 136, 136)')
  })

  it('should be accessible to all users', async () => {
    render(<App/>, document.body)
    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})