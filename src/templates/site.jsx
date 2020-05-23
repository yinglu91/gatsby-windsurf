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
          <div style={{ marginBottom: '20px' }}>
            <h1>{name}</h1>

            <div>{documentToReactComponents(body.json, options)}</div>

            <iframe
              width="600"
              height="400"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=S%20Bayview%20Ave%20%26%2024th%20Ave%2C%20Seaside%20Park%2C%20NJ%2008752&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
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
