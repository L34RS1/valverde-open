import React from 'react'
import { motion } from 'framer-motion'


export default function Hero() {
  return (
    <div className='flex flex-col text-center leading-tight justify-center px-12 mb-0 pb-0'>
        <motion.div
      className="box"
      initial={{ opacity: 0, y:-50}}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: .6,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        <p className='font-bold subpixel-antialiased text-violet11 text-4xl lg:text-6xl'>Find your next great read!</p> <br/> <br/>
        </motion.div>
        <motion.div
      className="box"
      initial={{ opacity: 0, y:-30}}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: .8,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        <p className=" text-gray-400 text-sm leading-normal block">
      Let AI help! Simply type in your Twitter username and let the magic happen.      </p>
      </motion.div>
    </div>
  )
}
