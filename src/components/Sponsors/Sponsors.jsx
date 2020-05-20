import React from 'react'
import SponsorList from './SponsorList'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  query SitesQuery {
    sponsors: allSitesYaml {
      nodes {
        id
        url
        title
        childScreenshot {
          screenshotFile {
            childImageSharp {
              resolutions(width: 384, height: 288) {
                ...GatsbyImageSharpResolutions
              }
            }
          }
        }
      }
    }
  }
`
const Sponsors = () => {
  const { sponsors } = useStaticQuery(getData)

  return <SponsorList sponsors={sponsors} />
}

export default Sponsors
