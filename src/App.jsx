import { useState } from 'react'
import Homepage from './Views/Homepage/Homepage.jsx'
import QuizDetailsView from './Views/QuizDetailsView/QuizDetailsView.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <BrowserRouter>
    //   <Routes />
    <div >
      <Homepage/>
      {/* <QuizDetailsView /> */}

    </div>
    // </BrowserRouter>
  )
}

export default App
