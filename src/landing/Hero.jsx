import React from 'react'
import Earth from '../components/ui/Earth'
import { BackgroundBeamsWithCollision } from '../components/ui/Test2'

const Hero = () => {
  return (
    <>
      <Earth />
      <BackgroundBeamsWithCollision />
      <div className="z-[2] absolute left-0 top-0 w-full  flex justify-center items-center flex-wrap h-screen">
      <div className='tex'>Travelling Souls</div>

      </div>
    </>
  )
}

export default Hero
