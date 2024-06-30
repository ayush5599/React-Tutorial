import React from 'react'

function CompB(props) {
    // props will be an object
    // props destructuring

    const { a, b, name, age, arr, obj, state, city, placeholder } = props

    return (
        <div>
            {/* {props Consuming} */}
            <h1>{a}</h1>
            <h1>{b}</h1>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{arr}</h1>
            <h1>{obj.state}</h1>
            <h1>{obj.city}</h1>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

export default CompB