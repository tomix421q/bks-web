import TabsHero from './TabsHero'

const Nasasluzby = () => {
  return (
    <div className=' font-oswald text-gray-700 mx-auto p-2  lg:mt-28 flex flex-col lg:flex-row '>
      {/* LEFT  */}
      <div className='mx-auto'>
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

        <ul className=' text-gray-200  text-lg text-center  grid grid-cols-1    font-robotoLight font-normal  md:text-2xl md:mt-4 lg:text-2xl   plus:text-2xl max-w-[500px]'>
          <li className='  bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
            Veľkoformátové obkladanie do rozmeru 160x320cm
          </li>
          <li className=' bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
            {' '}
            Rekonštrukcie bytov domov
          </li>
          <li className=' bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
            {' '}
            Montáž sanity
          </li>
          <li className=' bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
            {' '}
            Murárske práce
          </li>
          <li className=' bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
            {' '}
            Sadrokartóny
          </li>
          <li className=' bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
            {' '}
            Pokladka dlažby
          </li>
          <li className=' bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
            {' '}
            Jolly hrany
          </li>
          <li className=' bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
            {' '}
            Vonkajšej, dlažby na terče
          </li>
          <li className=' bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
            {' '}
            Maľovanie
          </li>
          <li className=' bg-black/20 border-b-2 border-color-green p-2 m-1 backdrop-blur-sm'>
            {' '}
            Realizacia krbov
          </li>
        </ul>
      </div>
      {/* RIGHT  */}
      <div className=' text-white mx-auto mt-24 lg:mt-0'>
        <h2 className='w-[90%] text-3xl text-center lg:text-6xl  mx-auto text-white p-4 m-2  bg-gray-700/10 transition-all duration-300 ease-in-out hover:scale-105 backdrop-blur-sm font-robotoLight font-thin border-2'>
          {/* <span className='text-color-green text-4xl font-normal'>
                    |
                  </span> */}
          <span className='text-color-seablue '>[</span>
          Taktiez vieme
          <span className='text-color-seablue'>]</span>
        </h2>
        <ul className='text-gray-200 text-lg text-center  grid grid-cols-1    font-robotoLight font-normal  md:text-2xl md:mt-4 lg:text-2xl   plus:text-2xl max-w-[500px]'>
          <li className='bg-black/20 border-b-2 border-color-seablue p-2 m-1 backdrop-blur-sm'>
            Zabezpezit dovoz materiálu{' '}
          </li>
          <li className='bg-black/20 border-b-2 border-color-seablue p-2 m-1 backdrop-blur-sm'>
            Vybaviť vám 30-40% zľavy na daný material.{' '}
          </li>
          <li className='bg-black/20 border-b-2 border-color-seablue p-2 m-1 backdrop-blur-sm'>
            Po prípade vám vieme poradiť ako najlepšie vybrať Obklad dlažbu do
            celého domu/bytu.
          </li>
          <li className='bg-black/20 border-b-2 border-color-seablue p-2 m-1 backdrop-blur-sm'>
            K dispozícii máme aj vodoinštalatera,elektrikára,a iných
            remeselníkov čo pre vás umožňuje kompletný servis.
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Nasasluzby
