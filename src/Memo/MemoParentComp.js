import React, { Component } from 'react'
import MemoFuncComp from './MemoFuncComp'

export class MemoParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'sanket'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name : 'sanket'
            })
        })
    }
    
    render() {
        console.log("parent comp render")
        return (
            <div>
                Memo parent comp
                <MemoFuncComp name={this.state.name}/>
            </div>
        )
    }
}

export default MemoParentComp
