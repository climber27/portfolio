import React from "react"

import Title from "./title"
import About from "./about"
import Portfolio from  "./portfolio"

const Main = () => {
  
  return (
    <div class="ui container">
      {/* <div class="ui internally celled grid"> */}
      <div class="ui grid">
        <Title />
        <About />
        <Portfolio />
      </div>
    </div>
  )
}

export default Main
