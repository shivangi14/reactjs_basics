import React from "react"

import MyInfo from "./MyInfo"
import Joke from "./Joke"
import jokesData from "./jokesData"

function Main(){
    const jokesComponents = jokesData.map(joke => {
        return <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
    })
    return(
        <main>
            <MyInfo />
            {jokesComponents}
        </main>
    )
}

export default Main