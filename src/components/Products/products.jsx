import React from 'react'
import ProductList from './ProductList'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  query {
    products: allContentfulProducts(limit: 5) {
      nodes {
        id: contentful_id
        product
        priceAndDescription
        content {
          json
        }
      }
    }
  }
`

// products component
export default () => {
  const { products } = useStaticQuery(getData)

  return <ProductList products={products} />
}
