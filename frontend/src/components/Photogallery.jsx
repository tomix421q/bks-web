import React, { useState } from 'react'
import Gallery from 'react-grid-gallery'

const Photogallery = () => {
  const images = [
    {
      src: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
      thumbnailWidth: 250,
      thumbnailHeight: 150,
      caption: 'Lorem ipsum dolor sit amet',
    },
    {
      src: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
      thumbnailWidth: 250,
      thumbnailHeight: 150,
      caption: 'Consectetur adipiscing elit',
    },
    {
      src: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
      thumbnailWidth: 250,
      thumbnailHeight: 150,
      caption: 'Sed do eiusmod tempor',
    },
  ]
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = (index) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div>
      <Gallery images={images} onClickThumbnail={openLightbox} />
      {viewerIsOpen && (
        <Gallery
          images={images}
          currentIndex={currentImage}
          onClose={closeLightbox}
          showLightboxThumbnails={true}
          backdropClosesModal={true}
          customControls={[
            <button key='deleteImage' onClick={() => console.log('deleted')}>
              Delete Image
            </button>,
          ]}
        />
      )}
    </div>
  )
}
export default Photogallery
