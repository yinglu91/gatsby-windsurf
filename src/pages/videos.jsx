import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Videos from '../components/Videos/Videos'
import SEO from '../components/SEO'
import Title from '../components/Title'

const VideosPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Videos" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
        <h4 style={{ color: 'white' }}>videos videos videos videos</h4>
      </StyledHero>
      <Title title="our" subtitle="videos" />

      <Videos />
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
export default VideosPage
