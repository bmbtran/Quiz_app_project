import React from "react";
import Homepage from './Views/Homepage/Homepage.jsx'
import QuizDetailsView from './Views/QuizDetailsView/QuizDetailsView.jsx'
import Quiz from './Views/QuizView/Quiz.jsx'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import NoPage from './Views/NoPage.jsx'

function App() {

  return (
    <div >
        <Router>
          <Routes>
            <Route path="/" exact element={<Homepage/>} />
            <Route path="/course/:id" element={<QuizDetailsView/>} />
            <Route path="/course/:id/quiz" element={<Quiz/>} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
    </div>

  )
}

export default App
