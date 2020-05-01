import React from "react"
import linkedin from "../images/linkedin.svg"
import envelope from "../images/envelope.svg"
import github from "../images/github.svg"

const Title = () => {

    return (
        <>
            <div class="row"></div>
            <div class="row">
                <div class="two wide column"></div>
                    <div class="twelve wide column left aligned">
                        <h1 class="ui header">David D'lima</h1>
                        <p>M.S Computer Science | B.S Chemical Engineering | Passionate about building things through data</p>
                        <hr />
                    </div>
                <div class="two wide column"></div>
            </div>
            <div class="row">
                <div class="two wide column"></div>
                    <div class="two wide column left aligned">
                        <a href="https://www.linkedin.com/in/davidrdlima/">
                            <img src={linkedin} height="25rem" width="25rem" alt="cogwheel" />
                        </a>
                    </div>
                    <div class="two wide column left aligned">
                        <a href="https://github.com/daviddlima">
                            <img src={github} height="25rem" width="25rem" alt="cogwheel" />
                        </a>
                    </div>
                    <div class="one wide column center aligned">
                        <a href="mailto:dlima.david@gmail.com">
                            <img src={envelope} height="25rem" width="25rem" alt="cogwheel" />
                        </a>
                    </div>
                    <div class="three wide column left aligned">
                        <p>dlima.david@gmail.com</p>
                    </div>
                    <div class="four wide column right aligned">
                        <p>
                            Last Updated {
                            new Date().toLocaleDateString(
                                "en-US",
                                { year: 'numeric', month: 'long', day: 'numeric'}
                            )
                            }
                        </p>
                    </div>
                <div class="two wide column"></div>
            </div>
        </>
    )
}

export default Title
