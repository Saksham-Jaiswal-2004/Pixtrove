import React from 'react'
import '../index.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const Cta = () => {
  return (
    <div className='h-fit flex flex-col flex-wrap' id='contact'>
      <div className='my-10'>
        <h1 className='lg:text-6xl text-5xl my-2'>Say Hello to Your New Photo Partner</h1>
      </div>

      <div className='flex flex-wrap justify-center w-full my-16'>
        <div className='flex flex-col flex-wrap justify-end w-full lg:w-1/2'>
          <h1 className='text-5xl my-4'>Pixtrove</h1>
          <div className='flex items-center text-xl gap-3 m-2'>
            <a href="https://wa.me/7980921124" target="_blank" rel="noopener noreferrer"><FaPhoneAlt /></a>
            <p><a href="https://wa.me/7980921124" target="_blank" rel="noopener noreferrer"> - 79809-21124 / 98303-47443</a></p>
          </div>
          <div className='flex items-center text-xl gap-3 m-2'>
            <a href="mailto:anubhav.jaiswal23@lpu.in" target="_blank" rel="noopener noreferrer"><IoMail /></a>
            <p><a href="mailto:anubhav.jaiswal23@lpu.in" target="_blank" rel="noopener noreferrer"> - anubhav.jaiswal23@lpu.in</a></p>
          </div>
        

          <div className='flex gap-8 my-6 mx-2 text-4xl'>
            <a href=""><FaLinkedin className='icon'/></a>
            <a href=""><FaYoutube className='icon'/></a>
            <a href=""><FaFacebook className='icon'/></a>
            <a href=""><RiInstagramFill className='icon'/></a>
            <a href=""><FaSquareXTwitter className='icon'/></a>
          </div>
        </div>

        <div className='w-[90%] lg:w-1/2 flex justify-center items-center'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1469.258800191752!2d75.70382105006865!3d31.255389692880225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1734530433767!5m2!1sen!2sin" width="600" height="450" loading="lazy" className='rounded-xl'></iframe>
        </div>
      </div>
    </div>
  )
}

export default Cta
