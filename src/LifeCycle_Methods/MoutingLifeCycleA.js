import React, { Component } from 'react'
import MoutingLifeCycleB from './MoutingLifeCycleB'

export class MoutingLifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Sanket'
        }

        console.log("LifeCycleA constructor")
    }

    static getDerivedStateFromProps = (props, state) => {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate")
    }

    changeName = () =>{
        this.setState({
            name : 'zende'
        })
    }

    render() {
        console.log("LifeCycleA render")
        let {name} = this.state
        return (
            <div>
                <h1>Mounting LifeCycle {name}</h1>
                <button onClick={this.changeName}>Click</button>
                <MoutingLifeCycleB></MoutingLifeCycleB>
            </div>
        )
    }
}

export default MoutingLifeCycleA
