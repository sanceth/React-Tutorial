import React, { Component } from 'react'

/* 
Class Component Rendering
*/
export class ListRendering extends Component {
    names = ['sanket', 'mangesh', 'zende']
    nameList = this.names.map(name => <h1 key={name}>{name}</h1>)
    render() {
        return (
            <div>
                {this.nameList}
            </div>
        )
    }
}
export default ListRendering
