import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button onClick={props.handler}>Click</button>
        </div>
    )
}

export default ChildComp
