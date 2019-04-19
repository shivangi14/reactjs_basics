import React,{Component} from "react"

class Form extends Component{
    constructor(){
        super()
        this.state={
            name :"",
            age :""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return(
            <form>
                <input type="text" placeholder="Enter your name" value={this.state.name} name="name" onChange={this.handleChange}/>
                <input type="text" placeholder="Enter your age" value={this.state.age} name="age" onChange={this.handleChange}/>
                You are typing {this.state.name} {this.state.age}
            </form>
        )
    }
}

export default Form