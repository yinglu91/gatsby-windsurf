import React, { useState, useEffect } from 'react'
import styles from '../../css/items.module.css'
import Video from './Video'

const videoList = (props) => {
  const [videos, setVideos] = useState([])
  const [sortedVideos, setSortedVideos] = useState([])

  useEffect(() => {
    setVideos(props.videos.nodes)
    setSortedVideos(props.videos.nodes)
  }, [])

  return (
    <section className={styles.tours}>
      <div className={styles.center}>
        {sortedVideos.map((node) => (
          <Video key={node.id} video={node} />
        ))}
      </div>
    </section>
  )
}

export default videoList
