"use client"
import "../index.css"
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
const Previews = () => {

  const onDrop = useCallback(acceptedFiles => {
      // Do something with the files
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className='my-40 box py-16'>
      <div>
        <h1 className='lg:text-5xl text-4xl my-10'>Drag, Drop, and Watch the Magic Unfold</h1>
        <p className='para lg:w-1/2 w-4/5 mx-2 p-2 text-lg'>Effortlessly upload your photos and let our smart technology organize them for you. A simple drop, and your moments are beautifully sorted and ready to relive.</p>
      </div>

      <div className='flex flex-col justify-center items-center m-5 h-[500px]'>
         <div {...getRootProps()} className='bg3 rounded-2xl h-4/5 lg:w-3/5 w-[90%0] flex justify-center items-center cursor-pointer'>
           <input {...getInputProps()}/>
           {
             isDragActive ?
               <p>Drop the files here ...</p> :
               <p>Drag 'n' drop some files here, or click to select files</p>
           }
         </div>

         <div className='lg:w-3/5 w-[90%] flex justify-between'>
            <p className='m-2 text-lg cursor-pointer para tooltip-container'>Need Help?</p>
            <button className='py-2 px-6 m-2 rounded-xl button'>Upload</button>
         </div>
      </div>
    </div>
  )
}

export default Previews
