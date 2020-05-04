import React from "react"
import scientist from "../images/data-scientist.svg"

const About = () => {

    return (
        <>
            <div class="row">
                <div class="two wide column"></div>
                <div class="six wide column">
                    <h3>About Me</h3>
                </div>
                <div class="six wide right aligned column">
                    <img src={scientist} height="25rem" width="25rem" alt="cogwheel" />
                </div>
                <div class="two wide column"></div>
            </div>
            <div class="row">
                <div class="two wide column"></div>
                    <div class="twelve wide column">
                        <p>
                            I've always loved to build and experiment with things. In high school,
                            <span>&#32;</span>
                            <a href="https://www.linkedin.com/in/brad-homoelle-b75443100/">
                                Dr. Brad Homoelle
                            </a>
                            <span>&#32;</span>
                            was such a phenomenal physics and chemistry teacher that I ended up
                            incorrectly picking chemical engineering. Nevertheless, I largely owe my ability
                            to think critically to him (thank you!). Throughout every internship and most experiences
                            at Ohio State, I increasingly wanted to express what I was learning in engineering
                            through programming. Most of my summer internships were spent making some sort of app
                            or simulation including trying to take an app called Kickflip to market 
                            with my friends. This path led me to a software engineering role after graduation
                            where I felt like I was missing academic experience that prevented me from becoming
                            a better engineer. That feeling led me to 
                            <span>&#32;</span>
                            <a href="https://www.omscs.gatech.edu/">
                                Georgia Tech's OMSCS program
                            </a>
                            <span>&#32;</span>
                            where I'm about half way through.
                        </p>
                    </div>
                <div class="two wide column"></div>
            </div>
        </>
    )
}

export default About
