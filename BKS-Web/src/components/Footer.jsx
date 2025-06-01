import { AiOutlineSend, AiOutlineMail, AiOutlineMobile, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className=' bg-black/70 w-full h-auto  text-white'>
      <div className='justify-center flex flex-col md:flex-row lg:gap-48 md:gap-12 pt-4'>
        <div className='flex  flex-row justify-around'>
          {/*  */}
          {/* Menu */}
          <section className='text-center flex flex-col '>
            <h4 className='underline m-2 p-1 underline-offset-4'>Menu</h4>
            <ul>
              <li className='hover:underline duration-300 m-1'>
                <a href='#home'>Domov</a>
              </li>
              <li className='hover:underline duration-300 m-1'>
                <a href='#about'>O nás</a>
              </li>
              <li className='hover:underline duration-300 m-1'>
                <a href='#ourServices'>Naše služby</a>
              </li>
              <li className='hover:underline duration-300 m-1'>
                <a href='#gallery'>Galéria</a>
              </li>
              <li className='hover:underline duration-300 m-1'>
                <a href='#contact'>Kontakt</a>
              </li>
            </ul>
          </section>

          {/*  */}
          {/* Social  */}
          <section className='text-center flex flex-col lg:ml-52 md:ml-32'>
            <h4 className='underline m-2 p-1 underline-offset-4'>Social</h4>
            <div className='mx-auto'>
              <a href='https://www.facebook.com/profile.php?id=100064028439648' target='_blank'>
                {' '}
                <AiFillFacebook size={50} className='hover:scale-105 duration-300 m-2' />
              </a>
              <a href='https://www.instagram.com/bks.obklady?igsh=ZXdhcDU2ZXFvNTZu' target='_blank'>
                <AiOutlineInstagram size={50} className='hover:scale-110 duration-300 m-2' />
              </a>
            </div>
          </section>
        </div>
        <span className='md:hidden w-[70%] h-[1px] bg-color-green mx-auto my-8'></span>

        {/*  */}
        {/* Kontakt  */}
        <section className='text-center'>
          <h4 className='underline m-2 p-1 underline-offset-4'>Kontakt</h4>
          <div className='flex flex-col'>
            <AiOutlineMail className='mx-auto text-color-green m-1' size={30} />
            bksobkladacskeprace@gmail.com
          </div>
          <div className='m-6'>
            <AiOutlineMobile className='mx-auto text-color-green m-1' size={30} />
            +421 944 114 368
          </div>
        </section>
        <span className='md:hidden w-[70%] h-[1px] bg-color-green mx-auto my-8'></span>
      </div>
      <p className='text-center text-gray-600 p-2'>
        <a href='https://zilka-tomas.com/'> © 2023 | Zilka-Tomas.Com</a>
      </p>
    </div>
  )
}
export default Footer
