import React from 'react'

const page = () => {
  return (
    <div className='h-fit'>
      <div className='top-0 h-screen full_bg1'>
        <div className='flex flex-col p-8 md:w-1/2 w-full h-full bg2 justify-end backdrop-blur-sm z-10'>
          <h1 className='md:text-4xl text-3xl mt-4 mb-2 sub'>Welcom to</h1>
          <h1 className='text-white md:text-6xl text-5xl mb-2'>Pixtrove</h1>
          <p className='lg:text-2xl text-xl my-2 w-4/5 sub'>Where Every Moment Is Treasured</p>
          <p className='lg:text-lg text-base my-2 w-4/5 para'>Let us help you find joy in every moment, as we organize your memories with care and ease.</p>
        </div>
      </div>

      <div className="about">
        <div className='flex flex-wrap justify-center items-center my-14'>
          <div className='lg:w-1/2'>
            <h1 className='md:text-5xl text-4xl'>Our Story:</h1>
            <h1 className='md:text-5xl text-4xl'>Passionate About Your Moments</h1>
            <p className='md:text-lg text-base px-3 my-2'>At <span>Pixtrove</span>, we believe every photo tells a story, and every memory deserves to be cherished. Our journey started with a simple vision: to make organizing and reliving your precious moments as seamless as possible. With a combination of cutting-edge technology and a heart for simplicity, we’re here to help you preserve your cherished memories effortlessly.</p>
            <p className='md:text-lg text-base px-3 my-2'>Whether it’s a wedding, family reunion, vacation, or just those everyday moments that matter most, we want to help you find and organize your memories with ease. Every smile, every moment, captured forever, with just a few simple clicks.</p>
          </div>
    
          <div className='lg:w-1/2'>
            <h1 className='md:text-5xl text-4xl'>How We Make Photo Organization Effortless</h1>
            <p className='md:text-lg text-base px-3 my-2'>We know how hard it can be to find the perfect photo among thousands of pictures scattered across your devices. That’s why we’ve harnessed the power of advanced <span>face recognition technology</span> to help you organize your photos based on people, events, and special moments.</p>
            <p className='md:text-lg text-base px-3 my-2'>Here’s how it works: Upload your photos, and our system does the heavy lifting. Using smart algorithms, we identify faces, group photos by people, and even sort them by event. No more endless searching. Your memories, organized.</p>
          </div>
        </div>
  
        <div className='flex flex-wrap justify-center items-center my-14'>
          <div className='bg4 md:h-[90vh] h-[50vh] md:w-2/5 w-full md:m-10 mx-4 my-6 rounded-lg'></div>

          <div className='lg:w-1/2'>
            <h1 className='md:text-5xl text-4xl'>Why You’ll Love Us</h1>
            <p className='md:text-lg text-base px-3 my-2'><span>Effortless Organization:</span> Forget the hours spent searching for your favorite photos. Upload and let our platform do the rest, ensuring your moments are neatly organized by people, event, and more.</p>
            <p className='md:text-lg text-base px-3 my-2'><span>Smart, Yet Simple:</span> We’ve made sure that our technology works quietly behind the scenes, so you don’t have to. With just a drag-and-drop action, our platform will take care of sorting and organizing for you—without complicating things.</p>
            <p className='md:text-lg text-base px-3 my-2'><span>Privacy and Security:</span> Your privacy matters to us. We prioritize the protection of your data, and our secure cloud storage ensures that your photos are safe and accessible only to you.</p>
            <p className='md:text-lg text-base px-3 my-2'><span>Your Photos, Your Way:</span> We understand that everyone’s memories are unique. Our customizable albums allow you to organize photos your way—by event, date, or any other personal label you choose.</p>
          </div>
        </div>
  
        <div className='my-14'>
          <h1 className='md:text-5xl text-4xl'>Our Mission: Transforming the Way You Relive Memories</h1>
          <p className='md:text-lg text-base px-3 my-2'>At <span>Pixtrove</span>, our mission is simple: To bring your memories to life in a way that’s easy, secure, and deeply personal. We want to help you relive your moments with ease, giving you more time to enjoy the present while still cherishing the past.</p>
          <p className='md:text-lg text-base px-3 my-2'>We understand the emotional connection people have to their photos. Our goal is to make those connections even more meaningful by offering an effortless, fun, and stress-free way to preserve and organize memories.</p>
        </div>
  
        <div className='flex flex-wrap justify-center items-center'>
          <div className='md:w-1/3 w-4/5'>
            <h1 className='md:text-5xl text-4xl'>Join Our Journey</h1>
            <p className='md:text-lg text-base px-3 my-2'>We’re excited to be a part of your memory-making experience. Whether you’re organizing family photos, travel memories, or important milestones, we’re here to help you every step of the way. Upload your photos today and see for yourself how easy and enjoyable it is to keep your memories in order.</p>
            <p className='md:text-lg text-base px-3 my-2'><span>We believe that memories should be easy to relive,</span> so why wait? Let us handle the organization, while you enjoy the moments that matter most.</p>
          </div>
  
          <div className='bg5 h-[60vh] md:w-1/4 w-full md:m-10 mx-4 my-6 rounded-lg'></div>
    
          <div className='md:w-1/3 w-4/5'>
            <h1 className='md:text-5xl text-4xl'>Why Choose Us?</h1>
            <p className='md:text-lg text-base px-3 my-2'><span>Personalized Experience:</span> We adapt to your unique needs, so your memories reflect your style and preferences.</p>
            <p className='md:text-lg text-base px-3 my-2'><span>Constant Improvement:</span> We’re always working to improve our platform, so you can expect new, exciting features that make managing your photos even easier.</p>
            <p className='md:text-lg text-base px-3 my-2'><span>Community-Focused:</span> We’re more than just a platform—we’re a community that values the preservation of memories. We’re here for you and dedicated to providing the best experience possible.</p>
          </div>
        </div>
  
        <div>
          <p className='md:text-lg text-base px-3 my-4'>Come join us, and let's create a new way to cherish the moments that matter most to you. <span>Pixtrove</span> is your trusted partner in memory organization.</p>
        </div>
        </div>
    </div>
  )
}

export default page
