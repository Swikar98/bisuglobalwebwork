import React from 'react'
import Image from 'next/image'
import first from "@/image/carousel/first.jpg"
const Aus = () => {
  return (
    <div className='h-full'>
    <h1 className="text-4xl text-center font-bold mb-6">Your Path to Success in Australia</h1>
    <div className='justify-center flex h-full w-full items-center'>
    <Image
    src={first}
   
    alt="abroad sturdy"/>
    </div>
    
    <p className="text-lg mb-4">
      Welcome to [Bisu Global], your trusted partner for navigating the educational and immigration landscape in Australia. Our consultancy is dedicated to helping individuals like you achieve their dreams of studying, working, and thriving in the land Down Under.
    </p>

    <p className="text-lg ">
      Australia, with its world-class education system and diverse opportunities, is an excellent choice for international students and professionals. At [Consultancy Firm Name], we understand the unique challenges you may face when planning your journey to Australia, and we are here to guide you every step of the way.
    </p>
  </div>
  )
}

export default Aus