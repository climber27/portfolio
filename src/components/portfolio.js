import React from "react"
import cogwheel from "../images/cogwheel.svg"
import Work from "./work"

const Projects = () => {

    return (
        <>
            <div class="row">
                <div class="two wide column"></div>
                <div class="six wide column">
                    <h3>Portfolio</h3>
                </div>
                <div class="six wide right aligned column">
                    <img src={cogwheel} height="25rem" width="25rem" alt="cogwheel" />
                </div>
                <div class="two wide column"></div>
            </div>
            <Work />
        </>
    )
}

export default Projects