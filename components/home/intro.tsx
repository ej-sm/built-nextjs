import Image from 'next/image'
import React from 'react'
import img from '/public/assets/i1.png'

type Props = {}

const Intro = (props: Props) => {
  return (
    <div>
        <div className="md:py-20 py-10 md:px-24 px-5 flex flex-wrap items-center justify-center">
            <div className="md:w-2/5 w-full">
                <Image src={img} alt='' className='md:w-4/5'/>
            </div>
            <div className="md:w-2/5 w-full space-y-6">
                  <h3 className="md:text-3xl text-xl font-bold ">Matthew <br /> CEO</h3>
                  <h5 className="md:text-2xl text-lg font-semibold ">Matthew is the Brain, the Brawn and the Courage behind the Foundation of Get it Built. After seeing a gap in the market of Quality Construction done on time and with a down to earth easy process, Matthew decided that Kiwis and their projects needed an answer to that call. Welcome to Get It Built!</h5>
            </div>
              <div className="md:w-2/5 w-3/4 bg-primary py-5 mt-5">
                  <h3 className="text-center md:text-3xl font-semibold text-lg">
                      We Are Certified
                  </h3>
              </div>
        </div>

       
    </div>
  )
}

export default Intro