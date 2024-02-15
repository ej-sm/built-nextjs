import Image from 'next/image'
import React from 'react'
import img from "/public/assets/p1.png";


type Props = {}
const data = [
    {
        title: 'Quality', details: 'We Believe in getting your Projects done correctly because money comes and goes but reputation and good work stays forever, We Work with Top Notch Quality'
    },
    {
        title: 'Halo Guaranteed', details: 'Halo Guaranteed so that way you never have to worry, We are so confident in our work that we can offer you the Halo Grantee'
    },
    {
        title: 'Timely', details: 'Get it Built and Get it Done, we understand that your project isnt only about the money cost but also your time cost which we believe is more valuable, We get your projects done Timely'
    },
    { title: 'Easy Processes', details: 'Your project is getting built to benefit your life, it shouldnt be a cause of stress, rather it should be a cause of celebration of your success.We are the team for yout' },
]
const WhyUs = (props: Props) => {
    return (
        <div>
            <div className="md:py-20 py-10 lg:px-24 md:px-12 px-5 flex flex-wrap justify-center items-center">
                <div className="lg:w-1/2 w-full flex flex-wrap justify-between items-center gap-5">
                    {data.map((item, i) => (
                        <div key={i} className="md:w-[47%] w-full shadow-md rounded-2xl space-y-5 p-5">
                            <h2 className="md:text-2xl text-center text-xl font-semibold">
                                {item.title}
                            </h2>

                            <p className="text-md text-center font-medium">
                                {item.details}
                            </p>
                        </div>
                    ))}

                </div>

                <div className="lg:w-2/5 w-full flex justify-center items-center">
                    <Image src={img} alt='' className='md:w-4/5' />

                </div>
            </div>
        </div>
    )
}

export default WhyUs