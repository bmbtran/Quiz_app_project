
import kirby from '../../../assets/kirby.png'
import menu_bar from '../../../assets/menu_bar.png'
import React, { useEffect, useState } from 'react';
import Indicator from '../../../Components/Indicator.jsx';
import Card from '../../../Components/Card.jsx';
import Tab from '../../../Components/Tab.jsx';
import { fetchCourseData } from '../../../courseApi.jsx';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from "../../../Components/SearchBar.jsx"

const CoursePanel = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.course);
  const [searchResults, setSearchResults] = useState(null);
  const [avatar, username] = [kirby, "Tran"]
  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);

  const handleSearch = (searchText) => {
    const results = data.filter((course) =>
      course.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  };

  if (loading) {
    return (
      <>
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2 text-blue-500 animate-spin"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              fill="none"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              style={{ opacity: '0.2' }}
            ></circle>
            <path
              fill="none"
              strokeLinecap="round"
              stroke="currentColor"
              strokeWidth="4"
              d="M12 6v-2m0 16v-2m6-6h2m-16 0h-2"
            ></path>
          </svg>
          <span>Loading</span>
        </div>
      </>
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
              <div className="pl-10 flex items-center flex-wrap space-x-8 ">
              <img className="w-200 " src={menu_bar}/>
              </div>
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {searchResults.map((course) => (
              <Card  key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <Tab/>
        )}
      </div>
      </div>
      </>
  );
};

export default CoursePanel;