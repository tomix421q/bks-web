import Smallbanner from './Smallbanner'

const Hero = () => {
  return (
    <>
      {/* Overlay  */}

      <div id='home' className='flex justify-center min-h-auto '>
        <div className='lg:h-auto flex flex-col md-flex-row z-30 '>
          {/* case without banner */}
          <div className='   p-2 flex flex-col mt-20 lg:flex-row'>
            {/* BKS H1 */}
            <div className=' flex flex-col backdrop-blur-md max-w-[800px] text-center font-oswald  bg-transparent '>
              <h1 className='font-pathway  text-8xl text-gray-200  rounded-md  md:text-9xl lg:text-[20rem]  plus:text-8xl'>
                BKS<span className='text-color-green'>.</span>
              </h1>

              {/* Kvalita */}
              <h2
                className='
               text-sm text-gray-300 p-2 font-robotoLight font-light lg:text-center uppercase se:text-xl md:text-4xl  lg:text-5xl w-[95%]'
              >
                <span className='text-color-green font-medium text-2xl md:text-6xl  lg:text-5xl'>
                  Obkladačske práce{' '}
                </span>
                aj pre tých najnáročnejších
              </h2>
              <h2
                className='
               text-sm text-gray-300  font-robotoLight font-light lg:text-center uppercase se:text-xl md:text-4xl  lg:text-5xl w-[95%]'
              >
                Naš zákazník náš
                <span className='text-color-green font-medium text-2xl md:text-6xl  lg:text-6xl'>
                  {' '}
                  Pán
                </span>
              </h2>
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
