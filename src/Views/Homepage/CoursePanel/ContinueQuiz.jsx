import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCourseData } from '../../../courseApi.jsx';
import { useEffect } from 'react';
import ContinueCard from '../../../Components/ContinueCard.jsx';
function ContinueQuiz(props) {
    const dispatch = useDispatch();
    const questionsDone = props.questionsDone;
    // const { data, loading, error } = useSelector((state) => state.course);
    // useEffect(() => {
    //     dispatch(fetchCourseData());
    //   }, [dispatch]);
    //   const course = data && data.length > 1 && data[1];
    //   console.log(course);
    const course = useSelector((state) => state.selectedCourse);
  return (
    <div>
        <h1 className='pl-4 font-bold text-xl pb-2 font-ubuntu text-zinc-700'>Continue Quiz</h1>
        <ContinueCard course={course}  questionsDone={questionsDone}/>
    </div>
  )
}

export default ContinueQuiz