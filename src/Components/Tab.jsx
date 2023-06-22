

import React, { useState } from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('popular');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

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
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'popular' ? '' : 'hidden'
          }`}
          id="popular"
          role="tabpanel"
          aria-labelledby="popular-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{' '}
            <strong className="font-medium text-gray-800 dark:text-white">
              popular tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps className to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'science' ? '' : 'hidden'
          }`}
          id="science"
          role="tabpanel"
          aria-labelledby="science-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{' '}
            <strong className="font-medium text-gray-800 dark:text-white">
              science tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps className to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'mathematics' ? '' : 'hidden'
         }`}
          id="mathematics"
          role="tabpanel"
          aria-labelledby="mathematics-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{' '}
            <strong className="font-medium text-gray-800 dark:text-white">
              mathematics tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps className to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'computer' ? '' : 'hidden'
          }`}
          id="computer"
          role="tabpanel"
          aria-labelledby="computer-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{' '}
            <strong className="font-medium text-gray-800 dark:text-white">
              Computer tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps className to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tab;