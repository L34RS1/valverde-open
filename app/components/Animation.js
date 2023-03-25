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
    <div className="container max-w-md" ref={animationRef} />
    <div className='flex justify-items-center'>
    <Hero/>
    </div>
    </>
  )
}
