import React from 'react'
import styles from '../../css/blog-card.module.css'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const BlogCard = ({ blog }) => {
  const { title, publishDate, slug, heroImage } = blog
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image
          fixed={heroImage.fixed}
          className={styles.img}
          alt="single post"
        />
        <AniLink fade className={styles.link} to={`/blogs/${slug}`}>
          read more
        </AniLink>
        <h6 className={styles.date}>{publishDate}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
