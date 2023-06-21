import React from 'react'
import Indicator from '../../../Components/Indicator.jsx'
import Card from "../../../Components/Card.jsx"
// import Tab from "../../../Components/Tab.jsx"
// if search is true, hide continueQuiz & tabs
// if unfinishedQuiz is true, show continueQuiz
const CoursePanel = (props) => {
  return (
    <div className=" h-3/4 w-screen bg-white rounded-t-3xl">
    <Indicator />
    {/* <Tab /> */}
    <div className='grid grid-cols-1 gap-4'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    </div>
  )
}

export default CoursePanel