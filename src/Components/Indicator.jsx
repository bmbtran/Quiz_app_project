import React from 'react'
import indicator from "../assets/indicator.png"

const Indicator = () => {
  return (
    <div className='flex justify-center items-start mb-2'>
    <img className="flex justify-center pt-4" src={indicator} />       
    </div>
  )
}

export default Indicator