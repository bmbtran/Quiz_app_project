
import React, { useState, useEffect } from 'react';
import leftArrow from '../../assets/leftArrow2.svg';
import quiz_view_rectangle from "../../assets/quiz_view_rectangle.png";
import time_quiz_view from "../../assets/time_quiz_view.svg";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function QuizViewHeader({ onDurationChange }) {
  const selectedCourse = useSelector((state) => state.selectedCourse);
  const [duration, setDuration] = useState('--:--');
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    let timerId;
    if (selectedCourse) {
      const endTime = Date.now() + selectedCourse.duration * 60 * 60 * 1000;
      timerId = setInterval(() => {
        const remainingTime = endTime - Date.now();
        if (remainingTime <= 0) {
          setDuration('00:00');
          clearInterval(timerId);
        } else {
          const hours = Math.floor(remainingTime / (60 * 60 * 1000));
          const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
          const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
          let remainingTimeStr;
          if (hours >= 1) {
            remainingTimeStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
          } else {
            remainingTimeStr = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          }
          setDuration(remainingTimeStr);
          // onDurationChange(remainingTimeStr); // Call the callback function to update duration in the parent component
          
        }
      }, 1000);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [selectedCourse]);

  if (selectedCourse === null) {
    return <div>Loading...</div>; 
  }
  useEffect(() => {
    onDurationChange(duration);
  }, [duration, onDurationChange]);

  return (
    <div className=''>
      <div className='w-screen pt-8 pb-10 flex items-start justify-between'>
        <div className="ml-7 flex items-center flex-wrap space-x-8 ">
          <Link to="/course/:id">
            <img className="w-200 " src={leftArrow}/>
          </Link>
          <h3 className='text-[18px] font-medium text-white'>{selectedCourse.name}</h3>
        </div>
        <div className='relative pr-5'>
          <img src={quiz_view_rectangle} className=''/>
          <img src={time_quiz_view} className='absolute top-1/2 left-1/2 -translate-x-12 -translate-y-1/2'/>
          <h1 className="absolute text-sm text-blue-500 top-1/2 left-1/2 -translate-x-7 -translate-y-1/2">
            {duration}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default QuizViewHeader;