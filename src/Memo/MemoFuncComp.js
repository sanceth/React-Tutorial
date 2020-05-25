import React from 'react'

//  when we use pure class component then it implements shouldComponentUpdate methods and do shallow comparison and rerender component if there is diff between prev prop, next prop and prev state , next state
//  if we want this feature then we have to use memo . memo takes component as paramter and return a enhanced component memo add something to component and return component
function MemoFuncComp({name}) {
    console.log("functiional comp render")
    return (
        <div>
            functiona comp 
        </div>
    )
}

export default React.memo(MemoFuncComp)
