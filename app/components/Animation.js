'use client'
import React, { useRef, useEffect } from 'react';
import Hero from './Hero.js';

const lottie = require('lottie-web');

export default function Anim() {
  const animationRef = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/anim.json',
    });
  }, []);

  return (
    <>
    <div className="container w-1/3" ref={animationRef} />
    <div className='grid justify-items-start'>
    <Hero/>
    </div>
    </>
  )
}
