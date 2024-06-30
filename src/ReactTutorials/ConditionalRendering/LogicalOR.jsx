import React from 'react'
import ComponentB from './ComponentB';

function LogicalOR() {

    const a = 10, b = 20;
    return (
        <div>
            {
                a < b ||
                <>
                    <h1>from Logical OR</h1>
                    <ComponentB />
                </>
            }
        </div>
    )
}

export default LogicalOR