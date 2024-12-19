import React from 'react'
import "../index.css"

const Features = () => {
  return (
    <div className='h-fit flex flex-col lg:my-32 my-24'>
      <div className='my-10'>
        <h1 className='lg:text-6xl text-5xl'>Discover the Magic Behind the Memories</h1>
      </div>

      <div className='my-10 h-fit flex flex-wrap justify-center'>
        <div className='w-[320] lg:h-[400] h-fit card2 rounded-xl flex flex-col justify-end items-center'>
          <h1 className='text-xl my-1'>Face Recognition Technology</h1>
          <p className='text-base m-2'>Automatically detects and categorizes faces for seamless organization of event photos.Automatically detects and tags faces in your event photos, making it easy to organize and find images of specific people without the hassle of manual tagging.</p>
        </div>
        <div className='w-[320] lg:h-[400] h-fit card2 rounded-xl flex flex-col justify-start items-center'>
          <h1 className='text-xl my-1'>Smart Search</h1>
          <p className='text-base m-2'>Quickly locate any photo by searching for faces, names, or even event details. No more sifting through endless galleries—find the moments that matter with just a few clicks.</p>
        </div>
        <div className='w-[320] lg:h-[400] h-fit card2 rounded-xl flex flex-col justify-end items-center'>
          <h1 className='text-xl my-1'>Secure Cloud Storage</h1>
          <p className='text-base m-2'>Store your photos safely and privately in the cloud, ensuring that your memories are accessible anytime, anywhere, while maintaining complete control over who can view them.</p>
        </div>
        <div className='w-[320] lg:h-[400] h-fit card2 rounded-xl flex flex-col justify-start items-center'>
          <h1 className='text-xl my-1'>Customizable Albums</h1>
          <p className='text-base m-2'>Create personalized albums for each event, attendee, or group, allowing you to tailor the photo organization to your preferences and easily share curated collections.</p>
        </div>
      </div>
    </div>
  )
}

export default Features
