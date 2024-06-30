// import React from 'react'

function JSX1() {

    const name = 'Ayush';
    const age = 5000;
    const placeholder = 'My name is AYUSH';
    const textcolor = 'red'

  return (
      <div>
          <h1 style={{color:textcolor}}>{name}</h1>
          <h2>My name is {name} and I am {age} old</h2>
          <input type="text" placeholder={placeholder} />
          <img src="" width={'200px'} alt="" />
    </div>
  )
}

export default JSX1