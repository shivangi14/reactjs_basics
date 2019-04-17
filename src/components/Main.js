import React,{Component} from "react"

import MyInfo from "./MyInfo"
import Joke from "./Joke"
import jokesData from "./jokesData"

class Main extends Component{
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
        return(
                <main>
                    <MyInfo />
                    {mappedJokes}
                </main>
            )
    }
}

export default Main