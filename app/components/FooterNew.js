'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function FooterNew() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, y:-30}}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
    <div className='flex justify-center'>
      <div className='flex m-4 leading-relaxed antialiased text-gray-500 text-[12px] font-regular'>Israel Valverde © 2023
        </div>
      </div>
      </motion.div>
  )
}
