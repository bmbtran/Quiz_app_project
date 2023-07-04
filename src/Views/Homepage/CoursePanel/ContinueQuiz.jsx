import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCourseData } from '../../../courseApi.jsx';
import { useState, useEffect } from 'react';
import ContinueCard from '../../../Components/ContinueCard.jsx';
function ContinueQuiz(props) {
    const dispatch = useDispatch();
    const questionsDone = props.questionsDone;
    const timeLeft = props.timeLeft
    const [showQuiz, setShowQuiz] = useState(true);
    const handleTrashClick = (event) => {
      event.preventDefault();
      setShowQuiz(false);
    };
      
    const course = useSelector((state) => state.selectedCourse);
  return (

      <>
      {showQuiz && (
        <div>
          <h1 className='pl-4 font-bold text-xl pb-2 font-ubuntu text-zinc-700'>Continue Quiz</h1>
          <ContinueCard course={course} questionsDone={questionsDone} timeLeft={timeLeft} onTrashClick={handleTrashClick} />
        </div>
      )}
    </>
  );
}
export default ContinueQuiz