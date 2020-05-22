/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Image from 'gatsby-image'

// import { rhythm } from "../utils/typography"

const Bio = ({ avatar, name, title }) => {
  console.log('LLLL ', avatar, name, title)

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: `2rem`,
        // marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={avatar.childImageSharp.fixed}
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
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  )
}

export default Bio
