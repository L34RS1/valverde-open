'use client'
import React from 'react'
import Hero from './components/Hero.js'
import UserInputTw from './components/UserInputTw.js'

export default function page() {
  return (
    <>
    <div className="grid justify-items-center">
      <Hero/>
      <UserInputTw/>
    </div>
  </>
  )
}
