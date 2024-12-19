import Benefits from '@/app/components/Benefits';
import Features from '@/app/components/Features';
import Cta from '@/app/components/Cta';
import Hiw from '@/app/components/Hiw';
import Testimonials from '@/app/components/Testimonials';
import Link from 'next/link'
import "./index.css"

export default function Home() {
  return (
    <div>
      <div className='h-screen display flex flex-wrap text-left items-end justify-end top-0' id='home'>
        <div className='lg:w-1/2 w-full h-full px-8 py-14 bottom-0 flex flex-col justify-end'>
          <div className='my-4'>
            <h1 className='lg:text-6xl text-5xl my-6'>Pixtrove</h1>
            <h1 className='lg:text-4xl text-3xl sub'>Your Memories,</h1>
            <h1 className='lg:text-4xl text-3xl sub'>Perfectly Organized!</h1>
          </div>
          <p className='lg:text-xl text-base para'>Say goodbye to photo clutter. Our intelligent system organizes your images, making it simple to browse, search, and enjoy your memories in seconds.</p>
          <div className='my-8 flex flex-wrap justify-start items-center'>
            <Link href="/organize" className='lg:p-4 p-3 mx-2 mr-2 rounded-xl button lg:text-lg text-sm'>Let's Organise</Link>
            <Link href="#hiw" className='lg:p-4 p-3 m-2 rounded-xl Sbutton lg:text-lg text-sm'>How this works</Link>
          </div>
        </div>

        <div className='lg:w-1/2 w-full h-full relative lg:inline-block z-0 hidden '>
          <img src="https://images.pexels.com/photos/4008852/pexels-photo-4008852.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='image h-full w-full object-cover'/>
          <div className='absolute inset-0 bg-black opacity-60'></div>
        </div>
      </div>
      <Benefits/>
      <Features/>
      <Hiw/>
      <Testimonials/>
      <Cta/>
    </div>
  );
}
