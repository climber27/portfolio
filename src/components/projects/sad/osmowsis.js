import React from "react"
import Video from "../../video"

const OsMowSis = () => {

    return (
        <>
        <div class="row">
            <div class="two wide column"></div>
            <div class="five wide column">
                <h3 class="ui header">Software Architechture & Design</h3>
            </div>
            <div class="seven wide column">
                <p>CS6300 | Fall 2019</p>
            </div>
            <div class="two wide column"></div>
        </div>
        <div class="row">
            <div class="two wide column"></div>
            <div class="twelve wide column">
                <h5 class="ui header">Automated Lawnmower Simulation</h5>
                <Video 
                    videoSrcURL="https://www.youtube.com/embed/hC9bSNyrjgQ"
                    videoTitle="OsMowSis"
                />
            </div>
            <div class="two wide column"></div>
        </div>
        </>
    )
}

export default OsMowSis