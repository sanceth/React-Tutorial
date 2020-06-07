import React from 'react'
import ReactDOM from 'react-dom'

function Portals() {
    return ReactDOM.createPortal(
        <div>
            <h1>Portal Demo</h1>
        </div>,
        document.getElementById('react-portal')
    )
}

export default Portals
