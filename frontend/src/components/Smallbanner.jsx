import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Smallbanner = () => {
  const images = [
    {
      original: '../../photos/foto/21.jpg',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: '../../photos/foto/23.jpg',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: '../../photos/foto/36.jpg',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: '../../photos/foto/37.jpg',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: '../../photos/foto/55.jpg',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: '../../photos/foto/63.jpg',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: '../../photos/foto/66.jpg',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: '../../photos/foto/70.jpg',
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
    <div
      className='md:mx-auto lg:w-[50%] shadow-md shadow-black hidden lg:block transition-all ease-linear duration-1000 '
      data-aos='fade-in'
    >
      <MyImageGallery />
    </div>
  )
}
export default Smallbanner
