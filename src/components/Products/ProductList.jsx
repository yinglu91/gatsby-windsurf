import React, { useState, useEffect } from 'react'
import styles from '../../css/items.module.css'
import Product from './Product'

const ProductList = (props) => {
  const [products, setProducts] = useState([])
  const [sortedProducts, setSortedProducts] = useState([])

  useEffect(() => {
    setProducts(props.products.nodes)
    setSortedProducts(props.products.nodes)
  }, [])

  return (
    <section className={styles.tours}>
      <div className={styles.center}>
        {sortedProducts.map((node) => (
          <Product key={node.id} product={node} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
