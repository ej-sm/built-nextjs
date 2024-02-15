import Image from 'next/image'
import React from 'react'
import img from "/public/assets/d.png";

type Props = {}

const GetTouch = (props: Props) => {
    return (
        <>
            <div className='mx-auto'>
                <div className="md:py-16 py-10 ">
                    <h1 className="md:text-4xl text-xl text-black font-bold text-center">Ready To Get Started </h1>
                </div>


                <Image src={img} alt='' className='w-full' />

            </div>

            <div className="md:py-20 py-10 md:px-24 px-5 flex flex-wrap md:gap-5 items-center justify-between">

                <div className="md:w-2/5 w-full space-y-6">
                    <h3 className="md:text-5xl text-2xl font-bold text-primary md:pb-5">Get In Touch</h3>
                    <h5 className="md:text-2xl text-lg font-semibold ">Ready to get Started. Excellent lets get started! Put in the details below and we will get a representative in touch for a personalised Discovery call so we can give you as much information on what our next steps will be to get your Project built. Ready to get started? Get it Built Today!</h5>
                </div>

                <div className="md:w-2/5 w-full border-t-2 border-b-2 border-primary">
                    <div className="py-1">
                        <h1 className="text-xl font-semibold py-2 ">Matthew</h1>
                        <h1 className="text-xl font-semibold py-2 border-t-2 border-b-2 border-gray-300 ">Call: 027 966 2793</h1>
                        <h1 className="text-xl font-semibold py-2 ">info@GeTitBuilt.co.nz</h1>
                    </div>
                </div>


            </div>
        </>


    )
}

export default GetTouch