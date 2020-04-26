import React from "react"
import ParticleFilter from "./particle_filter"
import AugmentedReality from "./augmented_reality"
import ActivityRecognition from "./activity_recognition"

const Vision = () => {

    return (
        <>
            <div class="row">
                <div class="two wide column"></div>
                <div class="twelve wide column">
                    <h3>Computer Vision | CS6476 | Spring 2020</h3>
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
