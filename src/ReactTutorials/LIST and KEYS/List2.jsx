import React from 'react'

function List2() {

    const users = [
        {username: 'Nikhil', userId:1},
        {username: 'Ayush1', userId:2},
        {username: 'Manthan', userId:3},
        {username: 'Ayush2', userId:4},
        {username: 'Vedant', userId:5},
        {username: 'Sourabh', userId:6},
        {username: 'Sajal', userId:7},
        {username: 'Tejaswini', userId:8},
    ]
  return (
      <div>
        {/* {
          users.map((val, i) => (
              <div key={i}>
                  <h2>{val.username}</h2>
                  <p>{val.userId}</p>
                </div>
        ))
          } */}

       {/* {
          users.map((val, i) => (
              <>
                  <h2>{val.username}</h2>
                  <p>{val.userId}</p>
            </>
        ))
          }  */}
          
          {
          users.map((val, i) => (
              <React.Fragment key={i}>
                  <h2>{val.username}</h2>
                  <p>{val.userId}</p>
                </React.Fragment>
        ))
          }
             
    </div>
  )
}

export default List2