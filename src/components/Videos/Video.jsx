import React from 'react'
import VideoEmbed from '../VideoEmbed'
import styles from '../../css/tour.module.css'

const options = {
  renderNode: {
    'embedded-asset-block': (node) => {
      if (!node.data.target.fields) {
        return
      }

      const { title, file } = node.data.target.fields
      const url = file['en-US'].url

      return (
        <img
          src={url}
          alt={title}
          className={styles.img}
          style={{ height: 200 }}
          alt="single video"
        />
      )
    },

    hyperlink: (node) => {
      const title = node.content[0].value
      const url = node.data.uri
      // https://www.youtube.com/embed/Nd9-HuEBEwQ

      return <VideoEmbed lessonLink={url} lessonTitle={title} />
    },
  },
}

const video = ({ video }) => {
  const { title, date, videoUrl } = video
  return (
    <article className={styles.tour}>
      <VideoEmbed url={videoUrl} title={title} />

      <div className={styles.footer}>
        <h3>{title}</h3>
        <div className={styles.info}>
          <p style={{ marginBottom: '1rem' }}>{date}</p>
        </div>
      </div>
    </article>
  )
}

export default video
