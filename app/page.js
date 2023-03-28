'use client'
import React from 'react'
import GPT31 from './components/GPT31.js'
import Hero from './components/Hero.js'

export default function page() {
  return (
    <div className="flex flex-col items-center gap-0">
      <Hero/>
      <GPT31/>
    </div>
  )
}
