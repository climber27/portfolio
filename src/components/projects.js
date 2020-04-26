import React from "react"
import Vision from "./projects/vision/vision"
import cogwheel from "../images/cogwheel.svg"
import OsMowSis from "./projects/sad/osmowsis"
import RL from "./projects/rl/rl"

const Projects = () => {

    return (
        <>
            <div class="row">
                <div class="two wide column"></div>
                <div class="twelve wide column">
                    <h3 class=" ui horizontal divider header">
                        <img src={cogwheel} height="10rem" width="10rem" alt="cogwheel" />
                        Projects
                    </h3>
                </div>
                <div class="two wide column"></div>
            </div>
            <Vision />
            <RL />
            <OsMowSis />
        </>
    )
}

export default Projects