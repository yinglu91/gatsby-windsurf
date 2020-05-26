import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Directors from '../components/Directors/Directors'
import SEO from '../components/SEO'
import Title from '../components/Title'

const DirectorsPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Directors" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>
      <Title title="board of" subtitle="directors" />

      <Directors />
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
export default DirectorsPage
