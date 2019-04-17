import React from "react"

class MyInfo extends React.Component{
    constructor(){
        super()
        this.state = {value :0}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState =>{
            return {
                value : prevState.value +1
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Shivangi Agarwal</h1>
                <p>Tech enthusiast</p>
                <span><button onClick={this.handleClick}>Click me!</button> You have already clicked me {this.state.value} times!</span>
            </div>
          )
    }

}

export default MyInfo
