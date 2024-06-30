import React from 'react'

function JSX5() {

  const something = 'Ayush'
  const a = 10, b = 20;

  const somefuction = () => {
    if (a > b) {
      return(
      <h1>Ayush from If statement</h1>
      )
    } else {
      return (
        <h1>AYUSH from else Statement</h1>
      )
   }
  }
  const today = new Date();
  return (
    <div>
      <h1>{something}</h1>
      {
        somefuction()
      }
      <h1>{today.toString()}</h1>
      <h1>{Date.now()}</h1>
    </div>
  )
}

export default JSX5