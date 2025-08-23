import { assets } from '../assets/assets'
import {delay, motion} from 'motion/react'

const Header = () => {
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    >
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border hover:scale-105 border-neutral-500 transition-all duration-700'>
        <p>Transform your words into an art</p>
        <img src={assets.star_icon} alt="" />
        
      </div>
      <h1 className='text-4xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center'>Transform your Words into an <span className='text-red-600 font-bold'>Art</span> in seconds</h1> 
      <p className='text-center max-w-xl mx-auto mt-5'>Unleash boundless creativity with AI – Turn your thoughts into stunning visual art instantly. Just type, and watch the magic unfold.</p>
      <button className='sm:text-lg text-white bg-pink-700 w -auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer'>Generate Image
      <img src={assets.star_group} alt="" className='h-6' />
      </button>
    </motion.div>
  )
}

export default Header
