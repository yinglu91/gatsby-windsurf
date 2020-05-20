import React from 'react'
import Img from 'gatsby-image'
import styles from '../../css/sponsor.module.css'

const sponsor = ({ sponsor }) => {
  const { url, title } = sponsor
  return (
    <article className={styles.tour}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className={styles.imgContainer}>
          <Img
            resolutions={
              sponsor.childScreenshot.screenshotFile.childImageSharp.resolutions
            }
            alt={title}
            className={styles.img}
          />
        </div>
      </a>

      <div className={styles.footer}>
        <h3>{title}</h3>
      </div>
    </article>
  )
}

export default sponsor
