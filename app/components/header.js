import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex w-screen justify-center'>
    <div className='flex flex-row justify-between w-16 m-14'>
      <Image src="/logo.svg" alt="logo" width={100} height={50} />
    </div>
    </div>
  )
}
