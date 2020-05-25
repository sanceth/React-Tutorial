import React, { Component } from 'react'

export class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             msg : '',
             age : ''
        }
    }
    
    changeName = (event) =>{
        this.setState({
            name : event.target.value
        })
    }

    changeMsg = (event) =>{
        this.setState({
            msg : event.target.value
        })
    }

    submitFormData = () =>{
        alert(`inputs are ${this.state.name} ${this.state.msg}`)
    }

    render() {
        let {name,msg,age} = this.state
        return (
            <div>
                <h1>Form Handling</h1>
                <div>
                    <input type="text" value={name} placeholder="name" onChange={this.changeName}></input>
                </div>
                <div>
                    <textarea type="text" value={msg} placeholder="name" onChange={this.changeMsg}></textarea>
                </div>
                <button className="btn btn-primary" onClick={this.submitFormData}>Submit</button>
            </div>
        )
    }
}

export default FormHandling
