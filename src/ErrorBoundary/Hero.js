import React from 'react'

 function Hero({hname}) {
     if(hname == 'Zende'){
         throw new Error("No Hero")
     }
    return (
        <div>
            {hname}
        </div>
    )
}

export default Hero
