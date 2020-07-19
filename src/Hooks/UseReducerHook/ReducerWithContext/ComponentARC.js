import React, { useContext } from 'react'
import { StudentContext } from '../../../App'
function ComponentARC() {
    const studentContext = useContext(StudentContext)
    return (
        <div>
            COUNT  : {studentContext.countState}
            <button onClick={() => studentContext.countDispatch('inc')}>Increment</button>
            <button onClick={() => studentContext.countDispatch('dec')}>Decrement</button>
            <button onClick={() => studentContext.countDispatch('res')}>Reset</button>
        </div>
    )
}

export default ComponentARC
