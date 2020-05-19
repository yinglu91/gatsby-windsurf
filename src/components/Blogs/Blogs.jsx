import React from 'react'
import BlogList from './BlogList'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  {
    blogs: allContentfulBlogPost {
      nodes {
        id: contentful_id
        slug
        title
        publishDate(formatString: "MMMM DD, YYYY")
        heroImage {
          fixed(width: 300, height: 200) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`
const Blogs = () => {
  const { blogs } = useStaticQuery(getData)

  return <BlogList blogs={blogs} />
}

export default Blogs
