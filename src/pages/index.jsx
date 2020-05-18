import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

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

// import React from 'react'

// const index = () => {
//   return <div>hellow world</div>
// }

// export default index
