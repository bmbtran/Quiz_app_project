import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Views/Homepage/Homepage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Homepage />
      </div>
    </>
  )
}

export default App
