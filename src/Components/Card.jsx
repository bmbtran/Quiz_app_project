import React from 'react'
import { useDispatch } from 'react-redux';
import selectedCourseSlice, { selectCourse } from '../features/selectedCourse/selectedCourseSlice';
import ratingIcon from "../assets/rating.png"
import time_pic from "../assets/time_homepage.png"
import question from "../assets/questions_homepage.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Card = (props) => {
  const dispatch = useDispatch();
  const handleCardClick = () => {
    dispatch(selectCourse(course));
  };
  const course = props.course
  return (
    //create a horizontal card with an image, title, and rating that is still horizontal on small screen
    <Link to={{ pathname: `/course/${course.id}`}}>
    <div className="flex items-center space-x-4 shadow-lg mx-4 rounded-md border-2 hover:border-sky-500" onClick={handleCardClick}>
      <img className="h-20 w-20 rounded ml-3 my-2" src={course.image} alt={course.name} />
      <div>
        <h3 className="text-lg font-bold font-ubuntu text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">{course.name}</h3>
              <div className='flex space-x-1'>
                <img className='mt-1' src={question} />
                <p className="text-gray-400">{course.quiz.length} Questions</p>
              </div>
              <div className='flex space-x-2'>
                <img className='w-4 h-4 mt-1' src={time_pic} />
                <p className='text-gray-400'> {`${course.duration} ${course.duration > 1 ? "hours" : "hour"}`}</p>
              </div>
      </div>
      <div className='flex ml-auto mr-3 space-x-2'>
          <img className='w-4 h-4 mt-1 ' src={ratingIcon} />
          <p className=' font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'>{course.rating}</p>
      </div>
    </div>
    </Link>
  )}
export default Card