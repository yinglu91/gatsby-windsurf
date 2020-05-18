import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/blog-card.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useStaticQuery, graphql } from 'gatsby'

const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Blog = ({ blog }) => {
  const data = useStaticQuery(getImage) // can't put inside if
  const img = data.file.childImageSharp.fixed

  const { title, publishDate, slug, heroImage } = blog
  let mainImage = heroImage ? heroImage.fixed : img

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fixed={mainImage} className={styles.img} alt="single blog" />
        <AniLink fade className={styles.link} to={`/blogs/${slug}`}>
          details
        </AniLink>
      </div>

      <div className={styles.footer}>
        <h3>{title}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>{publishDate}</h4>
        </div>
      </div>
    </article>
  )
}

export default Blog
