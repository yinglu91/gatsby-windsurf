import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import DirectorList from './DirectorList'

const getData = graphql`
  {
    directors: allPersonsYaml(
      filter: { department: { eq: "Board of Directors" } }
      sort: { fields: order, order: ASC }
    ) {
      nodes {
        id
        name
        title
        imageUrl {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const Directors = () => {
  const { directors } = useStaticQuery(getData)
  console.log('sssss', directors)

  return <DirectorList directors={directors} />
}

export default Directors
