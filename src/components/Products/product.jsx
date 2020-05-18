import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import VideoEmbed from '../VideoEmbed'
import styles from '../../css/tour.module.css'

const options = {
  renderNode: {
    'embedded-asset-block': (node) => {
      const { title, file } = node.data.target.fields
      const url = file['en-US'].url
      return (
        <img
          src={url}
          alt={title}
          className={styles.img}
          style={{ width: 200 }}
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
          <h4 style={{ marginBottom: '1rem' }}>
            ${price}
            {product && (
              <span style={{ marginLeft: '1rem' }}>
                {/* {description.description} */}desc
              </span>
            )}
          </h4>
        </div>

        {/* https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css */}
        <button
          className="btn-primary snipcart-add-item"
          style={{ fontSize: '0.8rem', padding: '0.3rem 0.3rem' }}
          data-item-id={id}
          data-item-name={name}
          data-item-price={price}
          // data-item-image={mainImage.src}
          data-item-url="http://localhost:8000/products"
        >
          Add To Cart
        </button>
      </div>
    </article>
  )
}

export default product
