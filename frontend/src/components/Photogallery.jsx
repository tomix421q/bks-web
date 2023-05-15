import React, { useState, useEffect } from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { CgClose } from 'react-icons/cg'
import { SlArrowDown, SlArrowUp } from 'react-icons/Sl'
// Gallery grid library
// https://www.npmjs.com/package/react-responsive-masonry
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import images from '../../src/photos'

const Photogallery = () => {
  const [data, setData] = useState({ img: '', i: 0 })
  const isFirstImage = data.i === 0
  const isLastImage = data.i === images.length - 1
  console.log(data)

  // zobrazit viac/menej
  const [displayCount, setDisplayCount] = useState(20)

  const handleShowMoreClick = () => {
    setDisplayCount(displayCount + images.length)
  }
  const handleShowLessClick = () => {
    setDisplayCount(20)
    window.scrollTo({ top: 3400, behavior: 'smooth' })
  }
  //

  // posuvanie na klavesnici
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft' && !isFirstImage && data.img) {
        setData({ img: images[data.i - 1].src, i: data.i - 1 })
      }
      if (event.key === 'ArrowRight' && !isLastImage && data.img) {
        setData({ img: images[data.i + 1].src, i: data.i + 1 })
      }
      if (event.key === 'Escape') {
        setData({ img: '', i: 0 })
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [data.i, isFirstImage, isLastImage])
  //
  //

  const viewImage = (img, i) => {
    setData({ img, i })
  }
  const imgAction = (action) => {
    let i = data.i
    // dalej
    if (action === 'next-img') {
      setData({ img: images[i + 1].src, i: i + 1 })
    }
    // vzad
    if (action === 'previus-img') {
      setData({ img: images[i - 1].src, i: i - 1 })
    }
    // krizik
    if (!action) {
      setData({ img: '', i: 0 })
    }
  }

  return (
    <div id='gallery' className='grid '>
      <div className=' font-montserrat font-bold  m-2 mt-12'>
        {/* Galerry */}
        <div className=' block w-full '>
          <h1 className='text-6xl my-6 '>
            <span className='text-color-darkseablue inline text-7xl font-bold '>
              |
            </span>
            Galeria
          </h1>
        </div>
      </div>
      <div>
        {data.img && (
          <div className='z-50 w-[100%] top-0 left-0 bottom-0 h-screen bg-black fixed flex justify-center items-center overflow-hidden'>
            {/* zavriet */}
            <button
              className='absolute top-[10px] right-[10px] text-white'
              onClick={() => imgAction('')}
            >
              <CgClose size={50} />
            </button>
            {/* spet */}
            <button
              className={`text-white absolute left-[2%] ${
                isFirstImage ? 'hidden' : 'block'
              }`}
              onClick={() => imgAction('previus-img')}
            >
              <FcPrevious size={50} />
            </button>
            <img
              src={data.img}
              className='w-auto max-w-[90%] max-h-[90%]'
              alt='Gallery'
            />
            {/* dalej */}
            <button
              className={`text-white absolute right-[2%] ${
                isLastImage ? 'hidden' : 'block'
              }`}
              onClick={() => imgAction('next-img')}
            >
              <FcNext size={50} />
            </button>
          </div>
        )}

        <div className='p-[10px]'>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}
          >
            <Masonry gutter='20px'>
              {images.slice(0, displayCount).map((image, i) => (
                <img
                  key={i}
                  src={image.src}
                  className='hover:scale-105 duration-200 ease-in'
                  style={{ width: '100%', display: 'block', cursor: 'pointer' }}
                  alt=''
                  onClick={() => viewImage(image.src, i)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <div className='flex flex-col w-[80%]  mx-auto font-robotoLight font-bold  py-4 text-lg md:text-3xl'>
          {displayCount < images.length && (
            <button
              onClick={handleShowMoreClick}
              className='bg-color-green m-2  hover:bg-color-seablue hover:scale-110 duration-300 transition-all text-gray-900 shadow-2xl py-2 px-4 rounded-md flex uppercase hover:text-gray-200 items-center justify-center'
            >
              Viac fotiek
              <SlArrowDown size={40} className='ml-5' />
            </button>
          )}
          {displayCount > images.length && (
            <button
              onClick={handleShowLessClick}
              className='bg-color-green m-2  hover:bg-color-seablue hover:scale-110 duration-300 transition-all text-gray-900 shadow-2xl py-2 px-4 rounded-md flex uppercase hover:text-gray-200 items-center justify-center'
            >
              <SlArrowUp size={40} className='mr-5' />
              Zobrazit menej
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default Photogallery
