import React, { useRef, useState, useCallback, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

// width:height
const VIDEO_RATIO = 9 / 16

const VideoEmbed = ({ lessonLink, lessonTitle }) => {
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
        style={{
          border: `none`,
          maxWidth: `100%`,
        }}
        width={1000}
        height={iframeWidth * VIDEO_RATIO}
        src={`${lessonLink}`}
        title={`Video: ${lessonTitle}`}
        allowFullScreen
      />
      <h3>{lessonTitle}</h3>
    </>
  )
}

VideoEmbed.propTypes = {
  lessonLink: PropTypes.string.isRequired,
  lessonTitle: PropTypes.string.isRequired,
}

export default VideoEmbed
