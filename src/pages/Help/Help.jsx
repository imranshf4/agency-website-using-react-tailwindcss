import React from 'react';

const Help = () => {
  return (
    <div className='section-container p-6'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='lg:w-1/2'>
          <h1 className='text-4xl font-bold leading-snug'>Get in Touch with Us</h1>
          <p className='text-sm mt-4'>We would love to hear from you! Please fill out the form below to reach us.</p>
          <form className='mt-5'>
            <div className='mb-4'>
              <label className='block text-sm mb-2' htmlFor='name'>Name</label>
              <input type='text' id='name' className='border border-gray-300 rounded-md w-full p-2' placeholder='Your Name' required />
            </div>
            <div className='mb-4'>
              <label className='block text-sm mb-2' htmlFor='email'>Email</label>
              <input type='email' id='email' className='border border-gray-300 rounded-md w-full p-2' placeholder='Your Email' required />
            </div>
            <div className='mb-4'>
              <label className='block text-sm mb-2' htmlFor='message'>Message</label>
              <textarea id='message' className='border border-gray-300 rounded-md w-full p-2' placeholder='Your Message' rows='4' required></textarea>
            </div>
            <button type='submit' className='bg-red-500 px-8 py-2 mt-4 rounded-md text-white cursor-pointer hover:bg-red-700 transition-colors duration-200'>
              Send Message
            </button>
          </form>
        </div>

        <div className='lg:w-1/2 flex lg:justify-end mt-6 md:mt-0'>
         
        </div>
      </div>
    </div>
  );
}

export default Help;
