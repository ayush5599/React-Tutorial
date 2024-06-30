import React from 'react'

function JSX3() {

     const obj = {
        name: 'AYUSH',
        age: 5000,
        info: {
            city: 'Nagpur',
            state: 'MH',
            courses:['C','C++','java','python']
        }
    }

  return (
      <div>
          <h1>{obj.name}</h1>
          <h2>Age: {obj.age}</h2>
          <h3>City: {obj.info.city}</h3>
          <h3>State: {obj.info.state}</h3>
          <h3>Courses: {obj.info.courses[0]}</h3>
          <h3>Courses: {obj.info.courses[1]}</h3>
          <h3>Courses: {obj.info.courses[2]}</h3>
          <h3>Courses: {obj.info.courses[3]}</h3>
    </div>
  )
}

export default JSX3