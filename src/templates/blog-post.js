import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Lightbox from '../components/lightbox'

import styles from '../components/old/hero.module.css'
import VideoEmbed from '../components/VideoEmbed'

const BlogPostTemplate = ({ location, data }) => {
  const post = data.contentfulBlogPost
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className={styles.hero}>
          <Img
            className={styles.heroImage}
            alt={post.title}
            fluid={post.heroImage.fluid}
          />
        </div>

        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>

          {/* <VideoEmbed
            lessonLink="https://www.youtube.com/embed/DAPY1g5m0I8"
            lessonTitle="Frère voyez... Du Gai Soleil from Werther"
          /> */}

          {/* <VideoEmbed
            lessonLink="https://www.youtube.com/embed/AxbezmGrD94"
            lessonTitle="Il bacio by Luigi Arditi"
          />

          <VideoEmbed
            lessonLink="https://www.youtube.com/embed/ZXM6-reS_LA"
            lessonTitle="Nacht und Traume by Schubert"
          /> */}

          {post.images && <Lightbox images={post.images} />}

          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
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
