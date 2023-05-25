import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { AiOutlineSend } from 'react-icons/ai'
const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      } else {
        // Ak je odoslanie neúspešné, vykonajte potrebnú akciu (napr. zobrazenie chybovej správy)
      }
    } catch (error) {
      console.error('Error:', error)
      // Zobrazenie chybovej správy
    }
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
          className={` transition-all duration-1000 ease-in-out text-xl md:text-3xl  list-decimal list-inside mx-2 font-robotoLight md:mx-auto  ${
            isOpen ? ' h-auto block ' : 'h-0 translate-y-[100%] hidden '
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

      {/* FORMULAR + CONTACT INFO */}
      <div className='mt-[100px] flex flex-col lg:flex-row mx-auto  justify-around'>
        <form
          onSubmit={handleSubmit}
          action='https://formspree.io/f/xbjeekgb'
          className='flex flex-col  border '
        >
          <div className='mx-auto relative px-2'>
            {submitted === true && (
              <div className='absolute bg-gray-800 rounded-lg backdrop-blur-lg top-0 bottom-0 left-0 right-0'>
                <h2 className='text-center text-4xl flex justify-center translate-y-[250%]'>
                  Sprava bola odoslana,{' '}
                  <span className='text-color-green font-robotoLight'>
                    dakujeme.
                  </span>
                </h2>
              </div>
            )}

            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Zadaj Email'
              className='p-4 text-black w-full my-4'
            />

            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder='Zadaj meno'
              className='p-4 text-black  w-full my-4'
            />

            <textarea
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder='Text'
              className='p-4 text-black w-full my-4'
            />
          </div>
          <button
            type='submit'
            className='bg-color-green m-2 hover:bg-color-seablue hover:scale-110 hover:rotate-2 duration-300 transition-all text-gray-900 text-3xl shadow-2xl py-2 px-10 rounded-md flex uppercase hover:text-gray-200 items-center justify-center max-w-[300px] mx-auto'
          >
            Odoslat <AiOutlineSend className='m-2' size={35} />
          </button>
        </form>
        <div className='border max-w-[600px] w-full mt-[50px] lg:mt-0'>
          <h2>Contact info</h2>
        </div>
      </div>
      {/*  */}
      {/*  */}
    </div>
  )
}
export default Contact
