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
                <div class="two wide column">
                    <h3>Projects</h3>
                </div>
                <div class="ten wide column">
                    <img src={cogwheel} height="25rem" width="25rem" alt="cogwheel" />
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