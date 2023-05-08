import { FaHammer } from 'react-icons/fa'
import { RiContactsFill } from 'react-icons/ri'
import TabsHero from './TabsHero'

const Hero = () => {
  return (
    <>
      {/* Overlay  */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60  ' />
      <div className='hero-img flex  items-center  justify-center h-screen bg-fixed bg-center bg-cover'>
        <div className='absolute max-w-[1200px]   flex flex-col  p-3 lg:top-36 justify-center lg:flex-row'>
          {/* BKS H1 */}
          <div className='flex-col max-w-[750px] font-oswald mb-6'>
            <h1 className='font-oswald text-7xl  text-gray-200  rounded-md  md:text-[10.625rem] lg:text-[22rem]  '>
              BKS<span className='text-color-green'>.</span>
            </h1>
            {/* Kvalita */}
            <h2 className=' text-xl text-gray-300 p-2  uppercase  lg:text-3xl lg:ml-4'>
              <span className='text-color-green font-bold text-2xl  lg:text-5xl'>
                100%{' '}
              </span>
              kvalita,podľa vaších požiadaviek.
            </h2>
            <TabsHero />
          </div>
          {/* PONUKA */}
          <div className='font-oswald text-gray-300 p-2 mt-4 w-full lg:mt-10 '>
            <h2 className='text-3xl font-bold uppercase lg:text-5xl'>
              <span className='text-color-green text-3xl lg:text-6xl '>| </span>
              Ponúkame:
            </h2>
            <ul className='text-gray-200 text-lg w-[270px] p-2 lg:ml-3  font-robotoLight font-normal  md:text-4xl md:mt-8 md:w-[470px]'>
              <li className='border-b-4 border-color-green p-2'>
                Pokladka velkoformátovej dlažby
              </li>
              <li className='border-b-4 border-color-green p-2'>
                {' '}
                Obklady dlažby všetkých rozmerov
              </li>
              <li className='border-b-4 border-color-green p-2'>
                {' '}
                Montáž sanity
              </li>
              <li className='border-b-4 border-color-green p-2'>
                {' '}
                Rekonštrukcie bytov,domov
              </li>
              <li className='border-b-4 border-color-green p-2'>
                {' '}
                Montáž krbov
              </li>
            </ul>
            <div className='flex justify-around font-robotoLight font-bold  py-4 text-base md:text-2xl '>
              <button class=' bg-color-green hover:bg-color-seablue hover:scale-110 hover:rotate-2 duration-300 transition-all text-gray-900 shadow-2xl py-2 px-4 rounded-md flex uppercase hover:text-gray-200 items-center'>
                <FaHammer size={25} className='mr-2' />
                Nasa praca
              </button>
              <button class=' bg-color-green hover:bg-color-seablue hover:scale-110 hover:rotate-2 duration-300 transition-all text-gray-900 shadow-2xl py-2 px-4 rounded-md flex uppercase hover:text-gray-200 items-center'>
                <RiContactsFill size={25} className='mr-2 ' />
                Kontakt
              </button>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  )
}
export default Hero
