import React from 'react'
import styles from '../../css/blog-card.module.css'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Director = ({ director }) => {
  const { id, name, title, imageUrl } = director
  return (
    <article className={styles.director}>
      <div className={styles.imgContainer}>
        <Image
          fixed={imageUrl.childImageSharp.fixed}
          className={styles.img}
          alt="director"
        />
        <h6 className={styles.date}>{name}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default Director
