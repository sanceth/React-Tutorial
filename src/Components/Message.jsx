import React, { Component } from 'react'

class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : 'Welcome Visitor'
        }
    }
     changeName = () =>{
        this.setState({
           name : 'Thank For Visiting',
        })
    }
    render() {
        let name = this.state.name
        return (<>
            <h1>&nbsp;{name}</h1>
            <button onClick={() => this.changeName()} >Click To Change</button>
        </>)
    }
}

export default Message