import React, { useRef, useState, useCallback, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styles from '../css/video.module.css'

// width:height
const VIDEO_RATIO = 9 / 16

const VideoEmbed = ({ url, title }) => {
  const [iframeWidth, setIframeWidth] = useState(0)
  const iframeRef = useRef()

  const handleResize = useCallback(
    () => setIframeWidth(iframeRef.current.clientWidth),
    [iframeRef.current]
  )

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener(`resize`, handleResize)

    return () => {
      window.removeEventListener(`resize`, handleResize)
    }
  }, [iframeRef.current])

  return (
    <>
      <iframe
        ref={iframeRef}
        className={styles.vedio1}
        width={1000}
        height={iframeWidth * VIDEO_RATIO}
        src={`${url}`}
        title={`Video: ${title}`}
        allowFullScreen
      />
    </>
  )
}

VideoEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default VideoEmbed
