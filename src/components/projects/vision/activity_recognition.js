import React from "react"
import Video from "../../video"
import confusion from "../../../images/CS6476/confusion_matrix.png"

const ActivityRecognition = () => {

    return (
        <>
        <div class="row">
            <div class="two wide column"></div>
            <div class="twelve wide column">
                <h5 class="ui header">Activity Recognition</h5>
                <Video 
                    videoSrcURL="https://www.youtube.com/embed/Iar7C7EKA88"
                    videoTitle="Activity Recognition"
                />
                <br></br>
                <p>
                    This was my final project following a
                    <span>&#32;</span>
                    <a href="https://pdfs.semanticscholar.org/8864/31a362bfdbcc6dd518f844eb374950b9de86.pdf">
                        2001 paper
                    </a>
                    <span>&#32;</span>
                    from Bobick and James. The technique here used
                    <span>&#32;</span>
                    <a href="https://en.wikipedia.org/wiki/Motion_History_Images">
                        motion history images
                    </a> 
                    <span>&#32;</span>
                    (MHIs) and motion energy (MEIs) to capture the activity at each frame.
                    From there the problem of where there activity was happening in the image (translation),
                    at what angle (rotation), and size (scale) had to be accounted for.
                    <span>&#32;</span>
                    <a href="https://en.wikipedia.org/wiki/Image_moment">
                        Hu Moments
                    </a>
                    <span>&#32;</span>
                    gave these invariants in seven phases that could be then fed to a
                    <span>&#32;</span>
                    <a href="https://en.wikipedia.org/wiki/Discriminative_model">
                        discriminative classifier
                    </a>
                    . I chose a
                    <span>&#32;</span>
                    <a href="https://en.wikipedia.org/wiki/Random_forest">
                        random forest
                    </a>
                    .
                </p>
                <img src={confusion} height="300rem" width="450rem" alt="cogwheel" />
            </div>
            <div class="two wide column"></div>
        </div>
        </>
    )
}

export default ActivityRecognition
