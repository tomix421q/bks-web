import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Smallbanner = () => {
  const images = [
    {
      original: '../../photos/foto/3.jpg',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: '../../photos/foto/12.jpg',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: '../../photos/foto/13.jpg',
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
        showNav={false} // Odstráni posuvacie šípky
      />
    )
  }
  return (
    <div className='md:mx-auto lg:w-[50%] z-30  shadow-md shadow-black hidden lg:block'>
      <MyImageGallery />
    </div>
  )
}
export default Smallbanner
