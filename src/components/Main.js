import React,{Component} from "react"

import MyInfo from "./MyInfo"
import Joke from "./Joke"
import jokesData from "./jokesData"
import Form from "./Form"

class Main extends Component{
    constructor(){
        super()
        this.state = {isLoading : true  }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState(
                {isLoading :false}
            )
        },2000)
    }

    mapJokes(){
        const jokesComponents = jokesData.map(joke => {
                const data = <div key={joke.id}>
                                <Joke question={joke.question} punchLine={joke.punchLine} />
                                <p>next...</p>
                             </div>
                return data
            })
        return jokesComponents
    }

    render(){
        let mappedJokes = this.mapJokes()
        let newJokes = []
        return(
                <main>
                    <MyInfo />
                    <Form />
                    {this.state.isLoading? <h2>Wait! Loading Laughter...</h2> : mappedJokes}
                    {newJokes.length > 0 && <h3>You have {newJokes.length} new jokes! </h3>}
                </main>
            )
    }
}

export default Main