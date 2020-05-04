import React from "react"
import Video from "./video"
import content from "../content.json"
import link from "../images/link.svg"

const Work = () => {

    return (
        <>
            {
                content.sections.map((section) => {
                    return (
                        <>
                            {display_section(section)}
                            {
                                section.subsections.map((subsection) => {
                                    return (
                                        display_subsection(subsection)
                                    )
                                })
                            }
                        </>
                    )
                })
            }
        </>
    )
}

export default Work

function display_section(section) {

    return (
        <>
            <div class="row">
                <div class="two wide column"></div>
                <div class="three wide column">
                    <h4 class="ui header">
                        {section.name}
                    </h4>
                </div>
                <div class="nine wide column">
                    <p>
                        {section.info}
                    </p>
                </div>
                <div class="two wide column"></div>
            </div>
        </>
    )
}

function display_subsection(subsection) {
    let seeMore;
    if (subsection.seeMore) {
        seeMore = (
            <a
                href={subsection.seeMoreLink}
                class="ui primary basic button"
            >
                    See More
            </a>
        )
    } else {
        seeMore = <></>
    }

    return (
        <>
            <div class="row">
                <div class="two wide column"></div>
                <div class="eleven wide column">
                    <h5 class="ui header" id={subsection.sectionLink}>
                        {subsection.name}
                    </h5>
                    <Video 
                        videoSrcURL={subsection.videoLink}
                        videoTitle={subsection.videoTitle}
                    />
                </div>
                <div class="one wide right aligned column">
                    <a href={'#' + subsection.sectionLink}>
                        <img src={link} height="15rem" width="15rem" alt="link" />
                    </a>
                </div>
                <div class="two wide column"></div>
            </div>
            <div class="row">
                <div class="two wide column"></div>
                <div class="twelve wide column">
                    <p>
                        {subsection.description}
                    </p>
                </div>
                <div class="two wide column"></div>
            </div>
            <div class="row">
                <div class="two wide column"></div>
                <div class="twelve wide column">
                    {seeMore}
                </div>
                <div class="two wide column"></div>
            </div>
        </>
    )
}
