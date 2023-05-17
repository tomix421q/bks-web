import { FaHammer } from 'react-icons/fa'
import { RiContactsFill } from 'react-icons/ri'
import Smallbanner from './Smallbanner'
import TabsHero from './TabsHero'

const Hero = () => {
  return (
    <>
      {/* Overlay  */}

      <div
        id='home'
        className='  flex justify-center  min-h-screen bg-blend-overlay  bg-fixed bg-center bg-cover  '
      >
        <div className='lg:h-auto flex flex-col  lg:top-36 lg:flex-row z-30 '>
          {/* <Smallbanner /> */}
          {/* case without banner */}
          <div className='   p-2 flex flex-col lg:mt-14 mt-16 '>
            {/* BKS H1 */}
            <div className=' flex flex-col backdrop-blur-md border-2 text-center  p-2 font-oswald  max-w-[700px]  bg-transparent '>
              <h1 className='font-pathway  text-8xl text-gray-200  rounded-md  md:text-9xl lg:text-[16rem]  plus:text-8xl'>
                BKS<span className='text-color-green'>.</span>
              </h1>
              {/* Kvalita */}
              <h2
                className='
               text-sm text-gray-300 p-2 font-robotoLight font-light lg:text-center uppercase se:text-xl md:text-4xl  lg:text-3xl '
              >
                <span className='text-color-green font-bold text-2xl md:text-6xl  lg:text-5xl'>
                  100%{' '}
                </span>
                kvalita,podľa vaších požiadaviek.
              </h2>
            </div>
            {/* PONUKA */}
            <div className=' font-oswald text-gray-700  min-w-[280px] p-2 max-w-[900px] lg:mt-10  '>
              <div className='text-center w-fit mx-auto '>
                <h1 className='text-3xl lg:text-6xl  mx-auto text-white p-4 m-2  bg-gray-700/10 transition-all duration-300 ease-in-out hover:scale-105 backdrop-blur-sm font-robotoLight font-thin border-2'>
                  {/* <span className='text-color-green text-4xl font-normal'>
                    |
                  </span> */}
                  <span className='text-color-green '>[</span>
                  Naše služby
                  <span className='text-color-green'>]</span>
                </h1>
              </div>

              <ul
                className=' text-gray-200  text-lg text-center  grid grid-cols-1 min-w-[25
              0px]   font-robotoLight font-normal  md:text-2xl md:mt-4 lg:text-2xl   plus:text-2xl '
              >
                <li className='  bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
                  Pokladka velkoformátovej dlažby
                </li>
                <li className=' bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
                  {' '}
                  Obklady dlažby všetkých rozmerov
                </li>
                <li className=' bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
                  {' '}
                  Montáž sanity
                </li>
                <li className=' bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
                  {' '}
                  Rekonštrukcie bytov,domov
                </li>
                <li className=' bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
                  {' '}
                  Montáž krbov
                </li>
              </ul>

              <div className='flex flex-col w-[80%] mx-auto font-robotoLight font-bold  py-4 text-lg md:text-3xl '>
                <a
                  href='#gallery'
                  className=' bg-color-green m-2  hover:bg-color-seablue hover:scale-110 hover:rotate-2 duration-300 transition-all text-gray-900 shadow-2xl py-2 px-4 rounded-md flex uppercase hover:text-gray-200 items-center justify-center  '
                >
                  <FaHammer size={25} className='mr-2' />
                  Nasa praca
                </a>
                <a
                  href='#contact'
                  className=' bg-color-green m-2 hover:bg-color-seablue hover:scale-110 hover:rotate-2 duration-300 transition-all text-gray-900 shadow-2xl py-2 px-4 rounded-md flex uppercase hover:text-gray-200 items-center justify-center'
                >
                  <RiContactsFill size={25} className='mr-2 ' />
                  Kontakt
                </a>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  )
}
export default Hero
