import { RiContactsFill } from 'react-icons/ri'
import { BiMap } from 'react-icons/Bi'
import LazyLoad from 'react-lazy-load'
import React from 'react'

const About = () => {
  return (
    <div id='about' class='min-h-screen'>
      <div class='text-center  max-w-[270px] mx-auto mt-[50px] lg:mt-[200px] grid'>
        <h1 class='text-3xl lg:text-6xl text-white p-4  bg-gray-700/10 transition-all duration-300 ease-in-out hover:scale-105 backdrop-blur-md font-robotoLight font-thin border-2 mt-20'>
          <span className='text-color-green '>[</span>
          <span></span>O nás
          <span className='text-color-green'>]</span>
        </h1>
      </div>

      <div className='m-8 flex flex-col md:gap-6 md:flex-row bg-gray-800/40 backdrop-blur-sm p-2 hover:scale-105 duration-150 ease-linear justify-around items-center '>
        {/* LEFT ABOUT  */}

        <p className='text-xl text-center md:text-3xl lg:text-4xl max-w-[600px] text-white font-normal font-robotoLight'>
          Sme partia obkladačov s{' '}
          <span className='text-color-green'>dlhoročnými</span> skúsenosťami na
          trhu.
          <br />
          Patríme k jedným z prvých, ktorí na Slovensku začali pracovať s
          veľkoformátovými dlažbami do rozmerov 160x320cm.
          <br />
          Máme
          <span className='text-color-green'> cit pre detail a estetiku</span>,
          sme priateľský, a pracujeme na profesionálnej úrovni.{' '}
        </p>

        <span className='m-2 h-1 bg-color-green w-[80%] bg-opacity-60 rounded-full md:hidden'></span>
        {/* RIGHT ABOUT  */}
        <div className='max-w-[600px]'>
          <h2 className='text-6xl text-center font-bold m-4  text-gray-100 font-robotoLight '>
            Miesta kde
            <span className='text-color-green rotate-2'> pôsobíme</span>
            <BiMap className='mx-auto  text-5xl ' />
          </h2>
          <p className='text-3xl md:text-4xl max-w-[600px] text-white font-thin font-robotoLight text-center'>
            Bratislavský kraj, Trnavský kraj, Trenčiansky kraj, Banskobystrický
            kraj, Žilinský kraj
          </p>

          <a
            href='#contact'
            className=' bg-color-green m-10 hover:bg-color-seablue hover:scale-110 hover:rotate-2 duration-300 transition-all text-gray-900 text-2xl shadow-2xl py-2 px-4 rounded-md flex uppercase hover:text-gray-200 items-center justify-center max-w-[300px] mx-auto'
          >
            <RiContactsFill size={30} className='mr-2 ' />
            Mám záujem
          </a>
        </div>
      </div>
      {/*  */}
      {/* PRECO U NAS ???  */}
      <div className='lg:mt-52'>
        <h2 className='md:text-8xl text-6xl text-center mx-auto p-2 font-bold m-10  text-gray-100 font-robotoLight backdrop-blur-sm '>
          Prečo realizáciu
          <span className='text-color-green rotate-2'> od nás?</span>
        </h2>

        <ul className='mx-auto md:text-3xl text-xl  md:text-left max-w-fit text-white  font-robotoLight'>
          <li
            className='p-4 md:px-16 bg-gray-900/70 m-4 shadow-2xl hover:scale-105 duration-150 ease-in rounded-sm '
            data-aos='fade-in'
          >
            <span className='text-color-green md:text-4xl text-2xl font-extrabold'>
              |{' '}
            </span>
            <span className='text-color-green md:text-3xl text-xl'>Zdarma</span>{' '}
            kompletná cenová ponuka
          </li>
          <li
            className='p-4 md:px-16 bg-gray-900/70 m-4 shadow-2xl hover:scale-105 duration-150 ease-in rounded-sm '
            data-aos='fade-in'
          >
            <span className='text-color-green md:text-4xl text-2xl font-extrabold'>
              |{' '}
            </span>
            Viac ako{' '}
            <span className='text-color-green md:text-3xl text-xl'>25</span>{' '}
            ročné skúsenosti s obkladačskými prácami{' '}
          </li>
          <li
            className='p-4 md:px-16 bg-gray-900/70 m-4 shadow-2xl hover:scale-105 duration-150 ease-in rounded-md'
            data-aos='fade-in'
          >
            <span className='text-color-green md:text-4xl text-2xl font-extrabold'>
              |{' '}
            </span>
            Skvelý tím majstrov
          </li>
          <li
            className='p-4 md:px-16 bg-gray-900/70 m-4 shadow-2xl hover:scale-105 duration-150 ease-in rounded-md'
            data-aos='fade-in'
          >
            <span className='text-color-green md:text-4xl text-2xl font-extrabold'>
              |{' '}
            </span>
            Ľudský prístup k majiteľom
          </li>
          <li
            className='p-4 md:px-16 bg-gray-900/70 m-4 shadow-2xl hover:scale-105 duration-150 ease-in rounded-md'
            data-aos='fade-in'
          >
            <span className='text-color-green md:text-4xl text-2xl font-extrabold'>
              |{' '}
            </span>
            Kvalita za dostupnú{' '}
            <span className='text-color-green md:text-3xl text-xl'>cenu</span>{' '}
            pre všetkých
          </li>
          <li
            className='p-4 md:px-16 bg-gray-900/70 m-4 shadow-2xl hover:scale-105 duration-150 ease-in rounded-md'
            data-aos='fade-in'
          >
            <span className='text-color-green md:text-4xl text-2xl font-extrabold'>
              |{' '}
            </span>
            <span className='text-color-green md:text-3xl text-xl'>Cit</span>{' '}
            pre detail a estetiku
          </li>
          <li
            className='p-4 md:px-16 bg-gray-900/70 m-4 shadow-2xl hover:scale-105 duration-150 ease-in rounded-md'
            data-aos='fade-in'
          >
            <span className='text-color-green md:text-4xl text-2xl font-extrabold'>
              |{' '}
            </span>
            Možnosť vybaviť obklady a dlažby za rozumné ceny u dodávateľov
          </li>
          <li
            className='p-4 md:px-16 bg-gray-900/70 m-4 shadow-2xl hover:scale-105 duration-150 ease-in rounded-md'
            data-aos='fade-in'
          >
            <span className='text-color-green md:text-4xl text-2xl font-extrabold'>
              |{' '}
            </span>
            Tiež vieme zabezpečiť materiál na realizáciu{' '}
            <span className='text-color-green md:text-3xl text-xl'>
              za 30-40% zľavy
            </span>{' '}
          </li>
        </ul>
      </div>
    </div>
  )
}
export default About
