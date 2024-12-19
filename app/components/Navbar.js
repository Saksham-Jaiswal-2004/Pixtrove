"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import "../index.css"
import { useEffect } from 'react';

const Navbar = ({ Component, pageProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    
    window.onscroll = () => {
      if (window.scrollY > 100 && window.innerWidth > 768) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = ''; // Enable scroll
    }

    return () => {
      document.body.style.overflow = ''; // Reset overflow
    };
  }, [isOpen]);

  return (
    <div className='navbar fixed w-screen bg1 m-0 lg:p-4 p-1 top-0 z-10' id='navbar'>
      <nav className='flex justify-between items-center mx-4'>
        <div>
          <Link href="/"><h6 className='cursor-pointer mr-8 lg:text-4xl text-3xl'>Pixtrove</h6></Link>
        </div>

        <div className='flex justify-center items-center gap-8 mx-4'>
          <ul className='md:flex hidden gap-6'>
            <Link href="/#home" className='link'><li>Home</li></Link>
            <Link href="/about" className='link'><li>About</li></Link>
            <Link href="/organize" className='link'><li>Add Event</li></Link>
            <Link href="/#contact" className='link'><li>Contact Us</li></Link>
          </ul>

          <Link href="/organize" className='md:flex hidden p-2 px-5 mx-1 rounded-xl button'>Get Started</Link>
          <button className="text-2xl md:hidden focus:outline-none"onClick={() => setIsOpen(!isOpen)}aria-label="Toggle Menu">{isOpen ? "✖" : "☰"}</button>
        </div>

        <div className={`fixed top-0 left-0 px-14 w-full h-full backdrop-blur-md text-white flex flex-col items-center justify-center space-y-8 text-2xl transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <button className="absolute top-4 right-4 text-3xl focus:outline-none"onClick={() => setIsOpen(false)}aria-label="Close Menu">✖</button>

          <ul className='flex flex-col justify-center items-center text-base gap-6'>
            <Link href="/#home" className='link' onClick={closeMenu}><li>Home</li></Link>
            <Link href="/about" className='link' onClick={closeMenu}><li>About</li></Link>
            <Link href="/organize" className='link' onClick={closeMenu}><li>Add Event</li></Link>
            <Link href="/#contact" className='link' onClick={closeMenu}><li>Contact Us</li></Link>
          </ul>

          <Link href="/organize" className='p-2 mx-1 rounded-xl button text-base' onClick={closeMenu}>Get Started</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
