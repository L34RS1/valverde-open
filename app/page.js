'use client'
import React from 'react'
import { Notebook } from './Notebook/Page.js'
import Header from './components/header.js'

export default function page() {
  return (
    <div className="main">
      <Header/>
      <Notebook />
    </div>
  )
}
