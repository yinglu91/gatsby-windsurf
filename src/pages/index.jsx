import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import VideoEmbed from '../components/VideoEmbed'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="NJ Windsurf Watersport Association"
          info="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sapiente id sit ut soluta quam."
        >
          <AniLink fade to="/products" className="btn-white">
            online shopping
          </AniLink>
        </Banner>
      </StyledHero>

      <About />

      <VideoEmbed
        url="https://www.youtube.com/embed/W7kJ6smRh9g"
        title="Slalom Windsurfing at 25 knots"
        date="January 11, 2012"
      />
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
