import React from 'react'
import Img from 'gatsby-image'
import styles from '../../css/blog-card.module.css'

const sponsor = ({ sponsor }) => {
  const { url, title } = sponsor
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <article className={styles.blog}>
        <div className={styles.imgContainer}>
          <Img
            resolutions={
              sponsor.childScreenshot.screenshotFile.childImageSharp.resolutions
            }
            alt={title}
            className={styles.img}
          />
        </div>
        <div className={styles.footer}>
          <h4>{title}</h4>
        </div>
      </article>
    </a>
  )
}

export default sponsor
