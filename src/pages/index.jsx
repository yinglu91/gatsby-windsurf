import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Board from '../components/Home/Board'

import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import scrollToAnchor from '../utils/scroll-to-anchor'

const IndexPage = ({ data }) => {
  const aboutRef = React.useRef()

  const toAbout = () => {
    scrollToAnchor(aboutRef.current, () => {})()
  }

  return (
    <Layout>
      <SEO title="Home" />
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="NJ Windsurf Watersport Association"
          info="The New Jersey Windsurfing & Watersports Association (NJWWA) is a member-based organization that ensures the growth of recreational and competitive windsurfing, kitesurfing, kayaking, paddle boarding, and other non-motorized watersports in the Mid-Atlantic region of the United States."
        >
          <a href="#" className="btn-white" onClick={toAbout}>
            <b>about US</b>
          </a>
        </Banner>
      </StyledHero>

      <div id="about" css={{ height: 0 }} ref={aboutRef} />
      <About />
      <Board />
    </Layout>
  )
}

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default IndexPage
