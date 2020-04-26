import React from "react"
import 'semantic-ui-css/semantic.min.css'

import SEO from "../components/seo"
import missing from "../images/404-error.svg"

const NotFoundPage = () => (
  <div class="ui container">
    <div class="ui grid">
      <SEO title="404: Not found" />
      <div class="four wide column"></div>
      <div class="eight wide column center aligned">
        <img src={missing} height="300rem" width="300rem" />
        <h3>Page Not Found!</h3>
      </div>
      <div class="four wide column"></div>
    </div>
  </div>
)

export default NotFoundPage
