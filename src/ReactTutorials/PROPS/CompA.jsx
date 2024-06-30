import React from 'react'

function CompA(props) { // props Receiving
    return (
        <div>
            {/* {props Consuming} */}
            <h1>{props.a}</h1>
            <h1>{props.b}</h1>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.arr}</h1>
            <h1>{props.obj.state}</h1>
            <h1>{props.obj.city}</h1>
            <input type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default CompA