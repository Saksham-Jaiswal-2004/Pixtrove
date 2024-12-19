import React from 'react'
import "../index.css"

const Benefits = () => {
  return (
    <div className='h-fit my-40'>
      <div className='flex flex-col'>
        <h1 className='lg:text-6xl text-5xl my-2'>Made for You,</h1>
        <h1 className="lg:text-6xl text-5xl my-2">The Simple Joy of Your Memories</h1>
      </div>

      <div className='w-full flex flex-wrap justify-center items-center my-28'>
        <div className='w-fit p-4 flex flex-col flex-wrap justify-center items-end'>
          <img src='/images/Benefit.jpg' alt="Benefits Pic" className='w-[600] lg:h-[600] h-[500] rounded-lg object-cover mix-blend-luminosity'/>
        </div>
  
        <div className='w-fit flex flex-col flex-wrap justify-center item-center'>
          <div className="card text-left">
            <h1 className='text-xl font-thin my-2'>Your Memories, Perfectly Organized</h1>
            <p className='text-base my-1 para'>Say goodbye to the mess! Our smart face recognition organizes your event photos effortlessly, so you can focus on cherishing the moments.</p>
          </div>
          <div className="card text-left">
            <h1 className='text-xl font-thin my-2'>Find Yourself Instantly</h1>
            <p className='text-base my-1 para'>Upload your own photo and let our smart search find every picture you're in—because your memories deserve to shine.</p>
          </div>
          <div className="card text-left">
            <h1 className='text-xl font-thin my-2'>Albums as Unique as You</h1>
            <p className='text-base my-1 para'>Create personalized albums for every event or loved one, tailored to reflect your style and story.</p>
          </div>
          <div className="card text-left">
            <h1 className='text-xl font-thin my-2'>Designed with You in Mind</h1>
            <p className='text-base my-1 para'>Easy to use, intuitive, and built to make every moment memorable—because you deserve the best for your memories.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
