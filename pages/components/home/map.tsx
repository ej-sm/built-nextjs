import Image from 'next/image'
import React from 'react'
import img from "/public/assets/design (1).png";


type Props = {}

const Map = (props: Props) => {
  return (
    <div className='mx-auto'>
          <div className="md:py-16 py-10 bg-primary">
              <h1 className="md:text-4xl text-xl text-black font-bold text-center"> “ We Serve Our Queenstown, Central Otago Community” </h1>
          </div>


          <Image src={img} alt='' className='w-full' />

    </div>
  )
}

export default Map