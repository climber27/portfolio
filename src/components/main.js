import React from "react"

import Title from "./title"
import Projects from  "./projects"
import Footer from "./footer"

const Main = () => {
  
  return (
    <div class="ui container">
      <div class="ui internally celled grid">
        <Title />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default Main
