import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300  '
    >
      <div className='max-w-[1240] m-auto flex justify-between  p-4 text-black'>
        <a href='/'>
          <div className='hidden md:flex absolute top-5 w-12 h-12 bg-color-green justify-center items-center rounded-md md:w-20 md:h-20'>
            <h1 className='text-gray-600 text-5xl font-extrabold md:text-7xl '>
              B
            </h1>
          </div>
        </a>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <a href='/'>Domov</a>
          </li>
          <li className='p-4'>
            <a href='/#gallery'>Nasa praca</a>
          </li>
          <li className='p-4'>
            <a href='/#work'>O nas</a>
          </li>
          <li className='p-4'>
            <a href='/#contact'>Kontakt</a>
          </li>
        </ul>
        {/*  */}
        {/* Mobile Button */}
        {/*  */}
        <div className='block sm:hidden z-10' onClick={() => handleNav()}>
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile menu  */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 flex-col'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 flex-col'
          }
        >
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/' onClick={handleNav}>
                Home
              </a>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/#gallery' onClick={handleNav}>
                Gallery
              </a>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/#work' onClick={handleNav}>
                Work
              </a>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/#contact' onClick={handleNav}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar
