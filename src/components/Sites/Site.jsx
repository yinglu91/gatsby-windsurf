import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import VideoEmbed from '../VideoEmbed'
import styles from '../../css/tour.module.css'
import BuyButton from '../BuyButton'

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
      <div className={styles.imgContainer}>
        {documentToReactComponents(body.json, options)}
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
      </div>
    </article>
  )
}

export default site
