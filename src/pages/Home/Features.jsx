import React from 'react'
import feature from "../../assets/about/feature.png"
import { FiCheck } from "react-icons/fi";
const Features = () => {
  return (
    <div className='section-container grid grid-cols-1 sm:grid-cols-2'>

        {/* feature image */}
        <div>
            <img src={feature} alt="feature" className='h-60' />
        </div>

        {/* feature description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mt-3 capitalize leading-normal lg:leading-snug lg:w-3/4">
            We Provide many features you can use </h2>
          <p className="text-gray-600 mt-4 text-sm mx-auto">You can explore the features that we provide with fun and have their own functions each feature.</p>

          <div className='flex flex-row gap-2 mt-4 items-center'>
            <div className='px-1 py-1 rounded-full bg-green-600'>
              <FiCheck className=' text-white font-bold text-sm'/>
            </div>
            <p className='text-sm'>Powerfull online protection.</p>
          </div>

          <div className='flex flex-row gap-2 mt-4 items-center'>
            <div className='px-1 py-1 rounded-full bg-green-600'>
              <FiCheck className=' text-white font-bold text-sm'/>
            </div>
            <p className='text-sm'>Internet without borders.</p>
          </div>

          <div className='flex flex-row gap-2 mt-4 items-center'>
            <div className='px-1 py-1 rounded-full bg-green-600'>
              <FiCheck className=' text-white font-bold text-sm'/>
            </div>
            <p className='text-sm'>Supercharged VPN</p>
          </div>

          <div className='flex flex-row gap-2 mt-4 items-center'>
            <div className='px-1 py-1 rounded-full bg-green-600'>
              <FiCheck className=' text-white font-bold text-sm'/>
            </div>
            <p className='text-sm'>No specific time limits.</p>
          </div>

        </div>
    </div>
  )
}

export default Features