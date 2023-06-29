import React from 'react'
import Card from "../../../Components/Card.jsx"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchCourseData } from '../../../courseApi.jsx';
import { useEffect } from 'react';
function ContinueQuiz() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.course);
    useEffect(() => {
        dispatch(fetchCourseData());
      }, [dispatch]);
  return (
    <div>
        <h1 className='font-bold text-lg font-ubuntu text-zinc-700'>Continue Quiz</h1>
        {/* <Card className="bg-white" course={data[1]}/> */}
    </div>
  )
}

export default ContinueQuiz