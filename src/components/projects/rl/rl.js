import React from "react"
import lander from "../../../images/lander.gif"


const RL = () => {

    return (
        <>
        <div class="row">
            <div class="two wide column"></div>
            <div class="four wide column">
                <h3>Reinforced Learning</h3>
            </div>
            <div class="eight wide column">
                <p>CS7642 | Fall 2019</p>
            </div>
            <div class="two wide column"></div>
        </div>
        <div class="row">
            <div class="two wide column"></div>
            <div class="twelve wide column">
                <h5>OpenAI Gym Lunar Lander V2</h5>
                <img src={lander} height="300rem" width="300rem" alt="Lander Gif" />
            </div>
            <div class="two wide column"></div>
        </div>
        </>
    )
}

export default RL