import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion, delay } from 'motion/react'

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

      className='flex flex-col items-center justify-center m-20 p-12'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>User Reviews</h1>
      <p className='text-gray-500 mb-12'>What Our Customers Say</p>
      <div className='flex flex-wrap gap-6'>
        {testimonialsData.map((testimonialsData, index) => (
          <div key={index} className='bg-white/20 shadow-md rounded-lg border p-6 w-80 cursor-pointer hover:scale-[1.03] transition-all'>
            <div className='flex flex-col items-center'>
              <img src={testimonialsData.image} alt="" className='rounded-full w-14' />
              <h2 className='text-xl font-semibold mt-3'>{testimonialsData.name}</h2>
              <p className='text-gray-500 mb-4'>{testimonialsData.role}</p>
              <div className='flex mb-4'>
                {Array(testimonialsData.stars).fill().map((item, index) => (
                  <img key={index} src={assets.star_icon} alt="" />
                ))}
              </div>
              <p className='text-center text-sm text-gray-600'>{testimonialsData.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
