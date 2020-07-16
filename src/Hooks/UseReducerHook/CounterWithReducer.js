import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    // return newState;
    switch (action) {
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        case 'res':
            return initialState
    }
}

function CounterWithReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>
                Count - {count}
            </div>
            <button onClick={() => dispatch('inc')}>Increment</button>
            <button onClick={() => dispatch('dec')}>Decrement</button>
            <button onClick={() => dispatch('res')}>Reset</button>

        </div>
    )
}

export default CounterWithReducer
