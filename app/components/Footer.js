import React from 'react'
import Link from 'next/link'
import "../index.css"

const Footer = () => {
  return (
    <div className='footer bottom-0 m-0'>
      <p className='text-lg'>© 2024 <Link href="/" className="para2">Pixtrove</Link> | All Rights Reserved</p>
    </div>
  )
}

export default Footer
