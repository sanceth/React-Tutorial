import React, { Component } from 'react'

export class EventBinding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "Hello"
        }

        this.changeMsg = this.changeMsg.bind(this)

    }

    // arrow function 
    changeMsg = () => {
        this.setState({
            msg: "Good Bye!"
        })
    }

    // normal function
    // changeMsg () {
    //     this.setState({
    //         msg: "Good Bye!"
    //     })
    // }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1> 

                {/* use below three when handler function is normal function not arrow function */}
                {/* using arrow function in jsx */}
                {/* <button onClick={() => this.changeMsg()}>Click</button>  */}

                {/* using bind method*/}
                {/* <button onClick={this.changeMsg.bind(this)}>Click</button>  */}

                {/* bind in constructor */}
                {/* <button onClick={this.changeMsg}>Click</button>  */}

                {/* otherwise make handler function a arrow function */}
                <button onClick={this.changeMsg}>Click</button> 

            </div>
        )
    }
}

export default EventBinding
