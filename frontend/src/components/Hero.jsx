const Hero = () => {
  return (
    <>
      {/* Overlay  */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60  ' />
      <div className='hero-img flex  items-center  justify-center h-screen bg-fixed bg-center bg-cover'>
        <div className='absolute max-w-[900px]   flex flex-col  p-3 lg:top-40  lg:left-20 lg:flex-row'>
          {/* BKS H1 */}
          <div className='flex-col max-w-[750px] font-oswald'>
            <h1 className='font-oswald text-7xl  text-gray-300 mb-3 p-2 px-2 rounded-md  md:text-[10.625rem] lg:text-[22rem]  '>
              BKS<span className='text-color-green'>.</span>
            </h1>
            {/* Kvalita */}
            <h2 className=' text-xl text-gray-300 p-2  uppercase  lg:text-3xl lg:ml-4'>
              <span className='text-color-green font-bold text-2xl  lg:text-5xl'>
                100%{' '}
              </span>
              kvalita,podľa vaších požiadaviek.
            </h2>
          </div>
          {/* PONUKA */}
          <div className='font-oswald text-gray-300 p-2 mt-4 w-full lg:mt-10 rounded-md'>
            <h2 className='text-3xl font-bold uppercase lg:text-5xl'>
              <span className='text-color-green text-3xl lg:text-6xl '>| </span>
              Ponúkame:
            </h2>
            <ul className='text-gray-300 text-lg w-[270px] p-2 ml-3  font-robotoLight font-normal  md:text-4xl lg:mt-5 lg:w-[450px]'>
              <li className='border-b-4 border-color-green p-2'>
                Kladenie veľko formátov
              </li>
              <li className='border-b-4 border-color-green p-2'>
                {' '}
                Osádzanie krbov
              </li>
              <li className='border-b-4 border-color-green p-2'>
                {' '}
                Kladenie na terče
              </li>
              <li className='border-b-4 border-color-green p-2'>
                {' '}
                Vonkajšia dlažba
              </li>
            </ul>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  )
}
export default Hero
