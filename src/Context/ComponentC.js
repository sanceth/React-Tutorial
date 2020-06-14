import React, { Component } from 'react'
import { UserConsumer } from './context'

 class ComponentC extends Component {
    render() {
        return (
                <UserConsumer>
                    {
                        (name) => {
                            return <h1>Component C {name}</h1>
                        }
                    }
                </UserConsumer>
        )
    }
}

export default ComponentC
