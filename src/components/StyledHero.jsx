import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { useStaticQuery, graphql } from 'gatsby'

const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const StyledHero = ({ img, className, children, home }) => {
  const data = useStaticQuery(getImage) // can't put inside if
  const defaultImg = data.file.childImageSharp.fluid

  return (
    <BackgroundImage
      className={className}
      fluid={img || defaultImg}
      home={home}
    >
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: ${(props) =>
    props.home ? 'calc(100vh - 62px)' : props.site ? '50vh' : '10vh'};
  /* background: ${(props) =>
    props.home
      ? 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))'
      : 'none'}; */
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
