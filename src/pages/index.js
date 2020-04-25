import React from "react"
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>David D'lima</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button primary>Save</Button>
  </Layout>
)


export default IndexPage