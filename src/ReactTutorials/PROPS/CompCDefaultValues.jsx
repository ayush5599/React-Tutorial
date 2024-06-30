import React from 'react'

function CompCDefaultValues(props) {

    const { num1, b, name = 'Something', img, age, conurses, info: { city: infoCity, state: infoState }, address: { city, state } } = props
    return (
        <div>
            <h1>{num1}</h1>
            <h1>{b}</h1>
            <h1>{name}</h1>
            <h1>{img}</h1>
            <h1>{age}</h1>
            <h1>{conurses}</h1>
            <h1>{city}</h1>
            <h1>{state}</h1>
            <h1>{infoCity}</h1>
            <h1>{infoState}</h1>
        </div>
    )
}

export default CompCDefaultValues