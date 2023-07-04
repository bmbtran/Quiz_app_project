import React from 'react'

export default function QuizInfo(props){
  return (
    <div className='flex space-x-5'>
            <img src={props.detailsImage}></img>
            <div className='flex flex-col'>
            <h2 className='font-bold'>{props.detailsTitle}</h2>
            <span className='text-gray-400'>{props.details}</span>
            </div>
          </div>
  )
}


