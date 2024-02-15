import React from 'react'
import CustomInput from '../shared/common/customInput'
import img from "/public/assets/p1.png";
import Image from 'next/image';

type Props = {}

const ContactUs = (props: Props) => {
    return (
        <div>
            <div className="md:py-20 py-10 md:px-24 px-5 flex flex-col flex-wrap md:gap-5 items-center justify-between">
                <h3 className="md:text-5xl text-2xl font-bold  py-4 text-center">TALK TO US <span className="text-primary"> TODAY!</span></h3>

                <div className="md:w-1/2 w-full space-y-3">
                    <CustomInput inputType='text' placeholder='' label='Your name' />
                    <CustomInput inputType='email' placeholder='' label='Your email' />
                    <CustomInput inputType='email' placeholder='' label='Subject' />

                    <div className={`flex flex-col w-full `}>
                        <label
                            htmlFor="input-group-1"
                            className="block mb-2 text-lg font-medium text-gray-400"
                        >
                            Your Message (optional)
                        </label>
                        <textarea rows={4} className='text-black  text-md bg-[#f3f4f6]  
                        focus:border-primary focus:outline-none block w-full  px-5 py-3'/>
                        
                    </div>
                    <button className="py-3 px-7 bg-[#ef4444] text-white " style={{ color: 'white' }}>Submit</button>
                </div>
            </div>

            <div className="py-10 md:px-24 px-5 flex flex-wrap md:gap-5 items-center justify-between">

                <div className="md:w-1/2 w-full space-y-6">
                    <h3 className="md:text-5xl text-2xl font-bold text-primary md:pb-5">New Builds in Central Otago</h3>
                    <h5 className="md:text-2xl text-lg font-semibold ">Looks like youre ready to build, Heres the low down, we are ready and experienced to get your home ready and built, lets hop on call or hop over to our contact us so we can discuss design and expected cost and expected time. Get it Built here</h5>
                </div>

                <div className="md:w-2/5 w-full">
                    <Image src={img} alt='' className='md:w-1/2' />

                </div>


            </div>
        </div>
    )
}

export default ContactUs