import React, { useReducer } from 'react'
const initialState = {
    fcnt: 0,
    lcnt: 0
}

const reducer = (state, action) => {
    console.log("state", state)
    console.log("action", action)
    switch (action.type) {
        case 'inc':
            return { ...state,fcnt: state.fcnt + action.val }
        case 'linc':
            return { ...state,lcnt: state.lcnt + action.val }
        case 'reset':
            return initialState
    }
}

function MultipleReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Count First - {count.fcnt}</h1>
            <button onClick={() => dispatch({ type: 'inc', val: 5 })}>INcrement F 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            <h1>Count Two  - {countTwo.lcnt}</h1>
            <button onClick={() => dispatchTwo({ type: 'linc', val: 10 })}>INcrement L 10</button>
            <button onClick={() => dispatchTwo({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default MultipleReducer
