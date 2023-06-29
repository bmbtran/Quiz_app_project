
import kirby from '../../../assets/kirby.png'
import menu_bar from '../../../assets/menu_bar.png'
import React, { useEffect, useState } from 'react';
import Indicator from '../../../Components/Indicator.jsx';
import Card from '../../../Components/Card.jsx';
import Tab from '../../../Components/Tab.jsx';
import { fetchCourseData } from '../../../courseApi.jsx';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from "../../../Components/SearchBar.jsx"
import { Link } from 'react-router-dom';




const CoursePanel = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.course);
  const [searchResults, setSearchResults] = useState(null);
  const [avatar, username] = [kirby, "Tran"]
  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);
  const refresh = () => window.location.reload(true)

  const handleSearch = (searchText) => {
    const results = data.filter((course) =>
      course.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  
  };

  if (loading) {
    return (
        <div className="flex w-screen h-screen justify-center items-center">
    <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
</div>
    );
  }

  if (error) {
    return (
      <>
        <div role="alert" className="text-red-500">
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2 text-red-500"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm5.657 14.243l-1.414 1.414L10 11.414l-4.243 4.243-1.414-1.414L8.586 10 4.343 5.757l1.414-1.414L10 8.586l4.243-4.243 1.414 1.414L11.414 10l4.243 4.243z"
            />
          </svg>
          <span>{error.message}</span>
        </div>
      </>
    );
  }

  return (
    <>
    <div className='h-1/4'>
        <div className=' w-screen pt-8 md:pb-3 sm:pb-3 lg:pb-0 flex items-start justify-between'>
              <Link to={{ pathname: '/'}}>
              <div className="pl-10 flex items-center flex-wrap space-x-8 ">
              <img className="w-200 " src={menu_bar} onClick={refresh}/>
              </div>
              </Link>
              <img className="w-10 h-11 rounded-full mr-10 " src={avatar} alt="Rounded avatar"/>
        </div>
        <div className='flex flex-col px-10 flex-wrap pt-3  space-y-2'>
            <div className='text-white'>
              <h3 className='text-sm'>{`Hello, ${username}`}</h3>
              <h2 className='text-lg font-bold font-ubuntu'>Let's test your knowledge</h2>
            </div>
            <SearchBar onSearch={handleSearch} className="py-5"/>
        </div>
      </div>
      <div className="h-3/4 w-screen bg-white rounded-t-3xl">
      <Indicator />
      <div className="mt-8">
        {searchResults ? (
          <div className="grid gap-4 grid-cols-1">
            {searchResults.map((course) => (
              <Card  key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <Tab course={data} />
        )}
      </div>
      </div>
      </>
  );
};

export default CoursePanel;