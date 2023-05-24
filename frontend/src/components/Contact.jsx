import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Contact = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleToggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div id='contact' class='min-h-screen mt-20 text-gray-100'>
      <div class='text-center mt-20  max-w-[270px] mx-auto '>
        <h1 class='text-3xl lg:text-6xl text-white p-4  bg-gray-700/10 transition-all duration-300 ease-in-out hover:scale-105 backdrop-blur-md font-robotoLight font-thin border-2'>
          <span class='text-color-green '>[</span>
          <span></span>Kontakt
          <span class='text-color-green'>]</span>
        </h1>
      </div>

      {/* TOGGLE */}
      <div className='mx-auto min-w-[350px] md:max-w-[700px] lg:max-w-[1000px]'>
        <div className='flex items-center justify-between mx-2 mt-10 md:mx-auto bg-gray-600/40 backdrop-blur-md p-2 rounded-md'>
          <h4 className='text-2xl md:text-4xl text-md font-bold text-gray-100 font-robotoLight  '>
            Aký je postup keď sa rozhodnete <br />
            <span className='text-color-green rotate-2'>
              pre realizáciu od nás?
            </span>
          </h4>
          {isOpen ? (
            <FaMinus
              size={40}
              className='m-2 transition-all duration-500 animate-bounce '
              onClick={handleToggle}
            />
          ) : (
            <FaPlus
              size={40}
              className='m-2 transition-all duration-500 animate-pulse'
              onClick={handleToggle}
            />
          )}
        </div>

        {/* HIDDEN TOGGLE  */}

        <ul
          className={`transition-all duration-500 ease-in-out text-xl md:text-3xl  list-decimal list-inside mx-2 font-robotoLight md:mx-auto  ${
            isOpen ? ' opacity-100' : 'opacity-0 translate-y-[+100%]'
          }`}
        >
          <li className='bg-black bg-gray-600/40 backdrop-blur-md p-2 rounded-md m-2 md:my-6 border-l-8 border-color-green hover:scale-105 duration-300'>
            Telefonicky,Emailove oboznámenie s klientom o realizácii, predstave
          </li>
          <li className='bg-black bg-gray-600/40 backdrop-blur-md p-2 rounded-md m-2 md:my-6 border-l-8 border-color-green hover:scale-105 duration-300'>
            Prípadná obhliadka kdekoľvek v Bratislave a okolí Oravy
          </li>
          <li className='bg-black bg-gray-600/40 backdrop-blur-md p-2 rounded-md m-2 md:my-6 border-l-8 border-color-green hover:scale-105 duration-300'>
            Cenová ponúka
          </li>
          <li className='bg-black bg-gray-600/40 backdrop-blur-md p-2 rounded-md m-2 md:my-6 border-l-8 border-color-green hover:scale-105 duration-300'>
            Po odsúhlasení Možný termín{' '}
          </li>
          <li className='bg-black bg-gray-600/40 backdrop-blur-md p-2 rounded-md m-2 md:my-6 border-l-8 border-color-green hover:scale-105 duration-300'>
            Realizácia obkladov a dlažieb- príprava Montáž a finálne dokončenie
          </li>
          <li className='bg-black bg-gray-600/40 backdrop-blur-md p-2 rounded-md m-2 md:my-6 border-l-8 border-color-green hover:scale-105 duration-300'>
            Odovzdávanie, kontrola práce a obojsmerna spokojnosť
          </li>
        </ul>
      </div>
      {/* END TOGGLE */}
    </div>
  )
}
export default Contact
