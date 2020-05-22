import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Bio from '../bio'

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
const About = () => {
  const data = useStaticQuery(getData)

  console.log('yyyy data:', data)

  return (
    <section style={{ marginBottom: '3rem' }}>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutInfo}>
          <h4>Windsurfing New Jersey Board of Directors</h4>
          <ul>
            {data.allPersonsYaml.nodes.map(({ id, name, title, imageUrl }) => {
              return (
                <li key={id}>
                  <Bio avatar={imageUrl} name={name} title={title} />{' '}
                </li>
              )
            })}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default About
