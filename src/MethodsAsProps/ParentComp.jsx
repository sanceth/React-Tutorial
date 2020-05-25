import React, { Component } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {
    constructor(props){
        super(props)
        // this.showAlert = this.showAlert.bind(this)
    }

    showAlert() {
        alert("Click from child")
    }

    render() {
        return (
            <div>
                <ChildComp handler={this.showAlert}/>
            </div>
        )
    }
}

export default ParentComp
