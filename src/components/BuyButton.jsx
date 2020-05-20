import React from 'react'

const BuyButton = ({ id, title, price, image, description, url, path }) => (
  <button
    className="btn-primary snipcart-add-item"
    style={{ fontSize: '0.8rem', padding: '0.3rem 0.3rem' }}
    className="snipcart-add-item"
    data-item-id={id}
    data-item-price={price}
    data-item-image={image}
    data-item-name={title}
    data-item-description={description}
    data-item-url={url + path}
    data-item-stackable={true}
    data-item-has-taxes-included={true}
  >
    Buy Now
  </button>
)
export default BuyButton
