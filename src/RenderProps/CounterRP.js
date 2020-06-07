import React, { Component } from 'react'

export class CounterRP extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                {this.props.render(count , this.incCount)}
            </div>
        )
    }
}

export default CounterRP
