const About = () => {
  return (
    <div id='about' className=' max-w-[1200px] mx-auto  h-full flex h-screen'>
      <div className=' mt-10 font-montserrat font-bold w-full m-2'>
        {/* o nas */}
        <div className=' block w-full'>
          <h1 className='text-6xl my-6'>
            <span className='text-color-darkseablue inline text-7xl font-bold '>
              |
            </span>
            O nas
          </h1>
        </div>
        {/* text */}
        <p className='backdrop-blur-md p-4 font-robotoLight bg-black/40 text-gray-200'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          <br />
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          <br />
          <br />
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          <br />
          pariatur. Excepteur sint occaecat cupidatat non
        </p>
      </div>
    </div>
  )
}
export default About
