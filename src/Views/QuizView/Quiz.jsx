import React from 'react'
import QuizViewHeader from './QuizViewHeader.jsx'
import QuizContent from './QuizContent'
import { useState } from 'react'
function Quiz() {
  const [timeLeft, setTimeLeft] = useState('--:--');

  const handleDurationChange = (duration) => {
    setTimeLeft(duration);
  };
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-blue-900 to-blue-800'>
    <QuizViewHeader onDurationChange={handleDurationChange}/>
    <QuizContent duration={timeLeft}/>
    </div>
  )
}

export default Quiz