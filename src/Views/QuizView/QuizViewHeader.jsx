import React from 'react'
import leftArrow from '../../assets/leftArrow2.svg'
import quiz_view_rectangle from "../../assets/quiz_view_rectangle.png"
import time_quiz_view from "../../assets/time_quiz_view.svg"
function QuizViewHeader() {
  return (
    <div className=''>
    <div className='w-screen pt-8 pb-10 flex items-start justify-between'>
      <div className="ml-7 flex items-center flex-wrap space-x-8 ">
      <img className="w-200 " src={leftArrow}/>
      <h3 className='text-[18px] font-medium text-white'>UI/UX Quiz</h3>
      </div>
       <div className='relative pr-5'>
        <img src={quiz_view_rectangle} className=''/>
        <img src={time_quiz_view} className='absolute top-1/2 left-1/2 -translate-x-12 -translate-y-1/2'/>
        <h1 className="absolute text-sm text-blue-500 top-1/2 left-1/2 -translate-x-7 -translate-y-1/2">
            1:50</h1>

       </div>
    </div>
    </div>
  )
}

export default QuizViewHeader