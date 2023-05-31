import Smallbanner from './Smallbanner'
import { FaHammer } from 'react-icons/fa'
import { RiContactsFill } from 'react-icons/ri'

const Hero = () => {
  return (
    <>
      {/* Overlay  */}

      <div
        id='home'
        className='flex justify-center min-h-auto '
        data-aos='fade-in'
      >
        <div className='lg:h-auto flex flex-col md-flex-row z-30 '>
          {/* case without banner */}
          <div className=' flex flex-col mt-20 lg:flex-row'>
            {/* BKS H1 */}
            <div className=' flex flex-col backdrop-blur-sm max-w-[800px] text-center font-oswald  bg-transparent '>
              <h1 className=' font-pathway  text-8xl text-gray-200  rounded-md  md:text-9xl lg:text-[20rem]  plus:text-8xl'>
                BKS<span className='text-color-green'>.</span>
              </h1>
              {/* PODTEXT */}
              <div className=' uppercase   mx-auto font-robotoLight'>
                <h2 className='text-color-green font-bold text-3xl md:text-6xl  lg:text-6xl p-2 '>
                  Obkladačské práce{' '}
                </h2>

                <h2
                  className='text-gray-300 p-1  font-normal 
text-2xl md:text-4xl  lg:text-6xl'
                >
                  {' '}
                  aj pre tých
                </h2>
                <h2
                  className='text-gray-300 p-1  font-normal 
text-2xl md:text-4xl  lg:text-6xl'
                >
                  najnáročnejších
                </h2>
              </div>

              <h2
                className='
               text-lg text-gray-300   font-robotoLight font-normal lg:text-center uppercase md:text-4xl  lg:text-4xl mt-[20px]'
              >
                Naš zákazník náš
                <span className='text-color-green font-bold text-2xl md:text-6xl  lg:text-5xl'>
                  {' '}
                  Pán
                </span>
              </h2>
              {/* BUTTONS  */}
              <div className='flex flex-col lg:flex-row mx-auto font-robotoLight font-bold  py-4 text-lg md:text-3xl '>
                <a
                  href='#gallery'
                  className=' bg-color-green m-2  hover:bg-color-seablue hover:scale-110 hover:rotate-2 duration-300 transition-all text-gray-900 shadow-2xl py-2 px-8 rounded-md flex uppercase hover:text-gray-200 items-center justify-center  '
                >
                  <FaHammer size={25} className='mr-2' />
                  Realizácie
                </a>
                <a
                  href='#contact'
                  className=' bg-color-green m-2 hover:bg-color-seablue hover:scale-110 hover:rotate-2 duration-300 transition-all text-gray-900 shadow-2xl py-2 px-10 rounded-md flex uppercase hover:text-gray-200 items-center justify-center'
                >
                  <RiContactsFill size={25} className='mr-2 ' />
                  Kontakt
                </a>
              </div>
            </div>

            <Smallbanner />
          </div>
          {/* PONUKA */}

          {/*  */}
        </div>
      </div>
    </>
  )
}
export default Hero
