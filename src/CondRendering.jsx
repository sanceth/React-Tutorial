import React, { Component } from 'react'

export class CondRendering extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    logIn = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        // if else rendering
        // if (this.state.isLoggedIn) {
        //     return <h1>Welcome Sanket</h1>
        // } else {
        //     return <h1>Welcome Guest</h1>
        // }

        //  element variable rendering
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <h1>Welcome Sanket</h1>
        // } else {
        //     message = <h1>Welcome Guest</h1>
        // }
        // return <div>{message}</div>

        // ternary conditional operator rendering
        return (
            <div>
                {this.state.isLoggedIn ?
                    (<div>
                        <h1>Hello Sanket</h1>
                        <h5>How Are You</h5>
                    </div>) :
                    (<h1>Hello Guest</h1>)}
                <button onClick={this.logIn}>Log In</button>
            </div>
        )

        // short circuit operator rendering
        // return this.state.isLoggedIn && <h1>Hello Sanket</h1>

    }
}

export default CondRendering
