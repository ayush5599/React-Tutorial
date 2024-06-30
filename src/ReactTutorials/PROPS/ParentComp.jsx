import React from 'react'
import CompA from './CompA'
import CompB from './CompB'

function ParentComp() {
    const a = 20
    const b = 30
    const name = "AYUSH"
    const age = 20
    const obj = {
        state: "MH",
        city: 'Nagpur'
    }
    const arr = [1, 2, 3, 4, 5]

    return (
        // <div>
        //     {/* {props Sending/Passing} */}
        //     <CompA
        //         a={a}
        //         b={b}
        //         name={name}
        //         age={age}
        //         obj={obj}
        //         arr={arr}
        //         placeholder="My name is AYUSH"
        //     />
        //     <CompB
        //         a={a}
        //         b={b}
        //         name={name}
        //         age={age}
        //         obj={obj}
        //         arr={arr}
        //         placeholder="My name is AYUSH" />
        {/* props passing/sending */ }
        < CompCDefaultValues
                         num1 = { a }
    b = { b }
    name = { name }
    //   img = { img }
    age = { age }
    conurses = { conurses }
    info = { info }
    address = { address }
        />
        </div >
    )
}

export default ParentComp