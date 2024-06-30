import React from 'react'

function JSX4() {
    const handleKeypress = () => {
        console.log('You pressed a key!');
    }
    const handleclick = () => {
        console.log('You clicked the button!');
    }

  return (
      <div>
          <br />
          <input
              onKeyUp={handleKeypress}
              type="text"
              placeholder='type here'
          />
          <br />
          <br />
          <button onClick={handleclick}> Click </button>
    </div>
  )
}

export default JSX4