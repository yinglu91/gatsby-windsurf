import React from 'react'
import VideoList from './VideoList'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  {
    videos: allContentfulVideos(sort: { fields: date, order: DESC }) {
      nodes {
        id: contentful_id
        title
        date(formatString: "MMM DD, YYYY")
        videoUrl
      }
    }
  }
`

const Videos = () => {
  const { videos } = useStaticQuery(getData)
  return <VideoList videos={videos} />
}

export default Videos
