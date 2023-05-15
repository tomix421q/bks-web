import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Photogallery from './components/Photogallery'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='mx-auto max-w-[1350px]'>
        <About />
        <Photogallery />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
