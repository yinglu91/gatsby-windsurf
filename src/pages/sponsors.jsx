import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Sponsors from '../components/Sponsors/Sponsors'
import SEO from '../components/SEO'
import Title from '../components/Title'

const SponsorsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Sponsors" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
        <h4 style={{ color: 'white' }}>sponsors sponsors sponsors sponsors</h4>
      </StyledHero>
      <Title title="our" subtitle="sponsors" />

      <Sponsors />
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
export default SponsorsPage
