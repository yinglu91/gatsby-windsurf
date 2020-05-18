import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Products from '../components/Products/Products'
import SEO from '../components/SEO'
import Banner from '../components/Banner'

const ProductsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Grocer" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
        <h4 style={{ color: 'white' }}>
          sadfsadfsaf shopping online is font...
        </h4>
      </StyledHero>

      <Products />
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
export default ProductsPage
