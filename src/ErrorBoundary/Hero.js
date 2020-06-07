import React from 'react'
import HocCounter from '../HOC/HocCounter'

 function Hero({hname,count,incrementCount}) {
     if(hname == 'Zende'){
         throw new Error("No Hero")
     }
    return (
        <div>
            {hname}<br></br>
            Count : {count}<br></br>
            <button onClick={incrementCount}> Click Count</button> <br></br>
        </div>
    )
}

export default HocCounter(Hero)
