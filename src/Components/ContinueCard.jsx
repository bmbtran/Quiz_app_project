import React from 'react'
import { useDispatch } from 'react-redux';
import selectedCourseSlice, { selectCourse } from '../features/selectedCourse/selectedCourseSlice';
import ratingIcon from "../assets/rating.png"
import time_pic from "../assets/time_homepage.png"
import question from "../assets/questions_homepage.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import trashIcon from "../assets/trash.png"

// const ContinueCard = ({course}) => {
//   const dispatch = useDispatch();
//   const handleContinueCardClick = () => {
//     dispatch(selectCourse(course));
//   };
//   const [questionsDone, timeLeft] = [2, 0.3]

//   return (
//     //create a horizontal ContinueCard with an image, title, and rating that is still horizontal on small screen
//     <Link to={{ pathname: `/course/:${course.id}`}}>
//     <div className="border-transparent flex items-center space-x-4  mx-4 rounded-md border-2 hover:border-sky-500" onClick={handleContinueCardClick}>
//       <img className="h-20 w-20 rounded " src={course.image} alt={course.name} />
//       <div>
//         <h3 className="flex flex-row text-lg font-bold font-ubuntu text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">{course.name}</h3>
//               <div className='flex flex-none space-x-1'>
//                 <img className='mt-1' src={question} />
//                 <p className="text-gray-400">{course.quiz && course.quiz.length} Questions</p>
//               </div>
//               <div className='flex-none flex space-x-2'>
//                 <img className='w-4 h-4 mt-1' src={time_pic} />
//                 <p className='text-gray-400'> {`${course.duration} ${course.duration > 1 ? "hours" : "hour"}`}</p>
//               </div>
//               <div className='grow w-200'>
//                 <button className=' rounded-lg bg-zinc-800 text-gray-200'> Continue Quiz </button>
//               </div>
//       </div>

//       <div className='flex ml-auto mr-3 space-x-2 '>
//           <img className='w-5 h-5 ' src={trashIcon} />
          
//       </div>
//     </div>
//     </Link>
//   )}
// export default ContinueCard

const ContinueCard = ({course}) => {
  const dispatch = useDispatch();
  const handleContinueCardClick = () => {
    dispatch(selectCourse(course));
  };
  const [questionsDone, timeLeft] = [2, 0.3]

  return (
    //create a horizontal ContinueCard with an image, title, and rating that is still horizontal on small screen
    <Link to={{ pathname: `/course/:${course.id}`}}>
    <div className="border-transparent flex items-center space-x-4  mx-4 rounded-md border-2 hover:border-sky-500" onClick={handleContinueCardClick}>
      <img className="h-20 w-20 rounded ml-3 my-2" src={course.image} alt={course.name} />
      <div className="flex-grow">
        <h3 className="text-lg font-bold font-ubuntu text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">{course.name}</h3>
              <div className='flex space-x-1'>
                <img className='mt-1' src={question} />
                <p className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-bold -translate-y-0.5">{course.quiz && questionsDone && `${questionsDone}`}</p>
                <p className="text-gray-400">{course.quiz && `/ ${course.quiz.length} Questions` }</p>

              </div>
              <div className='flex space-x-2'>
                <img className='w-4 h-4 mt-1' src={time_pic} />
                <p className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-bold -translate-y-0.5">{questionsDone && `${timeLeft}`}</p>
                <p className='text-gray-400'> {`/ ${course.duration} ${course.duration > 1 ? "hours" : "hour"}`}</p>
              </div>
              <div className='flex my-2'>
                <button className='flex-1 h-8 rounded-lg bg-zinc-800 text-gray-400'> Continue Quiz </button>
              </div>
      </div>
      <div className='flex ml-auto mr-3 space-x-2 '>
          <img className='w-5 h-5 ' src={trashIcon} />
          
      </div>
    </div>
    </Link>
  )}
export default ContinueCard