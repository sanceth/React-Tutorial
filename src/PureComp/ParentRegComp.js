import React, { Component , PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

 class ParentRegComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'sanket'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name : 'sanket'
            })
        },2000)
    }

    render() {
        console.log("parentComp")
        return (
            <div>
                parentComp
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentRegComp
