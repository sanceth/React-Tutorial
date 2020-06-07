import React, { Component } from 'react'

export class ClickCounterRP extends Component {
    
    render() {
        const {count , incCount} = this.props
        return (
            <div>
                <button onClick={incCount}>Click {count} times</button>
            </div>
        )
    }
}

export default ClickCounterRP
