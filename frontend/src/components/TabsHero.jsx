const TabsHero = () => {
  return (
    <div className=' max-w-[650px]  h-[13.125rem]  m-2 p-2 justify-between items-center hidden lg:flex'>
      {/* TAB1 */}
      <div className='w-[180px] h-[180px] hover:scale-[2] duration-300  transition-all ease-out hover:z-20 '>
        {/* Photo */}
        <div className='hero-tab1 mix-blend-lighten items-center rounded-sm  justify-center h-screen max-h-full scale-100 '></div>
      </div>
      {/* TAB2 */}
      <div className='w-[180px] h-[180px] hover:scale-[2] duration-300  transition-all ease-out hover:z-20'>
        {/* Photo */}
        <div className='hero-tab2 mix-blend-lighten items-center rounded-sm  justify-center h-screen max-h-full scale-100'></div>
      </div>
      {/* TAB3 */}
      <div className='w-[180px] h-[180px] hover:scale-[2] duration-300  transition-all ease-out hover:z-20'>
        {/* Photo */}
        <div className='hero-tab3 mix-blend-lighten items-center rounded-sm  justify-center h-screen max-h-full scale-100'></div>
      </div>
    </div>
  )
}
export default TabsHero
