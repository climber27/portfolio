import React from "react"
import lander from "../../../images/lander.gif"


const RL = () => {

    return (
        <>
        <div class="row">
            <div class="two wide column"></div>
            <div class="four wide column">
                <h4 class="ui header">Reinforced Learning</h4>
            </div>
            <div class="eight wide column">
                <p>CS7642 | Fall 2019</p>
            </div>
            <div class="two wide column"></div>
        </div>
        <div class="row">
            <div class="two wide column"></div>
            <div class="twelve wide column">
                <h5 class="ui header">OpenAI Gym Lunar Lander V2</h5>
                <img src={lander} height="300rem" width="300rem" alt="Lander Gif" />
            </div>
            <div class="two wide column"></div>
        </div>
        </>
    )
}

export default RL