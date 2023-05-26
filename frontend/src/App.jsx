import React, { useState, useEffect } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nasasluzby from './components/Nasasluzby'
import Navbar from './components/Navbar'
import Photogallery from './components/Photogallery'
import './index.css'
// LOADER
import { SyncLoader } from 'react-spinners'
//
//SCROLL ANIMATION
import AOS from 'aos'
import 'aos/dist/aos.css'
//

function App() {
  // ONLOAD
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    window.onload = () => {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <>
      {loading ? (
        <div className='spinner-container h-screen w-screen bg-gray-900 flex justify-center items-center'>
          <SyncLoader color='#36d7b7' loading={loading} size={30} />
        </div>
      ) : (
        <div>
          <Navbar />

          {/*  */}
          {/* MAIN CONTENT  */}
          {/*  */}
          <div className='mx-auto max-w-[1350px] cursor-default'>
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
