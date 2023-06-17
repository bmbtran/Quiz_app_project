import React from "react"
import DetailQuizHeader from "./DetailQuizHeader"
import Instruction from "./Instruction.jsx"

export default function QuizDetailsView() {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-blue-900 to-blue-800'>
      <DetailQuizHeader />
      <Instruction />
    </div>
  )
}