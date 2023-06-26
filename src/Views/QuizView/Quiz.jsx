import React from 'react'
import QuizViewHeader from './QuizViewHeader.jsx'
import QuizContent from './QuizContent'
function Quiz() {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-blue-900 to-blue-800'>
    <QuizViewHeader />
    <QuizContent />
    </div>
  )
}

export default Quiz