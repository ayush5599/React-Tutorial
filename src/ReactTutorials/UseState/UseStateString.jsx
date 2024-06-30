import React, { useState } from 'react'

function UseStateString() {
    //State Variable
    const [name, setName] = useState('AYUSH')

    function changeName() {
        //setter function call
        //updates the state of name variable to 'abc'
        setName('abc')
        console.log(name);
    }
    console.log(name);
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}


export default UseStateString