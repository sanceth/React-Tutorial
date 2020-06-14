import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './context'

 class ComponentB extends Component {
     static contextType = UserContext
    render() {
        return (
            <div>
                <h1>Component B Context {this.context}</h1>
                <ComponentC/>
            </div>
        )
    }
}

export default ComponentB
