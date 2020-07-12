import React , {useState,useEffect}from 'react'
import UseEffectCleanUp from './UseEffectCleanUp'

function CleanupContainer() {
    let display = true;
    const [flag , setFlag] = useState(display)
    return (
        <div>
            <button onClick={() =>setFlag(!display)}>Toggle</button>
            {flag && <UseEffectCleanUp/>}
        </div>
    )
}

export default CleanupContainer
