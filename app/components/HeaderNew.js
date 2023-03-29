'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeaderNew() {
  return (
    <motion.div
    className="box"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.3,
      ease: [0, 0.71, 0.2, 1.01]
    }}>
    <div className='flex w-screen justify-center'>
    <div className='flex flex-row justify-between w-16 m-14'>
      
      <Image src="/logo.svg" alt="logo" width={100} height={50} />
    </div>
    </div>
    </motion.div>
  )
}
