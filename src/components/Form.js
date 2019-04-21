import React,{Component} from "react"

class Form extends Component{
    constructor(){
        super()
        this.state={
            name :"",
            age :"",
            gender :"",
            color : "",
            diet:{
                veg:false,
                nonVeg:false,
                egg:false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value,checked,type} = event.target
        type === "checkbox"? this.setState(prevState=>{
            return{
                diet:{
                    ...prevState.diet,
                    [name] : checked
                }
            }
        }) : this.setState({[name] : value})

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
                choose diet<br/>
                <input type="checkbox" checked={this.state.diet.veg} name="veg" onChange={this.handleChange} />veg
                <br/>
                <input type="checkbox" checked={this.state.diet.nonVeg} name="nonVeg" onChange={this.handleChange} />non veg
                <br/>
                <input type="checkbox" checked={this.state.diet.egg} name="egg" onChange={this.handleChange} />egg
                <br/>
                Gender 
                <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} />Male
                <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange} />Female
                <br/>
                Fav color <select value={this.state.color} name="color" onChange={this.handleChange}>
                    <option value="">Select your color</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                </select>
                <br/>
                <button>Submit</button>
                <br/>
                Data you submitted-
                <br/>
                your name : {this.state.name}<br/>
                your age : {this.state.age}<br/>
                gender : {this.state.gender}<br/>
                diet : {this.state.diet.veg && "veg"} {this.state.diet.nonVeg && "non veg"} {this.state.diet.egg && "egg"}<br/>
                fav color : {this.state.color}<br/>
                <hr/>
            </form>
        )
    }
}

export default Form