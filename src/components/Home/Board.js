import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/broad.module.css'
import Image from 'gatsby-image'

const getData = graphql`
  {
    directors: allContentfulBoardOfDirectors(
      sort: { fields: order, order: ASC }
    ) {
      nodes {
        id: contentful_id
        name
        title
        image {
          fixed(width: 100, height: 100) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`

const Board = () => {
  const data = useStaticQuery(getData)

  return (
    <section className={styles.services}>
      <Title title="Board of" subtitle="Directors" />

      <div className={styles.center}>
        {data.directors.nodes.map(({ id, name, title, image }) => (
          <article key={id} className={styles.service}>
            <Image
              fixed={image.fixed}
              alt="person"
              style={{
                marginBottom: 10,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />

            <h4>{name}</h4>
            <h6>{title}</h6>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Board
