import React from 'react'
import hero from '../../assets/about/hero.png'
const Hero = () => {
  return (
    <div className='section-container '>
        <div className='flex flex-col md:flex-row items-center justify-between '>
            <div className='lg:w-1/2'>
                <h1 className='text-4xl font-bold lg:w-3/4 leading-snug'>Want anything to be easy with laslesVPN</h1>
                <p className='text-sm lg:w-3/4 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum vel nisi suscipit laoreet. Donec in condimentum lectus.</p>
                <button className='bg-red-500 px-8 shadow-2xl shadow-red-500 py-2 mt-5 rounded-md text-white cursor-pointer hover:bg-red-700 transition-colors duration-200'>Get Started</button>
            </div>
            
            <div className='lg:w-1/2 flex lg:justify-end'>
                <img src={hero} alt='Hero Image' className='' />
            </div>
        </div>

        
    </div>
  )
}

export default Hero