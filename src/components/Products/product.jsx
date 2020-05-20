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

const product = ({ product }) => {
  const { id, priceAndDescription: price, product: name } = product
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        {documentToReactComponents(product.content.json, options)}
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 style={{ marginBottom: '1rem' }}>${price}</h4>
        </div>

        <BuyButton
          id={id}
          title={name}
          price={price}
          description={name}
          // image={image}
          url="/"
          path="products"
        />
      </div>
    </article>
  )
}

export default product
