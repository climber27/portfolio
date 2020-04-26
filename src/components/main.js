import React from "react"

import Title from "./title"
import About from "./about"
import Projects from  "./projects"
import Footer from "./footer"

const Main = () => {
  
  return (
    <div class="ui container">
      {/* <div class="ui internally celled grid"> */}
      <div class="ui grid">
        <Title />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default Main
