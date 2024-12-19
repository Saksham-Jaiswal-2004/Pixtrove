import React from 'react'
import { AiFillPicture } from "react-icons/ai";
import { TbMoodSearch } from "react-icons/tb";
import { TbImageInPicture } from "react-icons/tb";
import { IoAlbums } from "react-icons/io5";


const Hiw = () => {
  return (
    <div className='h-fit flex flex-col my-32' id='hiw'>
      <div className='my-14'>
        <h1 className='lg:text-6xl text-5xl my-2'>How It Comes Together,</h1>
        <h1 className='lg:text-6xl text-4xl my-2'>Your Memories, Seamlessly Organized</h1>
      </div>

      <div className='flex flex-col'>
        <div className='w-full flex flex-wrap items-center'>
          <div className='lg:w-1/2 w-full card3 lg:my-10 my-4'>
            <span className='text-lg mx-4'>Step 1</span>
            <h1 className='text-5xl m-2'>Upload Your Photo</h1>
            <p className='mx-2 p-1'>Start by uploading a photo or multiple images with just a click. Our platform supports a variety of formats and ensures a smooth, hassle-free upload experience. Whether it’s personal photos or event memories, you can quickly add them to get started.</p>
          </div>
          <div className='h-[150] lg:w-1/2 w-full flex justify-center items-center'>
            <AiFillPicture className='text-8xl sub'/>
          </div>
        </div>

        <div className='w-full flex flex-wrap flex-row-reverse justify-end items-center'>
          <div className='lg:w-1/2 w-full card3 lg:my-10 my-4'>
            <span className='text-lg mx-4'>Step 2</span>
            <h1 className='text-5xl m-2'>Smart Face Recognition</h1>
            <p className='mx-2 p-1'>Using advanced face recognition technology, our system scans your images to identify faces with incredible accuracy. It groups photos based on similarities, making it easier for you to locate specific people or moments effortlessly.</p>
          </div>
          <div className='h-[150] lg:w-1/2 w-full flex justify-center items-center'>
            <TbMoodSearch className='text-8xl sub'/>
          </div>
        </div>

        <div className='w-full flex flex-wrap items-center'>
          <div className='lg:w-1/2 w-full card3 lg:my-10 my-4'>
            <span className='text-lg mx-4'>Step 3</span>
            <h1 className='text-5xl m-2'>Instant Results</h1>
            <p className='mx-2 p-1'>Once processed, you’ll get instant results tailored to your search. Whether you’re looking for pictures from a specific event or moments featuring a particular person, the platform organizes everything in seconds for your convenience.</p>
          </div>
          <div className='h-[150] lg:w-1/2 w-full flex justify-center items-center'>
            <TbImageInPicture className='text-8xl sub'/>
          </div>
        </div>

        <div className='w-full flex flex-wrap flex-row-reverse justify-end items-center'>
          <div className='lg:w-1/2 w-full card3 lg:my-10 my-4'>
            <span className='text-lg mx-4'>Step 4</span>
            <h1 className='text-5xl m-2'>Customize Albums</h1>
            <p className='mx-2 p-1'>Enjoy complete control by creating personalized albums for your memories. Use simple drag-and-drop tools to sort, categorize, and label your photos to suit your preferences, ensuring your moments are beautifully organized.</p>
          </div>
          <div className='h-[150] lg:w-1/2 w-full flex justify-center items-center'>
            <IoAlbums className='text-8xl sub'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hiw
