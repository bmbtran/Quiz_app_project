// import React from 'react'
// import grayCircle from "../assets/grayCircle.png"
// import blueCircle from "../assets/blueCircle.svg"
// function QuestionBubble(props) {
//   return (
//     <div className='relative w-10'>
//         <img className='w-100' src={grayCircle}  />
//         <h1 className="absolute font-bold text-white top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2">
//             {props.number}</h1>
//     </div>
//   )
// }

// export default QuestionBubble


// import React, { useState } from 'react';
// import grayCircle from '../assets/grayCircle.png';
// import blueCircle from '../assets/blueCircle.svg';

// function QuestionBubble(props) {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(true);
//   };

//   return (
//     <div className='relative w-10' onClick={handleClick}>
//       <img className='w-100' src={isClicked ? blueCircle : grayCircle} alt='circle' />
//       <h1 className='absolute font-bold text-white top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2'>
//         {props.number}
//       </h1>
//     </div>
//   );
// }

// export default QuestionBubble;



// import React, { useState } from 'react';
// import grayCircle from '../assets/grayCircle.png';
// import blueCircle from '../assets/blueCircle.svg';

// function QuestionBubble(props) {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive(true);
//     props.onClick(props.index);
//   };

//   return (
//     <div className='relative w-10' onClick={handleClick}>
//       <img className='w-100' src={isActive ? blueCircle : grayCircle} alt='circle' />
//       <h1 className='absolute font-bold text-white top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2'>
//         {props.number}
//       </h1>
//     </div>
//   );
// }

// export default QuestionBubble;







// import React, { useState } from 'react';
// import grayCircle from '../assets/grayCircle.png';
// import blueCircle from '../assets/blueCircle.svg';

// function QuestionBubble(props) {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive(true);
//     props.onClick(props.index);
//   };

//   return (
//     <div className='relative w-10' onClick={handleClick}>
//       <img className='w-100' src={isActive ? blueCircle : grayCircle} alt='circle' />
//       <h1 className='absolute font-bold text-white top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2'>
//         {props.number}
//       </h1>
//     </div>
//   );
// }

// export default QuestionBubble;














// import React from 'react';
// import grayCircle from '../assets/grayCircle.png';
// import blueCircle from '../assets/blueCircle.svg';

// function QuestionBubble(props) {
//   return (
//     <div className="relative w-10">
//       <img
//         className="w-100"
//         src={props.isActive ? blueCircle : grayCircle}
//         alt=""
//       />
//       <h1 className="absolute font-bold text-white top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2">
//         {props.number}
//       </h1>
//     </div>
//   );
// }

// export default QuestionBubble;


import React from 'react';
import grayCircle from '../assets/grayCircle.png';
import blueCircle from '../assets/blueCircle.svg';

function QuestionBubble(props) {
  return (
    <div className="relative w-10">
      <img
        className="w-100"
        src={props.isActive ? blueCircle : grayCircle}
        alt=""
      />
      <h1 className="absolute font-bold text-white top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2">
        {props.number}
      </h1>
    </div>
  );
}

export default QuestionBubble;