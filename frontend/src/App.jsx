import React, { useState, useEffect } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nasasluzby from './components/Nasasluzby'
import Navbar from './components/Navbar'
import Photogallery from './components/Photogallery'
import ReactLoading from 'react-loading'
import './index.css'
//
//SCROLL ANIMATION
import AOS from 'aos'
import 'aos/dist/aos.css'
//

function App() {
  // ONLOAD
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false)
    }

    document.getElementById('home').addEventListener('load', handleLoad)

    return () => {
      document.getElementById('home').removeEventListener('load', handleLoad)
    }
  }, [])

  useEffect(() => {
    AOS.init({ duration: 2000 })

    // Znovu inicializovať AOS po načítaní obsahu z react-router
    const handleContentLoad = () => {
      AOS.refresh()
    }

    window.addEventListener('DOMContentLoaded', handleContentLoad)

    return () => {
      window.removeEventListener('DOMContentLoaded', handleContentLoad)
    }
  }, [])

  return (
    <>
      {loading ? (
        <div className='spinner-container h-screen w-screen bg-gray-900 flex justify-center items-center'>
          <ReactLoading
            type='spin'
            color='#36d7b7'
            height='50px'
            width='50px'
          />{' '}
          {/* ReactLoading komponent */}
        </div>
      ) : (
        <div>
          <Navbar />
          <img
            src='../photos/wallpaper/mobile3.webp'
            className='herohero'
            alt=''
          />
          {/*  */}
          {/* MAIN CONTENT  */}
          {/*  */}
          <div className='mx-auto max-w-[1350px] cursor-default '>
            <Hero />
            <div data-aos='fade-in'>
              <About />
            </div>

            <div data-aos='fade-in'>
              <Nasasluzby />
            </div>
            <div data-aos='fade-in'>
              <Contact />
            </div>
            <Photogallery />
          </div>
          <Footer />
          {/*  */}
        </div>
      )}
    </>
  )
}

export default App
