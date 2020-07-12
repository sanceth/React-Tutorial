import React, {useState , useEffect} from 'react'

function UseEffectCleanUp() {
    const [x , setX] = useState(0)
    const [y , setY] = useState(0)

    const logPosition = (e) =>{
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
       console.log("in useEfect")
       window.addEventListener('mousemove', logPosition) //

       // this is same as class component ComponentWillUnmount lifecycle
       return () =>{
           console.log("in componet unmount")
           window.removeEventListener('mousemove',logPosition)
       }
    }, [])
    return (
        <div>
            <span>X : {x}</span>&nbsp;<span>Y : {y}</span>
        </div>
    )
}

export default UseEffectCleanUp
