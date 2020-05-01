import React from "react"
import ParticleFilter from "./particle_filter"
import AugmentedReality from "./augmented_reality"
import ActivityRecognition from "./activity_recognition"

const Vision = () => {

    return (
        <>
            <div class="row">
                <div class="two wide column"></div>
                <div class="three wide column">
                    <h4 class="ui header">Computer Vision</h4>
                </div>
                <div class="nine wide column">
                    <p>CS6476 | Spring 2020</p>
                </div>
                <div class="two wide column"></div>
            </div>
            <ActivityRecognition />
            <ParticleFilter />
            <AugmentedReality />
        </>
    )
}

export default Vision
