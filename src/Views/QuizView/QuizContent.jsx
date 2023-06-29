import Indicator from '../../Components/Indicator.jsx'
import QuestionBubble from '../../Components/QuestionBubble.jsx'
import QuestionBar from '../../Components/QuestionBar.jsx'
import gray_arrow from "../../assets/gray_arrow.svg"
import blue_arrow from "../../assets/blue_arrow.png"
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function QuizContent() {
  const selectedCourse = useSelector((state) => state.selectedCourse);
  if (selectedCourse === null) {
    return <div>Loading...</div>;
  }

  const [activeTab, setActiveTab] = useState('1');
  const [selectedOption, setSelectedOption] = useState({});
  const [userAnswer, setUserAnswer] = useState({});

  useEffect(() => {
    console.log(userAnswer);
  }, [userAnswer]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleArrowClick = (direction) => {
    const currentIndex = parseInt(activeTab) - 1;
    let nextIndex;
    if (direction === "next") {
      nextIndex = currentIndex + 1;
      if (nextIndex >= selectedCourse.quiz.length) {
        nextIndex = 0;
      }
    } else {
      nextIndex = currentIndex - 1;
      if (nextIndex < 0) {
        nextIndex = selectedCourse.quiz.length - 1;
      }
    }
    setActiveTab(String(nextIndex + 1));
  };
  
  const handleQuestionClick = (tabIndex, optionIndex) => {
    setSelectedOption((prevSelectedOption) => ({
      ...prevSelectedOption,
      [tabIndex]: optionIndex,
    }));
    console.log(selectedOption)
    setUserAnswer((prevUserAnswer) => ({
      ...prevUserAnswer,
      [tabIndex +1]: selectedCourse.quiz[tabIndex].options[optionIndex],
    }));
    console.log(userAnswer)

  };

  const isBubbleActive = (tabIndex, optionIndex) => {
    return selectedOption[tabIndex] === optionIndex;
  };

  return (
    <div className="h-screen-9/10 w-screen bg-white rounded-t-3xl">
    <Indicator />
    <div >
    <>
      <div className={`flex ${selectedCourse.quiz.length > 6 ? "justify-start" : "justify-center"} items-center mx-7 mb-4 border-b-2 ${selectedCourse.quiz.length > 5 && "overflow-x-auto -x-auto"} `}>
        <ul
          className="flex -mb-px text-sm font-ubuntu space-x-6 border-gray-400 text-gray-400"
          id="myTab"
          role="tablist"
        >
          {selectedCourse.quiz.map((question, index) => (
            <li
              className={`flex-auto ${
                activeTab === `${index + 1}` ? 'border-blue-500' : ''
              }`}
              role="presentation"
              key={index}
            >
              <button
                className={`inline-block w-full py-4 px-2 border-b-2 border-transparent rounded-t-lg hover:text-blue-500 hover:border-blue-500 ${
                  activeTab === `${index + 1}` ? 'border-blue-500' : ''
                }`}
                id={`${index + 1}-tab`}
                onClick={() => handleTabClick(`${index + 1}`)}
                type="button"
                role="tab"
                aria-controls={`${index + 1}`}
                aria-selected={activeTab === `${index + 1}`}
              >
                <QuestionBubble
                  number={index + 1}
                  isActive={activeTab === `${index + 1}`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="myTabContent">
        {selectedCourse.quiz.map((question, index) => (
          <div
            className={`p-4 rounded-lg ${
              activeTab === `${index + 1}` ? '' : 'hidden'
            }`}
            id={`${index + 1}`}
            role="tabpanel"
            aria-labelledby={`${index + 1}-tab`}
            type="button"
            key={index}
          >
            <h1 className="font-semibold text-lg">
              {selectedCourse.quiz[index].question}
            </h1>
            {selectedCourse.quiz[index].options.map((option, optionIndex) => (
              <div
                className="flex pt-4 space-x-3"
                key={optionIndex}
                onClick={() => handleQuestionClick(index, optionIndex)}
              >
                <QuestionBubble
                  number={String.fromCharCode(65 + optionIndex)}
                  isActive={isBubbleActive(index, optionIndex)}
                />
                <h3 className="pt-2font-ubuntu pt-2">{option} </h3>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-5 item-end pt-40">
            <img className="  " src={blue_arrow}    onClick={() => handleArrowClick("previous")}/>
            <Link to="/">
            <button className="  w-[195px] h-[50px] bg-white rounded-lg border-[1px] text-sky-600 font-ubuntu text-lg border-blue-500">Submit Quiz</button>
            </Link>
            <img className=" "src={gray_arrow}    onClick={() => handleArrowClick("next")}/>
        </div>
    </>      
    </div>
    </div>
    
  )
}

export default QuizContent