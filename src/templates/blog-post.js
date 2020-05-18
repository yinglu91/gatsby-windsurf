import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/single-blog.module.css'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import StyledHero from '../components/StyledHero'
import Lightbox from '../components/lightbox'

import SEO from '../components/SEO'

const BlogTemplate = ({ data }) => {
  const { title, publishDate, heroImage, images, body } = data.blog

  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout>
      <SEO title={title} />
      <StyledHero img={heroImage.fluid} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at : {publishDate}</h4>

          {images && <Lightbox images={images} />}

          <div
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html,
            }}
          />

          <Link fade to="/blogs" className="btn-primary">
            all posts
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    blog: contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      images {
        title
        description
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default BlogTemplate
