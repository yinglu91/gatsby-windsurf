import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Title from "../components/Title"
import Newsletters from "../components/Newsletters/Newsletters"

const NewslettersPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="News Letters" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>
      <Title title="News" subtitle="Letters" />

      <Newsletters />
    </Layout>
  )
}

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "banner2.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default NewslettersPage
