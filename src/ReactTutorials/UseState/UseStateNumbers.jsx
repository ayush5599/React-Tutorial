import React, { useState } from 'react'

function UseStateNumbers() {
    //State Variable
    const [age, setage] = useState(10)

    console.log('component rendered');
    function changeAge() {
        //setter function call


        setage(+ 10)
        setage(age + 5)
        // console.log();
    }
    return (
        <div>
            <h1>{age}</h1>
            <button onClick={changeAge}>Change Age</button>
        </div>
    )
}

export default UseStateNumbers