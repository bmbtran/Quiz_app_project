import Card from "./Card.jsx"
import React, { useState } from 'react';
import TabContent from "./TabContent.jsx";

const Tab = (props) => {
  const [activeTab, setActiveTab] = useState('popular');
  const data = props.course
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const filteredData = data.filter((course) =>{
   return course.category.toLowerCase() === activeTab.toLowerCase()
  } );
 
  console.log(filteredData)
  return (
    <>
      <div className="mb-4 border-b border-white dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-ubuntu font-medium text-center text-gray-400"
          id="myTab"
          role="tablist"
        >
          <li className="flex-auto" role="presentation">
            <button
              className={`inline-block w-full p-4 border-b-2 rounded-t-lg  hover:text-blue-500 hover:border-blue-500 ${
                activeTab === 'popular' ? 'border-blue-500' : ''
              }`}
              id="popular-tab"
              onClick={() => handleTabClick('popular')}
              type="button"
              role="tab"
              aria-controls="popular"
              aria-selected={activeTab === 'popular'}
            >
              Popular
            </button>
          </li>
          <li className="flex-auto" role="presentation">
            <button
              className={`inline-block w-full p-4 border-b-2 border-transparent rounded-t-lg text-gray-400 hover:text-blue-500 hover:border-blue-500 dark:hover:text-gray-300 ${
                activeTab === 'science' ? 'border-blue-500' : ''
              }`}
              id="science-tab"
              onClick={() => handleTabClick('science')}
              type="button"
              role="tab"
              aria-controls="science"
              aria-selected={activeTab === 'science'}
            >
              Science
            </button>
          </li>
          <li className="flex-auto" role="presentation">
            <button
              className={`inline-block w-full p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-500 hover:border-blue-500 dark:hover:text-gray-300 ${
                activeTab === 'mathematics' ? 'border-blue-500' : ''
              }`}
              id="mathematics-tab"
              onClick={() => handleTabClick('mathematics')}
              type="button"
              role="tab"
              aria-controls="mathematics"
              aria-selected={activeTab === 'mathematics'}
            >
              Mathematics
            </button>
          </li>
          <li className="flex-auto" role="presentation">
            <button
              className={`inline-block w-full p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-500 hover:border-blue-500 dark:hover:text-gray-300 ${
                activeTab === 'computer' ? 'border-blue-500' : ''
              }`}
              id="computer-tab"
              onClick={() => handleTabClick('computer')}
              type="button"
              role="tab"
              aria-controls="computer"
              aria-selected={activeTab === 'computer'}
            >
              Computer
            </button>
          </li>
        </ul>
      </div>

      <div id="myTabContent">
        <TabContent category="popular" activeTab={activeTab} filteredData={filteredData}/>
        <TabContent category="science" activeTab={activeTab} filteredData={filteredData}/>
        <TabContent category="mathematics" activeTab={activeTab} filteredData={filteredData}/>
        <TabContent category="computer" activeTab={activeTab} filteredData={filteredData}/>
      </div>
    </>
  );
};

export default Tab;