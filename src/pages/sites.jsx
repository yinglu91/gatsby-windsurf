import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Sites from '../components/Sites/Sites'
import SEO from '../components/SEO'
import Title from '../components/Title'

const SitesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Sites" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>
      <Title title="our" subtitle="sites" />

      <Sites />
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
export default SitesPage
