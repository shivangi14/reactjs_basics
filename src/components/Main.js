import React from "react"

import MyInfo from "./MyInfo"
import Joke from "./Joke"
import jokesData from "./jokesData"

function Main(){
    return(
        <main>
            <MyInfo />
            <Joke
                punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally."
            />

            <Joke
                question="What's the best thing about Switzerland?"
                punchLine="I don't know, but the flag is a big plus!"
            />

             <Joke
                 question="Did you hear about the mathematician who's afraid of negative numbers?"
                 punchLine="He'll stop at nothing to avoid them!"
             />
        </main>
    )
}

export default Main