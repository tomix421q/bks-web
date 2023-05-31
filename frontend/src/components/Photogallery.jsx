import React, { useState, useEffect } from 'react'
import LazyLoad from 'react-lazy-load'
// slider phone
import { useSwipeable } from 'react-swipeable'

//
import { FcNext, FcPrevious } from 'react-icons/fc'
import { CgClose } from 'react-icons/cg'
import { SlArrowDown, SlArrowUp } from 'react-icons/Sl'
import { TfiLayoutGrid4, TfiViewGrid } from 'react-icons/tfi'
import { TbColumns2, TbColumns3 } from 'react-icons/tb'

// Gallery grid library
// https://www.npmjs.com/package/react-responsive-masonry
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import images from '../photos'

const Photogallery = () => {
  const [data, setData] = useState({ img: '', i: 0 })
  const [viewGridSmall, setviewGridSmall] = useState(2)
  const [viewGridBig, setviewGridBig] = useState(4)
  const [isActive, setIsActive] = useState(false)

  const handleButtonClickBig = () => {
    setIsActive(!isActive)
    if (viewGridBig === 4) {
      setviewGridBig(6)
    } else {
      setviewGridBig(4)
    }
  }

  const handleButtonClickSmall = () => {
    setIsActive(!isActive)
    if (viewGridSmall === 2) {
      setviewGridSmall(4)
    } else {
      setviewGridSmall(2)
    }
  }

  const isFirstImage = data.i === 0
  const isLastImage = data.i === images.length - 1

  console.log(data)

  // zobrazit viac/menej
  const [displayCount, setDisplayCount] = useState(20) //first view

  const handleShowMoreClick = () => {
    setDisplayCount(displayCount + 35) //how much more photos show (all= images.length)
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

  // Slider for phone
  const handlers = useSwipeable({
    onSwipedLeft: () => imgAction('next-img'),
    onSwipedRight: () => imgAction('previus-img'),
  })

  return (
    <div id='gallery' className='grid '>
      <div className='text-center mt-20 max-w-[270px] mx-auto '>
        <h1 className='text-3xl lg:text-6xl text-white p-4 m-2  bg-gray-700/10 transition-all duration-300 ease-in-out hover:scale-105 backdrop-blur-md font-robotoLight font-thin border-2'>
          <span className='text-color-green '>[</span>
          <span></span>Galéria
          <span className='text-color-green'>]</span>
        </h1>
      </div>
      <div>
        {data.img && (
          <div
            className='z-50 w-[100%] top-0 left-0 bottom-0 h-screen bg-black fixed flex justify-center items-center overflow-hidden'
            {...handlers}
          >
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

        <div className='mx-auto flex justify-center m-2 p-2 lg:hidden'>
          <button
            onClick={handleButtonClickSmall}
            className={isActive ? 'p-4 bg-black/40' : 'bg-gray-800/70 p-4 '}
          >
            {isActive ? (
              <TfiLayoutGrid4 size={30} className='text-gray-400 mx-4' />
            ) : (
              <TfiViewGrid size={30} className='text-gray-400 mx-4' />
            )}
          </button>
        </div>

        <div className='mx-auto justify-center m-2 p-2 hidden lg:flex'>
          <button
            onClick={handleButtonClickBig}
            className={isActive ? 'p-4 bg-black/40' : 'bg-gray-800/70 p-4'}
          >
            {isActive ? (
              <TbColumns3 size={30} className='text-gray-400 mx-4' />
            ) : (
              <TbColumns2 size={30} className='text-gray-400 mx-4' />
            )}
          </button>
        </div>

        <div className='p-4 lg:p-[40px] bg-black/40  mx-2 backdrop-blur-md '>
          <LazyLoad offset={2000}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{
                350: viewGridSmall,
                750: viewGridSmall,
                900: viewGridBig,
              }}
            >
              <Masonry gutter='12px'>
                {images.slice(0, displayCount).map((image, i) => (
                  <img
                    key={i}
                    src={image.src}
                    className='hover:scale-105 duration-200 ease-in p-2'
                    style={{
                      width: '100%',
                      display: 'block',
                      cursor: 'pointer',
                    }}
                    alt=''
                    onClick={() => viewImage(image.src, i)}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </LazyLoad>
        </div>
        <div className='flex flex-col max-w-[350px] mx-auto font-robotoLight font-bold  py-4 text-2xl md:text-2xl'>
          {displayCount < images.length && (
            <button
              onClick={handleShowMoreClick}
              className='bg-color-green m-2  hover:bg-color-seablue hover:scale-110 duration-300 transition-all text-gray-900 py-2 px-4 rounded-md flex uppercase hover:text-gray-200 items-center justify-center'
            >
              Viac fotiek
              <SlArrowDown size={30} className='ml-4' />
            </button>
          )}
          {displayCount > images.length && (
            <button
              onClick={handleShowLessClick}
              className='bg-color-green m-2  hover:bg-color-seablue hover:scale-110 duration-300 transition-all text-gray-900 shadow-2xl py-2 px-4 rounded-md flex uppercase hover:text-gray-200 items-center justify-center'
            >
              <SlArrowUp size={30} className='mr-4' />
              Zobrazit menej
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default Photogallery
