import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/broad.module.css'
import services from '../../constants/services'
import Image from 'gatsby-image'

const getData = graphql`
  {
    allPersonsYaml(
      filter: { department: { eq: "Board of Directors" } }
      sort: { order: ASC, fields: order }
    ) {
      nodes {
        id
        name
        title
        imageUrl {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const Services = () => {
  const data = useStaticQuery(getData)

  return (
    <section className={styles.services}>
      <Title title="Board of" subtitle="Directors" />

      <div className={styles.center}>
        {data.allPersonsYaml.nodes.map(({ id, name, title, imageUrl }) => (
          <article key={id} className={styles.service}>
            <Image
              fixed={imageUrl.childImageSharp.fixed}
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

export default Services
