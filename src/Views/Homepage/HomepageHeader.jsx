import React from 'react'
import kirby from '../../assets/kirby.png'
import menu_bar from '../../assets/menu_bar.png'
import SearchBar from '../../Components/SearchBar.jsx'

const HomepageHeader = () => {
  
    const [avatar, username] = [kirby, "Tran"]
  return (
    <div className='h-1/4'>
        <div className='w-screen pt-8 md:pb-3 sm:pb-3 lg:pb-0 flex items-start justify-between'>
          <div className="pl-10 flex items-center flex-wrap space-x-8 ">
          <img className="w-200 " src={menu_bar}/>
          </div>
          <img className="w-10 h-11 rounded-full mr-10 " src={avatar} alt="Rounded avatar"/>
        </div>
        <div className='flex flex-col px-10 flex-wrap pt-2  space-y-2'>
          <div className='text-white'>
            <h3 className='text-sm'>{`Hello, ${username}`}</h3>
            <h2 className='text-lg font-bold font-ubuntu'>Let's test your knowledge</h2>
          </div>
          <SearchBar className="py-5"/>
        </div>
    </div>
  )
}

export default HomepageHeader