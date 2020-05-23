import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import Products from '../components/Products/Products'
import SEO from '../components/SEO'
import Title from '../components/Title'

const ProductsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Products" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>
      <Title title="our" subtitle="classified" />

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
