// Step 1: Import React
import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Cute cat at work, don't bother him."
        src="../images/catcoding.webp"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage