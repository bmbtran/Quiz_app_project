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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      
            {props.filteredData.map((course) => (
              <Card  key={course.id} course={course} />
            ))}
          </div>
        </div>
)}

export default TabContent