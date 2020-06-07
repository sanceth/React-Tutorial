import React, { Component } from 'react'
import ChildRefComp from './ChildRefComp'

export class ParentRefComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.focusRef = React.createRef()
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.focusRef}></input>
                <ChildRefComp forref={this.focusRef}/>
            </div>
        )
    }
}

export default ParentRefComp
