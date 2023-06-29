import React from 'react'
import CoursePanel from "./CoursePanel/CoursePanel.jsx"
import ContinueQuiz from "./CoursePanel/ContinueQuiz.jsx"

// import courseApi from '../../courseApi.jsx'
import { useState, useEffect } from 'react'
const Homepage = (props) => {

  return (
    <div className='w-screen h-screen bg-gradient-to-r from-blue-900 to-blue-800'>
    <CoursePanel />
    <ContinueQuiz />
    </div>
    )
}

export default Homepage