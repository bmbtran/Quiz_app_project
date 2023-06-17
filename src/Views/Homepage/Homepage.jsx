import React from 'react'
import HomepageHeader from './HomepageHeader'
import CoursePanel from "./CoursePanel/CoursePanel.jsx"
const Homepage = (props) => {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-blue-900 to-blue-800'>
    <HomepageHeader />
    <CoursePanel />
    </div>
    )
}

export default Homepage