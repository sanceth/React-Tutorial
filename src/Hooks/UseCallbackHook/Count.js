import React from 'react'

function Count({number , text}) {
    console.log(`rendring count ${text}`)
    return (
        <div>
            {text} - {number}
        </div>
    )
}

export default Count
