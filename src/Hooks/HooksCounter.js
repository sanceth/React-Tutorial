import React , {useState}from 'react'

function HooksCounter() {
    const [count , IncCount] = useState(2)
    return (
        <div>
            <button onClick={() => IncCount(number => number + 1)}>Add &nbsp;{count}</button>
            <button onClick={() => IncCount(count - 1)}>Sub&nbsp;{count}</button>
        </div>
    )
}

export default HooksCounter
