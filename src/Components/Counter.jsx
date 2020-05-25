import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cnt: 0
        }
    }
    changeCnt = (call) => {
        // if (call == 1) {
        //     this.setState({
        //         cnt: this.state.cnt + 1
        //     })
        // } else {
        //     this.setState({
        //         cnt: this.state.cnt - 1
        //     })
        // }

        if(call == 1){
          this.setState( (prevState) =>({
            cnt : prevState.cnt + 1
          }),
          () =>{
              console.log("stat chnage",this.state.cnt)
          })
        }else{
            this.setState( (prevState) =>({
                cnt : prevState.cnt - 1
            }))
        }
    }

    incFive = () =>{
        this.changeCnt(1)
        this.changeCnt(1)
        this.changeCnt(1)
        this.changeCnt(1)
        this.changeCnt(1)
    }

    render() {
        let cnt = this.state.cnt
        return (<>
            <h1>&nbsp;{cnt}</h1>
            <button onClick={() => this.changeCnt(1)} >Click To Increase</button>
            <button onClick={() => this.changeCnt(2)} >Click To Decrease</button>
            <button onClick={this.incFive}>Five</button>
        </>)
    }
}

export default Counter