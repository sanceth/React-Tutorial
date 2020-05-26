import React, { Component } from 'react'

export class Refs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.nameRef = React.createRef()
        this.cbRef = null
        this.setRef = element =>{
            this.cbRef = element
        }
    }

    focusInp = () =>{
        console.log("nameRef",this.cbRef.value)
        this.cbRef.focus()
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.setRef} ></input>
                <button onClick={this.focusInp}>Click</button>
            </div>
        )
    }
}

export default Refs
