import React, { Component } from 'react'

export class ChildRefComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    focusref = () =>{
        console.log("forwarded ref",this.props,this.props.forref.current.value)
        this.props.forref.current.focus()
    }
    
    render() {
        return (
            <div>
                <button onClick={this.focusref}>Focus</button>
            </div>
        )
    }
}

export default ChildRefComp
