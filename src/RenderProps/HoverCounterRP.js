import React, { Component } from 'react'

export class HoverCounterRP extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count : 0
    //     }
    // }

    // incCount = () =>{
    //     this.setState(prevState =>{
    //         return {count : prevState.count+1}
    //     })
    // }
    
    render() {
        const {count , incCount} = this.props
        return ( 
            <div>
                <h1 onMouseOver={incCount}>Click {count} times</h1>
            </div>
        )
    }
}

export default HoverCounterRP
