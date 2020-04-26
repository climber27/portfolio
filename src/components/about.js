import React from "react"
import scientist from "../images/data-scientist.svg"

const About = () => {

    return (
        <>
            <div class="row">
                <div class="two wide column"></div>
                <div class="twelve wide column">
                    <h3 class=" ui horizontal divider header">
                        <img src={scientist} height="10rem" width="10rem" alt="cogwheel" />
                        About Me
                    </h3>
                </div>
                <div class="two wide column"></div>
            </div>
        </>
    )
}

export default About
