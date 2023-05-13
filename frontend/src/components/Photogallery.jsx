import React, { useState } from 'react'
// Gallery grid library
// https://www.npmjs.com/package/react-responsive-masonry
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const images = [
  'https://images.pexels.com/photos/16147939/pexels-photo-16147939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //...
  'https://picsum.photos/2000/2000?image=206',
  'https://images.pexels.com/photos/14713776/pexels-photo-14713776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/14713276/pexels-photo-14713276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/16388789/pexels-photo-16388789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/16550437/pexels-photo-16550437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/13499007/pexels-photo-13499007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/16732092/pexels-photo-16732092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/16756722/pexels-photo-16756722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/15592229/pexels-photo-15592229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/16298638/pexels-photo-16298638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/16747129/pexels-photo-16747129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
]

const Photogallery = () => {
  const [data, setData] = useState({ img: '', i: 0 })

  const viewImage = (img, i) => {
    setData({ img, i })
  }

  const imgAction = (action) => {
    let i = data.i
    if (action === 'next-img') {
      setData({ img: images[i + 1], i: i + 1 })
    }
    if (action === 'previus-img') {
      setData({ img: images[i - 1], i: i - 1 })
    }
    if (!action) {
      setData({ img: '', i: 0 })
    }
  }
  return (
    <div id='gallery' className='max-w-[1200px] mx-auto'>
      <div>
        {data.img && (
          <div
            className='z-50'
            style={{
              width: '100%',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: '100vh',
              background: 'black',
              position: 'fixed',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                color: 'white',
              }}
              onClick={() => imgAction('')}
            >
              X
            </button>
            <button
              className='text-white absolute left-4'
              onClick={() => imgAction('previus-img')}
            >
              Previus
            </button>
            <img
              src={data.img}
              style={{ width: 'auto', maxWidth: '90%', maxHeight: '90%' }}
              alt=''
            />
            <button
              className='text-white absolute right-4'
              onClick={() => imgAction('next-img')}
            >
              Next
            </button>
          </div>
        )}

        <div className='' style={{ padding: '10px' }}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}
          >
            <Masonry gutter='20px'>
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  className='border-gray-100 border-4'
                  style={{ width: '100%', display: 'block', cursor: 'pointer' }}
                  alt=''
                  onClick={() => viewImage(image, i)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  )
}

export default Photogallery
