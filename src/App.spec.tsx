import {axe} from 'vitest-axe'
import App from './App'
import { render, screen, userEvent } from './tests/utils'

describe('Check if component is A11y compatible', () => {
  it('should be accessible to all users', async () => {
    render(<App/>, document.body)
    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})