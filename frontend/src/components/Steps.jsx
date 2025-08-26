import React from 'react'
import { stepsData } from '../assets/assets'
import {motion, delay} from 'motion/react'

const Steps = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center m-32'>
      <h1>How AI Generation Works</h1>
      <p>Transform Texts Into Stuning Images</p>
      <div>
        {stepsData.map((item, index)=>(
          <div key={index}>
            <img width={40} src={item.icon} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
