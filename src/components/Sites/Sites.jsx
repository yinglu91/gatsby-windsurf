import React from 'react'
import SiteList from './SiteList'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  {
    sites: allContentfulSites {
      nodes {
        id: contentful_id
        name
        latitude
        longitude
        body {
          json
        }
      }
    }
  }
`
const Sites = () => {
  const { sites } = useStaticQuery(getData)

  return <SiteList sites={sites} />
}

export default Sites
