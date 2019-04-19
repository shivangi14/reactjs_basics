import React from "react"

class MyInfo extends React.Component{
    constructor(){
        super()
        this.state = {value :0,
            isLoading : false,
            character : {}
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
            this.setState({isLoading : true})
            fetch("https://swapi.co/api/people/1")
                .then(response => response.json())
                .then(data => this.setState(
                    {
                        isLoading : false,
                        character : data
                    }
                ))
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
                <h1>{this.state.isLoading?"Searching galaxy for hero..." : "hero is - " + this.state.character.name}</h1>
                <span><button onClick={this.handleClick}>Click me!</button> You have already clicked me {this.state.value} times!</span>
            </div>
          )
    }

}

export default MyInfo
