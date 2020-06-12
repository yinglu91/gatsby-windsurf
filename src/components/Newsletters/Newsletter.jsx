import React from "react"
import styles from "../../css/blog-card.module.css"
import Image from "gatsby-image"

const Newsletter = ({ newsLetter }) => {
  const { title, url, imageUrl } = newsLetter
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image
          fixed={imageUrl.childImageSharp.fixed}
          className={styles.img}
          alt="news letter"
        />
        <a
          href={newsLetter.url}
          className={styles.link}
          target="_blank"
          rel="noopener"
        >
          read more
        </a>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default Newsletter
