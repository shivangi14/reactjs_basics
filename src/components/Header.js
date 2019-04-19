import React from "react"

class Header extends React.Component{
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        if(hours<12)
            timeOfDay = "Morning"
        else if (hours >=12 && hours<16)
            timeOfDay = "Afternoon"
        else
            timeOfDay = "Evening"
        return (
            <header>
                <h1>Hello. Good {timeOfDay}!</h1>
            </header>
        )
    }

}

export default Header