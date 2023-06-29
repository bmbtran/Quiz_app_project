import React from 'react'
import Card from "./Card.jsx"   

function TabContent(props) {
  return (
    <div
          className={`p-4 rounded-lg  ${
            props.activeTab === props.category ? '' : 'hidden'
          }`}
          id= {props.category}
          role="tabpanel"
          aria-labelledby= {`${props.category}-tab`}
        >
          <div className="grid grid-cols-1 gap-4 ">
      
            {props.filteredData.map((course) => (
              <Card  key={course.id} course={course} />
            ))}
          </div>
        </div>
)}

export default TabContent