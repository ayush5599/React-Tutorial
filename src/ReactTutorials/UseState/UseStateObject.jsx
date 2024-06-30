import React, { useState } from 'react'

function UseStateObject() {

    const [obj, setobj] = useState({
        name: 'Ayush',
        age: 20,
        courses: ['HTML', 'CSS'],
        info: {
            city: 'Pune',
            state: 'MH',
            arr1: [1000, 2000],
            contact: {
                Mobile: 1234567890,
                Email: 'ayush@gmail.com',
                arr2: ['a', 'b', 'c']
            }
        }
    })
    const handleChangeObject = () => {
        setobj(prevState => {
            return {
                ...prevState,
                name: 'Ayush Something',
                age: 25,
                courses: [...prevState.courses, 'JS'],
                info: {
                    ...prevState.info,
                    city: 'Jabalpur',
                    state: 'MP',
                    arr1: [...prevState.info.arr1, 3000],
                    contact: {
                        ...prevState.info.contact,
                        arr2: [...prevState.info.contact.arr2, 'd'],
                        Mobile: 987654321,
                        Email: 'ayushsoftronix@gmail.com'
                    }
                }
            }
        })
    }
    return (
        <div>
            <h1>{obj.name}</h1>
            <h1>{obj.age}</h1>
            <h1>{obj.info.city}</h1>
            <h1>{obj.info.state}</h1>
            <h1>{obj.info.contact.Mobile}</h1>
            <h1>{obj.info.contact.Email}</h1>
            <h1>{obj.courses}</h1>
            <h1>{obj.info.arr1}</h1>
            <h1>{obj.info.contact.arr2}</h1>
            <button onClick={handleChangeObject}>Change Object</button>
        </div>
    )
}

export default UseStateObject