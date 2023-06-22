import React from 'react'
import HomepageHeader from './HomepageHeader'
import CoursePanel from "./CoursePanel/CoursePanel.jsx"
// import courseApi from '../../courseApi.jsx'
import { useState, useEffect } from 'react'
const Homepage = (props) => {
  // const [courses, setCourses] = useState(null)
  // const searchTerm = "Git"
  // const url = `https://quizappapi-960094b6b274.herokuapp.com/courses?s=${searchTerm}`;
  // useEffect(() => {
  //     fetch(url)
  //       .then(res => {
  //         return res.json()
  //       })
  //       .then(data => {
  //         console.log(data)
  //         setCourses(data)
  //       })
  //       .catch(error => {
  //         console.error('Error fetching courses:', error);
  //       });
  //     fetchCourses()
  // }, [])
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-blue-900 to-blue-800'>
    <HomepageHeader />
    <CoursePanel />
    </div>
    )
}

export default Homepage