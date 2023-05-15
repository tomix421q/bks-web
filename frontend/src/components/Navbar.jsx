import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')
  const [mbLogoVis, setmbLogoVis] = useState('hidden')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 300) {
        setColor('black')
        setTextColor('#ffffff')
        setmbLogoVis('flex')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
        setmbLogoVis('hidden')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full  ease-in duration-300  z-40'
    >
      <div className='max-w-full m-auto flex justify-between  p-2  items-center '>
        {/*  */}
        {/* Logo pre lg */}
        <a href='/'>
          <div className='hidden lg:flex logo-img w-[60px] scale-75 h-[60px] bg-color-green rounded-md'></div>
        </a>
        {/* Logo pre sm */}
        <a href='/'>
          <div
            className={`logo-img w-[60px] absolute top-1.5 left-2 scale-75 h-[60px] bg-color-green rounded-md ${mbLogoVis}`}
          ></div>
        </a>
        {/*  */}

        <ul style={{ color: `${textColor}` }} className='hidden lg:flex'>
          <li className='p-4'>
            <a href='#home'>Domov</a>
          </li>
          <li className='p-4'>
            <a href='/#gallery'>Nasa praca</a>
          </li>
          <li className='p-4'>
            <a href='/#about'>O nas</a>
          </li>
          <li className='p-4'>
            <a href='/#contact'>Kontakt</a>
          </li>
        </ul>
        {/*  */}
        {/* Mobile Button */}
        {/*  */}
        <div
          className='block lg:hidden z-50   bg-gray-950 p-2 '
          onClick={() => handleNav()}
        >
          {nav ? (
            <AiOutlineClose size={40} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={40} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile menu  */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 flex-col text-white'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 flex-col '
          }
        >
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='#home' onClick={handleNav}>
                Domov
              </a>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/#gallery' onClick={handleNav}>
                Galeria
              </a>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/#about' onClick={handleNav}>
                O nas
              </a>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <a href='/#contact' onClick={handleNav}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar
