import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from '../../css/site.module.css'

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
  const { id, name, latitude, longitude, body } = site
  return (
    <article className={styles.tour}>
      <div className={styles.footer}>
        <h3>{name}</h3>
      </div>

      <div className={styles.hvrFloatShadow}>
        {documentToReactComponents(body.json, options)}
      </div>
    </article>
  )
}

export default site