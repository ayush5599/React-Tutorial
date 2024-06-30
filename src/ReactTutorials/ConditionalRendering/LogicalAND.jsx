import React from 'react'
import ComponentA from './ComponentA';

function LogicalAND() {

    const a = 10, b = 20;
    return (
        <div>
            {
                a < b &&
                <>
                    <h1>from LogicalAND</h1>
                    <ComponentA />
                </>
            }
        </div>
    )
}

export default LogicalAND