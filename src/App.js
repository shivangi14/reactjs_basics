import React,{Component} from "react"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

/*
function App(){
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
*/

class App extends Component{
    constructor(){
        super()
        this.state = {copyright : "Shivangi incorp."}
    }
    render(){
        return(
            <div>
                <Header />
                <Main />
                <Footer />
                <span>{this.state.copyright}</span>
            </div>
        )
    }
}

 export default App