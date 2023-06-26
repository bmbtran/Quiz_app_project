import { distanceAndSkiddingToXY } from '@popperjs/core/lib/modifiers/offset';
import QuestionBubble from './QuestionBubble';
import React, { useState } from 'react';

const QuestionBar = () => {
  const [activeTab, setActiveTab] = useState('1');
const [question, option] = ["What is the meaning of UI UX Design?", "User interface and user experience"]
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="mx-7 mb-4 border-b-2 overflow-x-scroll">
        <ul
          className="flex -mb-px text-sm font-ubuntu text-center  border-gray-400 text-gray-400"
          id="myTab"
          role="tablist"
        >
          <li className="flex-auto" role="presentation">
            <>
            <button
              className={`inline-block w-full py-4 px-2 rounded-t-lg  hover:text-blue-500 hover:border-blue-500 ${
                activeTab === '1' ? 'border-blue-500' : ''
              }`}
              id="1-tab"
              onClick={() => handleTabClick('1')}
              type="button"
              role="tab"
              aria-controls="1"
              aria-selected={activeTab === '1'}
            >
              <QuestionBubble number="1"/>
            </button>
            </>
          </li>
          <li className="flex-auto" role="presentation">
            <button
              className={`inline-block w-full py-4 px-2 border-b-2 border-transparent rounded-t-lg text-gray-400 hover:text-blue-500 hover:border-blue-500 dark:hover:text-gray-300 ${
                activeTab === '2' ? 'border-blue-500' : ''
              }`}
              id="2-tab"
              onClick={() => handleTabClick('2')}
              type="button"
              role="tab"
              aria-controls="2"
              aria-selected={activeTab === '2'}
            >
              <QuestionBubble number="2"/>
            </button>
          </li>
          <li className="flex-auto" role="presentation">
            <button
              className={`inline-block py-4 px-2 border-b-2 border-transparent rounded-t-lg hover:text-blue-500 hover:border-blue-500 dark:hover:text-gray-300 ${
                activeTab === '3' ? 'border-blue-500' : ''
              }`}
              id="3-tab"
              onClick={() => handleTabClick('3')}
              type="button"
              role="tab"
              aria-controls="3"
              aria-selected={activeTab === '3'}
            >
              <QuestionBubble number="3"/>
            </button>
          </li>
          <li className="flex-auto" role="presentation">
            <button
              className={`inline-block w-full py-4 px-2 border-b-2 border-transparent rounded-t-lg hover:text-blue-500 hover:border-blue-500 dark:hover:text-gray-300 ${
                activeTab === '4' ? 'border-blue-500' : ''
              }`}
              id="4-tab"
              onClick={() => handleTabClick('4')}
              type="button"
              role="tab"
              aria-controls="4"
              aria-selected={activeTab === '4'}
            >
              <QuestionBubble number="4"/>
            </button>
          </li>
          <li className="flex-auto" role="presentation">
            <button
              className={`inline-block w-full py-4 px-2 border-b-2 border-transparent rounded-t-lg hover:text-blue-500 hover:border-blue-500 dark:hover:text-gray-300 ${
                activeTab === '5' ? 'border-blue-500' : ''
              }`}
              id="5-tab"
              onClick={() => handleTabClick('5')}
              type="button"
              role="tab"
              aria-controls="5"
              aria-selected={activeTab === '5'}
            >
              <QuestionBubble number="5"/>
            </button>
          </li>
          <li className="flex-auto" role="presentation">
            <button
              className={`inline-block w-full py-4 px-2 border-b-2 border-transparent rounded-t-lg hover:text-blue-500 hover:border-blue-500 dark:hover:text-gray-300 ${
                activeTab === '6' ? 'border-blue-500' : ''
              }`}
              id="6-tab"
              onClick={() => handleTabClick('6')}
              type="button"
              role="tab"
              aria-controls="6"
              aria-selected={activeTab === '6'}
            >
              <QuestionBubble number="6"/>
            </button>
          </li>
          <li className="flex-auto" role="presentation">
            <button
              className={`inline-block w-full p-4 px-2 border-b-2 border-transparent rounded-t-lg hover:text-blue-500 hover:border-blue-500 dark:hover:text-gray-300 ${
                activeTab === '7' ? 'border-blue-500' : ''
              }`}
              id="7-tab"
              onClick={() => handleTabClick('7')}
              type="button"
              role="tab"
              aria-controls="7"
              aria-selected={activeTab === '7'}
            >
              <QuestionBubble number="7"/>
            </button>
          </li>
        </ul>
      </div>

      <div id="myTabContent">
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === '1' ? '' : 'hidden'
          }`}
          id="1"
          role="tabpanel"
          aria-labelledby="1-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{' '}
            <strong className="font-medium text-gray-800 dark:text-white">
              1 tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps className to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === '2' ? '' : 'hidden'
          }`}
          id="2"
          role="tabpanel"
          aria-labelledby="2-tab"
        >
          
        </div>
        <div
          className={`px-4 py-2 rounded-lg ${
            activeTab === '3' ? '' : 'hidden'
         }`}
          id="3"
          role="tabpanel"
          aria-labelledby="3-tab"
        
        >
            <h1 className='font-semibold text-lg '>{question}</h1>
            <div  className='flex pt-4 space-x-2'>
                <QuestionBubble number="A"  />
                <h3 className="pt-2 font-ubuntu">{option} </h3>
            </div> 
            <div  className='flex pt-4 space-x-2'>
                <QuestionBubble number="A"  />
                <h3 className="pt-2 font-ubuntu">{option} </h3>
            </div> <div  className='flex pt-4 space-x-2'>
                <QuestionBubble number="A"  />
                <h3 className="pt-2 font-ubuntu">{option} </h3>
            </div> <div  className='flex pt-4 space-x-2'>
                <QuestionBubble number="A"  />
                <h3 className="pt-2 font-ubuntu">{option} </h3>
            </div> 


        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === '4' ? '' : 'hidden'
          }`}
          id="4"
          role="tabpanel"
          aria-labelledby="4-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{' '}
            <strong className="font-medium text-gray-800 dark:text-white">
              4 tab's associated content
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

export default QuestionBar