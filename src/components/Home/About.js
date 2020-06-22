import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <>
      <section className={styles.about}>
        <Title title="about" subtitle="us" />
        <div className={styles.aboutCenter}>
          <article className={styles.aboutImg}>
            <div className={styles.imgContainer}>
              <Img
                fluid={aboutImage.childImageSharp.fluid}
                alt="awesome landscape"
              />
            </div>
          </article>

          <article className={styles.aboutInfo}>
            <h4>our mission</h4>
            <p>
              The New Jersey Windsurfing & Watersports Association (NJWWA) is a
              member-based organization that ensures the growth of recreational
              and competitive windsurfing, kitesurfing, kayaking, paddle
              boarding, and other non-motorized watersports in the Mid-Atlantic
              region of the United States.
            </p>
            <p>
              The mission is accomplished via the provision of products,
              services and marketing activities that are designed to meet the
              needs of all its members. While accomplishing our mission we
              affirm the US SAILING principles of good sportsmanship, safety,
              fair play, equal opportunity and fun in sailing by people of all
              ages and abilities.
            </p>
            {/* <button type="button" className="btn-primary">
              read more
            </button> */}
          </article>
        </div>
      </section>
    </>
  )
}

export default About
