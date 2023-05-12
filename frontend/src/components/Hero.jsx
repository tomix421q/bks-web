import { FaHammer } from 'react-icons/fa'
import { RiContactsFill } from 'react-icons/ri'
import Smallbanner from './Smallbanner'
import TabsHero from './TabsHero'

const Hero = () => {
  return (
    <>
      {/* Overlay  */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-20' />
      <div className='hero-img  flex justify-center h-screen bg-fixed bg-center bg-cover '>
        <div className=' max-w-[1350px] lg:h-[900px] flex flex-col  lg:top-36 lg:flex-row z-30 '>
          <Smallbanner />
          {/* case without banner */}
          <div className=' max-w-[1450px] lg:h-[700px] p-2 flex flex-col md:p-6 lg:flex-row lg:mt-14'>
            {/* BKS H1 */}
            <div className='absolute z-30 top-0 bg-gray-800/60 flex flex-col  ml-6 max-w-[160px] plus:max-w-[190px] p-2 font-oswald md:max-w-[250px] lg:max-w-[650px] lg:relative lg:bg-transparent'>
              <h1 className='font-oswald text-6xl text-gray-200  rounded-md  md:text-9xl lg:text-[22rem] plus:text-8xl'>
                BKS<span className='text-color-green'>.</span>
              </h1>
              {/* Kvalita */}
              <h2
                className='
               text-sm text-gray-300 p-2 uppercase plus:text-xl md:text-4xl  lg:text-3xl lg:ml-4'
              >
                <span className='text-color-green font-bold text-2xl md:text-6xl  lg:text-5xl'>
                  100%{' '}
                </span>
                kvalita,podľa vaších požiadaviek.
              </h2>
              <TabsHero />
            </div>
            {/* PONUKA */}
            <div className=' font-oswald text-gray-300  min-w-[280px] p-2 max-w-[900px] lg:mt-10  '>
              <h2 className='text-4xl font-bold uppercase mb-6 lg:text-6xl lg:mb-10'>
                <span className='text-color-green text-5xl lg:text-6xl '>
                  |{' '}
                </span>
                Ponúkame:
              </h2>

              <ul className=' text-gray-200  text-lg justify-items-center grid grid-cols-2  font-robotoLight font-normal  md:text-2xl md:mt-4 lg:text-4xl lg:ml-6  plus:text-2xl '>
                <li className=' w-[95%] bg-black/40 border-b-2 border-color-green p-2 m-1'>
                  Pokladka velkoformátovej dlažby
                </li>
                <li className='w-[95%] bg-black/40 border-b-2 border-color-green p-2 m-1'>
                  {' '}
                  Obklady dlažby všetkých rozmerov
                </li>
                <li className='w-[95%] bg-black/40 border-b-2 border-color-green p-2 m-1'>
                  {' '}
                  Montáž sanity
                </li>
                <li className='w-[95%] bg-black/40 border-b-2 border-color-green p-2 m-1'>
                  {' '}
                  Rekonštrukcie bytov,domov
                </li>
                <li className='w-[95%] bg-black/40 border-b-2 border-color-green p-2 m-1'>
                  {' '}
                  Montáž krbov
                </li>
              </ul>

              <div className='flex justify-around font-robotoLight font-bold  py-4 text-lg md:text-3xl '>
                <a
                  href='#gallery'
                  class=' bg-color-green hover:bg-color-seablue hover:scale-110 hover:rotate-2 duration-300 transition-all text-gray-900 shadow-2xl py-2 px-4 rounded-md flex uppercase hover:text-gray-200 items-center'
                >
                  <FaHammer size={25} className='mr-2' />
                  Nasa praca
                </a>
                <a
                  href='#contact'
                  class=' bg-color-green hover:bg-color-seablue hover:scale-110 hover:rotate-2 duration-300 transition-all text-gray-900 shadow-2xl py-2 px-4 rounded-md flex uppercase hover:text-gray-200 items-center'
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
