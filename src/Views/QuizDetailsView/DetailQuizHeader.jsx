import React from 'react'
import leftArrow from "../../assets/leftArrow2.svg"
import avatar from "../../assets/kirby.png"
import starRating from "../../assets/rating.png"
import { useSelector } from 'react-redux'
import {Link } from 'react-router-dom'

const DetailQuizHeader = () => {
  const points = 100
  const selectedCourse = useSelector((state) => state.selectedCourse);
  if (selectedCourse === null) {
    return <div>Loading...</div>; // or any other loading indicator
  }
  console.log(selectedCourse)
  return (
//back arrow + page title + avatar
<div className='h-1/4'>
    <div className='w-screen pt-8 pb-10 flex items-start justify-between'>
      <div className="ml-7 flex items-center flex-wrap space-x-8 ">
      <Link to='/'>
      <img className="w-200 " src={leftArrow}/>
      </Link>
      <h3 className='font-bold text-lg text-white'>Quiz Details</h3>
      </div>
      <img className="w-10 h-11 rounded-full mr-7 " src={avatar} alt="Rounded avatar"/>
    </div>
    <div className=' flex justify-between px-10 '>
      <div className='text-white'>
        <h2 className='text-lg font-bold font-ubuntu'>{selectedCourse.name}</h2>
        <p>Get {points} points</p>
      </div>
      <div className='flex justify-between space-x-3 items-end pb-2'>
        <img className='w-5 h-5' src={starRating} alt="Rating stars"/>
        <p className='text-white'>{selectedCourse.rating}</p>
      </div>
    </div>
</div>
//replace with data fetched from API later
  )
}

export default DetailQuizHeader