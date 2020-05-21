import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
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
          info="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sapiente id sit ut soluta quam."
        >
          <a href="#" className="btn-white" onClick={toAbout}>
            <b>EXPLORE US</b>
          </a>
        </Banner>
      </StyledHero>

      <div id="about" css={{ height: 0 }} ref={aboutRef} />
      <About />
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
