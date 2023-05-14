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
      <div className='bg-gray-200 '>
        <Navbar />
        <Hero />
        <About />
        <Photogallery />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
