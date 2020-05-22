import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from '../../css/site.module.css'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

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
          alt="single site"
        />
      )
    },
  },
}

const site = ({ site }) => {
  const { slug, name, latitude, longitude, body, hero } = site
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Img fluid={hero.fluid} style={{ width: 400, height: 200 }} />
        <AniLink fade className={styles.link} to={`/sites/${slug}`}>
          read more
        </AniLink>
      </div>

      {/* {!hero && (
        <div className={styles.hvrFloatShadow}>
          {documentToReactComponents(body.json, options)}
        </div>
      )} */}

      <div className={styles.footer}>
        <h3>{name}</h3>
      </div>
    </article>
  )
}

export default site
