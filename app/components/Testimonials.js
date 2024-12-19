import React from 'react'
import Link from 'next/link'
import "../index.css"

const Testimonials = () => {
  return (
    <div className='h-fit my-40'>
      <div className='my-14'>
        <h1 className='lg:text-6xl text-5xl my-2'>Cherished by Users Like You</h1>
      </div>

      <div className='flex flex-wrap justify-center items-center'>
        {/* A */}
        <div className='w-full h-fit lg:w-1/2 flex flex-col justify-center items-center'>
          <div className='w-[95%] h-[200] overflow-hidden ov test my-2 lg:p-6 p-3 shadow-inner'>
            <h1>User-1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta consequatur dolore voluptatem. <span>Provident quis odio accusantium, excepturi commodi non obcaecati magni cumque eaque</span> quod inventore tempora nostrum perferendis reiciendis quo dignissimos itaque iusto voluptates, nobis aperiam debitis incidunt! Similique minus, animi eos dolorum deleniti veniam nihil. Possimus, ad debitis.</p>
          </div>
          <div className='w-[95%] h-[200] overflow-hidden test my-2 lg:p-6 p-3 shadow-inner'>
            <h1>User-2</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum quibusdam distinctio cupiditate nisi sed animi libero, <span>excepturi corrupti soluta! Quidem, aut praesentium beatae veniam error</span> esse nam inventore fugiat vero optio exercitationem necessitatibus iste.</p>
          </div>
        </div>

        {/* B */}
        <div className='w-full lg:w-1/2 flex flex-col'>
          {/* B1 */}
          <div className='flex flex-wrap justify-center items-center'>
            <div className='w-[45%] h-[200] overflow-hidden test m-1 lg:p-6 p-3 shadow-inner'>
              <h1>User-3</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, asperiores!</p>
            </div>
            <div className='w-[45%] h-[200] overflow-hidden test m-1 lg:p-6 p-3 shadow-inner'>
              <h1>User-4</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa corporis sapiente laborum nihil, id, officia assumenda laboriosam eveniet temporibus dolores dolorum nesciunt expedita, non repellat.</p>
            </div>
          </div>
          {/* B2 */}
          <div className='flex flex-wrap justify-center items-center'>
            <div className='w-[45%] h-[200] overflow-hidden test m-1 lg:p-6 p-3 shadow-inner'>
              <h1>User-5</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dicta rerum, placeat quibusdam nam alias dolores ipsum explicabo fuga quisquam.</p>
            </div>
            <div className='w-[45%] h-[200] overflow-hidden test m-1 lg:p-6 p-3 shadow-inner'>
              <h1>User-6</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas aspernatur necessitatibus corrupti.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex items-end justify-end my-4 p-2'>
        <Link href="/testimonials" className='p-2 mx-2 rounded-xl button text-base'>See More Love</Link>
      </div>
    </div>
  )
}

export default Testimonials
