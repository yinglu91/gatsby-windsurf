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
            fixed(width: 60, height: 60) {
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
      <Title title="our" subtitle="Board of Directors" />

      <div className={styles.center}>
        {data.allPersonsYaml.nodes.map(({ id, name, title, imageUrl }) => (
          <article key={id} className={styles.service}>
            <Image
              fixed={imageUrl.childImageSharp.fixed}
              alt="person"
              style={{
                // marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />

            <h5>{name}</h5>
            <p>{title}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
