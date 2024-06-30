import React from 'react'

function List1() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      { 
        arr.map((val, i) => (
          <h1>{val}</h1>
        ))
      }
      <h1>------------------------------</h1>
      <h1>{ arr.map((val,i)=>(`${val}, `))}</h1>
    </div>
  )
}

export default List1