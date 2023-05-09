import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Smallbanner = () => {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ]

  function MyImageGallery() {
    return (
      <ImageGallery
        items={images}
        showPlayButton={false} // ukážeme tlačidlo prehrávania alebo nie
        showFullscreenButton={false} // zobraziť tlačidlo pre celú obrazovku alebo nie
        autoPlay={true}
        slideInterval={3000} // každých 3 sekundy
        slideDuration={500} // trvanie prechodu na 500 milisekúnd
        showThumbnails={false} // skryje náhľady obrázkov
      />
    )
  }
  return (
    <div className='w-screen h-auto lg:hidden  rounded-sm place-self-start align-top items-start z-30'>
      <MyImageGallery />
    </div>
  )
}
export default Smallbanner
