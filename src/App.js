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
        this.state = {copyright : "Shivangi incorp.",
            isLoggedIn : false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState =>{
            return{
                copyright : "Shivangi incorp.",
                isLoggedIn : !prevState.isLoggedIn
            }
        })
    }

    render(){
        return(
            <div>
                <span>
                    <p>User is {this.state.isLoggedIn?"logged in":"logged out"}</p>
                    <button onClick={this.handleClick}>{this.state.isLoggedIn?"Logout":"Login"}</button>
                </span>
                <Header />
                <Main />
                <Footer />
                <span>{this.state.copyright}</span>
            </div>
        )
    }
}

 export default App