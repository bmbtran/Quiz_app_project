import React from 'react'
import Indicator from '../../Components/Indicator.jsx'
import QuestionBubble from '../../Components/QuestionBubble.jsx'
import QuestionBar from '../../Components/QuestionBar.jsx'
import gray_arrow from "../../assets/gray_arrow.svg"
import blue_arrow from "../../assets/blue_arrow.png"

function QuizContent() {
  return (
    <div className="h-screen-9/10 w-screen bg-white rounded-t-3xl">
    <Indicator />
    {/* <div className="flex justify-center items-center space-x-4 pt-3">
    </div> */}
    <div className=''>
        <QuestionBar className="" />
        <div className="flex justify-center space-x-5 item-end pt-40">
            <img className="  " src={blue_arrow} />
            <button className="  w-[195px] h-[50px] bg-white rounded-lg border-[1px] text-sky-600 font-ubuntu text-lg border-blue-500">Submit Quiz</button>
            <img className=" "src={gray_arrow} />
        </div>
    </div>
    </div>
  )
}

export default QuizContent