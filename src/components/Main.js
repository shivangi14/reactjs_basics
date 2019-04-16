import React from "react"

import MyInfo from "./MyInfo"
import Joke from "./Joke"
import jokesData from "./jokesData"

function Main(){
    const jokesComponents = jokesData.map(joke => {
        const data = <div key={joke.id}>
                        <Joke question={joke.question} punchLine={joke.punchLine} />
                        <p>next...</p>
                     </div>
        return data
    })
    return(
        <main>
            <MyInfo />
            {jokesComponents}
        </main>
    )
}

export default Main