import React from "react"
import NewsletterList from "./NewsletterList"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    newsLetters: allNewsLettersYaml {
      nodes {
        id
        title
        url
        imageUrl {
          childImageSharp {
            fixed(width: 300, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const Newsletters = () => {
  const { newsLetters } = useStaticQuery(getData)
  return <NewsletterList newsLetters={newsLetters} />
}

export default Newsletters
