import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/single-site.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import StyledHero from '../components/StyledHero'
import Lightbox from '../components/lightbox'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import SEO from '../components/SEO'

const SiteTemplate = ({ data }) => {
  const { id, name, hero, latitude, longitude, body } = data.site

  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        if (!node.data.target.fields) {
          return
        }

        const { title, file } = node.data.target.fields
        const url = file['en-US'].url

        return (
          <img
            src={url}
            alt={title}
            className={styles.img}
            style={{ height: 200 }}
            alt="single product"
          />
        )
      },

      hyperlink: (node) => {
        const title = node.content[0].value
        const url = node.data.uri
        // https://www.youtube.com/embed/Nd9-HuEBEwQ

        return <VideoEmbed lessonLink={url} lessonTitle={title} />
      },
    },
  }

  return (
    <Layout>
      <SEO title={name} />
      <StyledHero site="true" img={hero.fluid} />
      <section className={styles.site}>
        <div className={styles.center}>
          <h1>{name}</h1>

          <div>{documentToReactComponents(body.json, options)}</div>

          {/* <div
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html,
            }}
          /> */}

          <AniLink fade to="/sites" className="btn-primary">
            all sites
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteBySlug($slug: String!) {
    site: contentfulSites(slug: { eq: $slug }) {
      id: contentful_id
      name
      slug

      hero {
        fluid(maxWidth: 800, quality: 90) {
          ...GatsbyContentfulFluid
        }
      }
      latitude
      longitude
      body {
        json
      }
    }
  }
`

export default SiteTemplate
