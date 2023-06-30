import React from 'react'
import CoursePanel from "./CoursePanel/CoursePanel.jsx"
import ContinueQuiz from "./CoursePanel/ContinueQuiz.jsx"
import { useSelector } from 'react-redux';
import  {useLocation} from 'react-router-dom';
// import courseApi from '../../courseApi.jsx'
import { useState, useEffect } from 'react'
const Homepage = () => {
  const selectedCourse = useSelector((state) => state.selectedCourse);
  const finishedCourses = useSelector((state) => state.finishedCourses);
  console.log("finishedCourses" + finishedCourses)
  const isCourseFinished = finishedCourses.includes(selectedCourse.id);
  console.log("isCourseFinished" + isCourseFinished)
  const location = useLocation();
  const data = location.state
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-blue-900 to-blue-800'>
    <CoursePanel />
    {data && !isCourseFinished && (<ContinueQuiz questionsDone={data.questionsDone} />)}
    </div>
    )
}

export default Homepage