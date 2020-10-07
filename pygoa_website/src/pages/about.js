import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
        <h1>About PyGoa</h1>
        <p>PyGoa is a community for  Python enthusiasts of Goa</p>
      <Link to="/">Home</Link> <br />    
    </Layout>
  )
}