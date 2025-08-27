import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-2 mt-20'>
      <img src={assets.logo1} alt="" className='w-56' />
      <p className='flex-1 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright 2025 @ Priyansh - All Right Reserved</p>
      <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.instagram_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer
