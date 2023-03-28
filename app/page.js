'use client'
import React from 'react'
import GPT3 from './components/GPT3.js'
import Hero from './components/Hero.js'

export default function page() {
  return (
    <div className="grid justify-items-center">
      <Hero/>
      <GPT3/>
    </div>
  )
}
