const About = () => {
  return (
    <div id='about' class='min-h-auto '>
      <div class='text-center mt-20 max-w-[270px] mx-auto'>
        <h1 class='text-3xl lg:text-6xl text-white p-4  bg-gray-700/10 transition-all duration-300 ease-in-out hover:scale-105 backdrop-blur-md font-robotoLight font-thin border-2'>
          <span className='text-color-green '>[</span>
          <span></span>O nás
          <span className='text-color-green'>]</span>
        </h1>
      </div>
      <div className='flex mt-16 bg-gray-800/30 backdrop-blur-sm p-6 hover:scale-105 duration-150 ease-linear '>
        <p className='text-5xl max-w-[700px] text-white font-thin font-robotoLight'>
          Sme partia obkladačov s dlhoročnými skúsenosťami čo sa týka obkladov
          dlažieb sme jedny s prvých čo na Slovensku začali robiť s
          veľkoformatovymi dlažbami do rozmerov 160x320cm mame cit pre detail
          estetickosť sme priateľský a pracujeme na profesionálnej úrovni{' '}
        </p>
      </div>
      {/*  */}
      <div>
        <h2 className='text-8xl text-center font-bold m-10 mt-20 text-gray-100 font-robotoLight '>
          Prečo realizáciu
          <span className='text-color-green rotate-2'> od nás?</span>
        </h2>
        <ul className='mx-auto text-4xl list-disc max-w-[800px] text-gray-100 backdrop-blur-md font-thin bg-black'>
          <li className='p-2'>
            viac ako 25 ročne skúsenosti s obkladačskymi prácami{' '}
          </li>
          <li className='p-2'>skvelý tým majstrov</li>
          <li className='p-2'>skvelý a ľudský prístup k majiteľom</li>
          <li className='p-2'>kvalita za dostupnú cenu pre všetkých</li>
          <li className='p-2'>vysoká kvalita cit pre detail a estetiku</li>
          <li className='p-2'>
            Možnosť vybaviť obklady Dlažby za rozumné ceny u dodávateľov
          </li>
          <li className='p-2'>
            Možnost zabezpečiť material na realizaciu za 30-40% zľavy
          </li>
        </ul>
      </div>
    </div>
  )
}
export default About
