import React from "react"
import ReactDOM from "react-dom"
import Info from "./Components/Info.js"
import About from "./Components/About.js"
import Interest from "./Components/Interest.js"
import Footer from "./Components/Footer.js"


export default function App () {
    
    return(
        
        <div className="container">
        
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
        
    )
}


ReactDOM.render(<App />, document.getElementById("root"))