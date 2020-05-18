import React, { useState } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px;

  @media (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
  @media (min-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
`

const ImageContainer = styled.div`
  background-color: tan;
  width: 300px;
  height: 280px;
`

const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0 0 20px;
`

const Lightbox = ({ images }) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <LightboxContainer>
        {images.map((image) => (
          <PreviewButton
            key={image.fluid.src}
            type="button"
            onClick={() => {
              setShowLightbox(true)
              setSelectedImage(image)
            }}
          >
            <Img fluid={image.fluid} style={{ width: 300, height: 200 }} />
          </PreviewButton>
        ))}
      </LightboxContainer>

      {showLightbox && (
        <Dialog>
          <div
            style={{
              backgroundColor: '#ffffff',
              boxShadow:
                'rgba(46, 41, 51, 0.08) 0px 4px 16px, rgba(71, 63, 79, 0.16) 0px 8px 24px',
              position: 'relative',
              alignItems: 'center',
              order: 1,
              width: '100%',
              borderRadius: '4px',
            }}
          >
            <Img fluid={selectedImage.fluid} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
              }}
            >
              <div>
                {selectedImage.title && <h4>{selectedImage.title}</h4>}
                {selectedImage.description && (
                  <p>{selectedImage.description}</p>
                )}
              </div>
              <div>
                <button type="button" onClick={() => setShowLightbox(false)}>
                  x
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </>
  )
}

export default Lightbox

// https://www.gatsbyjs.org/blog/2018-11-03-building-an-accessible-lightbox/#connecting-the-image-click-to-the-lightbox
