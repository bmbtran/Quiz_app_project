import React from 'react'
import indicator from "../../assets/indicator.png"
import questions from "../../assets/questions.png"
import time from "../../assets/time.png"
import star from "../../assets/star.svg"
import QuizInfo from "../../Components/QuizInfo.jsx"
import BulletQuizDetails from '../../Components/BulletQuizDetails'
import Indicator from '../../Components/Indicator'

const Instruction = () => {
  function StartQuiz(){
    console.log("Start Quiz")
  }
  return (
    <div className=" h-3/4 w-screen bg-white rounded-t-3xl">
    <Indicator />
    <div className= "flex flex-col space-y-4 mt-3 text-black px-10 font-nunito ">
        <h1 className=" font-extrabold text-left font-ubuntu text-lg">Brief explanation about this quiz</h1>
        <div className=' space-y-4'>
          <QuizInfo detailsImage={questions} detailsTitle="10 Questions" details="10 points for a correct answer"/>
          <QuizInfo detailsImage={time} detailsTitle="1 Hour 15 mins" details="Total duration of the quiz"/>
          <QuizInfo detailsImage={star} detailsTitle="Win 10 star" details="Answer all questions correctly"/>
        </div>
        <h2 className="font-ubuntu font-bold">Please read the text below carefully so you can
          understand it</h2>
        <div className='grid grid-rows-4 space-y-1'>
          <BulletQuizDetails content="10 points awarded for a correct answer and no marks for a incorrect answer"/>
          <BulletQuizDetails content="Tap on options to select the correct answer" />
          <BulletQuizDetails content="Tap on the bookmark icon to save interesting questions" />
          <BulletQuizDetails content="Click submit if you are sure you want to submit the quiz" />
        </div>
        <button type="button" onClick={StartQuiz} className="text-white bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Start Quiz</button>
    </div>
    </div>
    
  )
}

export default Instruction