import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import VideoEmbed from '../components/VideoEmbed'

const options = {
  renderNode: {
    hyperlink: (node) => {
      const title = node.content[0].value
      const url = node.data.uri
      // https://www.youtube.com/embed/Nd9-HuEBEwQ

      return <VideoEmbed lessonLink={url} lessonTitle={title} />
    },
  },
}

const windserf = ({ location, data }) => {
  return (
    <Layout location={location}>
      <Helmet title="Video" />
      <div style={{ background: '#fff' }}>
        {data.videos.nodes.map((node) => {
          return (
            <article key={node.id}>
              {documentToReactComponents(node.description.json, options)}
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default windserf

export const pageQuery = graphql`
  {
    videos: allContentfulNjwwa {
      nodes {
        id: contentful_id
        description {
          json
        }
      }
    }
  }
`
