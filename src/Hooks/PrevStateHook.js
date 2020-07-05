import React , {useState}from 'react'

function PrevStateHook() {
    const initialCount = 0
    const [count , IncCount] = useState(initialCount)
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => IncCount(number => number + 1)}>Add</button>
            <button onClick={() => IncCount(prev => prev - 1)}>Sub</button>
            <button onClick={() => IncCount(count + 5)}>Inc 5</button>
            <button onClick={() =>IncCount(initialCount)}>Reset</button>
        </div>
    )
}

export default PrevStateHook
