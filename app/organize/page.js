import React from 'react'
import "../index.css"
import Previews from '../components/Previews'
import Cta from '../components/Cta'

const page = () => {
  return (
    <div>
      <div className='top-0 h-screen full_bg3'>
        <div className='flex flex-col p-8 md:w-1/2 w-full h-full bg2 justify-end backdrop-blur-sm z-10'>
          <h1 className='text-white md:text-5xl text-4xl mt-6 mb-2'>Your Memories,</h1>
          <h1 className='text-white md:text-5xl text-4xl mb-6 mt-2'>Organized with a Single Drop</h1>
          <p className='md:text-lg text-base my-2 w-4/5 sub'>Upload your photos effortlessly and let our smart technology sort, organize, and fetch them for you.</p>
          <p className='md:text-lg text-base my-2 para'>Your memories, your way.</p>
        </div>
      </div>
      <Previews/>
      <Cta/>
    </div>
  )
}

export default page
