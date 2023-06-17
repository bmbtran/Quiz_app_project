import React from 'react'

const BulletQuizDetails = (props) => {
  return (
    <div className='flex flex-row'>
            <span className='pr-3'>•</span>
            <div>{props.content}
            </div>
    </div>
  )
}

export default BulletQuizDetails