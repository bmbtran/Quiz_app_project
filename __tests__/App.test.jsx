import { test, expect } from 'vitest'
import App from '../src/App.jsx'
import Homepage from '../src/Views/Homepage/Homepage.jsx'
import Indicator from '../src/Components/Indicator.jsx'
test('renders the homepage route', () => {
    render(<Homepage />)
    expect(document.body.innerHTML).toContain(<Indicator/>)
  })
  