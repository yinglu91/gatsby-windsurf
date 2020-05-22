import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import News from '../components/News/News'
import SEO from '../components/SEO'
import Title from '../components/Title'

const NewsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="News" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
        <h4 style={{ color: 'white' }}>NewsPage NewsPage NewsPage</h4>
      </StyledHero>
      <Title title="our" subtitle="news" />

      <News />
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
export default NewsPage
