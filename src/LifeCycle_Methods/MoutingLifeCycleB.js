import React, { Component } from 'react'

export class MoutingLifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Zende'
        }

        console.log("LifeCycleB constructor")
    }

    static getDerivedStateFromProps = (props,state) =>{
        console.log("LifeCycleB getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleB componentDidMount")
    }

    shouldComponentUpdate(prevProps,prevState) {
        console.log("LifeCycleB shouldComponentUpdate",prevProps,prevState)
        // if(prevState.name == "SANKET"){
        //     alert("wrong credentilas")
        // return false
        // }
        // else {return true}
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleB getSnapshotBeforeUpdate",prevProps,prevState)
        return null
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("LifeCycleB componentDidUpdate",prevProps,prevState,snapshot)
    }

    changeName = () =>{
        this.setState({
            name : 'SANKET'
        })
    }
    
    render() {
        console.log("LifeCycleB render")
        return (
            <div>
               <h1>Mounting LifeCycle {this.state.name}</h1>
                <button onClick={this.changeName}>Click</button>
            </div>
        )
    }
}

export default MoutingLifeCycleB
