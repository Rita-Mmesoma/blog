import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[url("/city.avif")] bg-cover bg-center h-[30rem] md:h-[45rem]'>
        <div className='p-8 sm:p-16 md:p-32 lg:p-56 xl:p-72 items-center flex flex-col h-full justify-center text-center'>
            <div className='bg-stone-900/90 w-full max-w-4xl p-8  flex flex-col justify-center gap-3'>
                <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white'> Talking Business.</h1>
                <p className=' about text-lg sm:text-xl tracking-wider text-gray-300'> A BLOG ABOUT BUSINESS & CONSULTING</p>
            </div>
        </div>
    </div>
  )
}

export default Hero