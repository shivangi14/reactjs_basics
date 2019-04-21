import React,{Component} from "react"

class Form extends Component{
    constructor(){
        super()
        this.state={
            name :"",
            age :18,
            isPerson :false,
            gender :"",
            color : "green"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value,checked,type} = event.target
        type === "checkbox"? this.setState({ [name]:checked}) : this.setState({[name] : value})

    }

    handleSubmit(){
        console.log(this.state)
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <hr/>
                <input type="text" placeholder="Enter your name" value={this.state.name} name="name" onChange={this.handleChange}/>
                <br/>
                <input type="number" placeholder="Enter your age" value={this.state.age} name="age" onChange={this.handleChange}/>
                <br/>
                <input type="checkbox" checked={this.state.isPerson} name="isPerson" onChange={this.handleChange} />Are you a person?
                <br/>
                <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} />Male
                <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange} />Female
                <br/>
                Fav color <select value={this.state.color} name="color" onChange={this.handleChange}>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                </select>
                <button>Submit</button>
                <hr/>
            </form>
        )
    }
}

export default Form