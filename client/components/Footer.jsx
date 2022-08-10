import React from 'react'
import Image from "next/image";


const Footer = () => {
  return (
    <div className='flex bg-zinc-800 '>

    <div className='flex-1 relative w-full h-auto'>
      <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
    </div>

    <div></div>
    <div className='grid grid-cols-3 w-[50%] jusitfy-content relative p-20' >
      <div className='flex-1 px-2'>
        <h2 className='font-bold text-2xl text-white w-[60%]'>
          OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
        </h2>
      </div>

      <div className='flex-1 px-2'>
        <h1 className='text-lg text-amber-500'>FIND OUR RESTAURANTS</h1>
        <p className='text-zinc-600'>
          1654 R. Don Road #304.
          <br /> NewYork, 85022
          <br /> (602) 867-1010
        </p>
        <p className='text-zinc-600'>
          2356 K. Laquie Rd #235.
          <br /> NewYork, 85022
          <br /> (602) 867-1011
        </p>
        <p className='text-zinc-600'>
          1614 E. Erwin St #104.
          <br /> NewYork, 85022
          <br /> (602) 867-1012
        </p>
        <p className='text-zinc-600'>
          1614 W. Caroll St #125.
          <br /> NewYork, 85022
          <br /> (602) 867-1013
        </p>
      </div>

      <div className='flex-1 px-2'>
        <h1 className='text-lg text-amber-500'>WORKING HOURS</h1>
        <p className='text-zinc-600'>
          MONDAY UNTIL FRIDAY
          <br /> 9:00 – 22:00
        </p>
        <p className='text-zinc-600'>
          SATURDAY - SUNDAY
          <br /> 12:00 – 24:00
        </p>
      </div>
    </div>
  </div>
  )
}

export default Footer
