import React, { Component } from 'react'

const HocCounter = (WrappedComponent) => {
    class HocCounters extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            const {count} = this.state
            return <WrappedComponent count={count} incrementCount={this.incrementCount}/>
        }
    }
    return HocCounters
}

export default HocCounter
