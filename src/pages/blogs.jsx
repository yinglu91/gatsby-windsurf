import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Blogs from '../components/Blogs/Blogs'
import SEO from '../components/SEO'
import Title from '../components/Title'

const BlogsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
        <h4 style={{ color: 'white' }}>BlogsPage BlogsPage BlogsPage</h4>
      </StyledHero>
      <Title title="our" subtitle="blogs" />

      <Blogs />
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
export default BlogsPage
