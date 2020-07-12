import React, { useEffect, useState } from 'react'

function UseEffectRender() {
    const [cnt, setCnt] = useState(0)
    //  use effect method called after every render and initially loading.
    useEffect(() => {
        console.log(`count incremented ${cnt}`)
    })

    //  if we want to run useEffect only once at initially loading then pass empty array to use effect 
    // useEffect(() => {
    // }, [])  ===> this is same as class component componentDidMount lifecycle.

    // if want to run useEffect conditionally then pass parameters in array to useEffect on which value change you want to run useEffect.
     // useEffect(() => {
    // }, [cnt]) ===> this means useEffect will run after every cnt value change.
            //   ===> this is same as class component componentDidUpdate lifecycle.


    return (
        <div>
            <button onClick={() => setCnt(cnt + 1)}>{cnt}&nbsp;times click</button>
        </div>
    )
}

export default UseEffectRender
