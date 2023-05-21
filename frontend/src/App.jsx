import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nasasluzby from './components/Nasasluzby'
import Navbar from './components/Navbar'
import Photogallery from './components/Photogallery'
import './index.css'
import React from 'react'
import LazyLoad from 'react-lazy-load'
import { BarLoader } from 'react-spinners'
import ClipLoader from 'react-spinners/ClipLoader'
import { useState, CSSProperties } from 'react'

function App() {
  return (
    <>
      <Navbar />
      <div className='mx-auto max-w-[1350px] cursor-default'>
        <LazyLoad>
          <Hero />
        </LazyLoad>
        <LazyLoad offset={200} once>
          <Nasasluzby />
        </LazyLoad>
        <LazyLoad offset={200} once>
          <About />
        </LazyLoad>
        <LazyLoad offset={200} once>
          <Contact />
        </LazyLoad>
        <LazyLoad offset={200} once>
          <Photogallery />
        </LazyLoad>
        <Footer />
      </div>
    </>
  )
}

export default App
