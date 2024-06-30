import React from 'react'

// ARRAY
function JSX2() {

    const arr = [100, 200, 300, 400, 500]
    
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
          <h1>{arr}</h1>
          <h1>
              {
                  arr.map((val, i) =>
                          (`    ${val}
                                ${i === arr.length - 1 ? '. ' : ', '} 
                          `)
                  )
              }
          </h1>

          {
              arr.map((val, i) =>
                  <h1 key={i}>
                      {val}{i===arr.length-1?'. ':', '}
                  </h1>
            )
          }

    </div>
  )
}

export default JSX2