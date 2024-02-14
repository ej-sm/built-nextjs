/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
    return (
        <div>
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
            >
                {/* <div
                    className="absolute inset-0  bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div> */}

                <div
                    className="relative mx-auto px-4 py-32 sm:px-6 lg:flex   md:min-h-[70vh] lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right space-y-4">
                        <h1 className="text-3xl text-white font-extrabold sm:text-7xl">Why We build </h1>
                        <h2 className="text-2xl text-white font-extrabold sm:text-4xl block  "> Why we Build</h2>

                    </div>
                </div>
            </section>

            <div className="md:px-24 px-5 md:py-20 py-10 flex flex-wrap justify-center gap-8 items-center">
                <div className="lg:w-[45%] w-full">
                    <h1 className="md:text-7xl text-3xl text-primary font-bold">
                        Building Beyond Structures, Crafting Futures
                    </h1>
                </div>

                <div className="lg:w-[45%] w-full">
                    <h1 className="md:text-3xl text-xl text-black font-semibold">
                        We Believe that the spaces your in Mold you into the person you are. If you have a deck for your family to spend time on, Guess what, You spend more time with your family. Crazy Right! We want to give you a life filled with great memories with friends and family. Thats our Why Thats our Mission
                    </h1>
                </div>
            </div>

            <div className="md:py-16 py-10 bg-primary">
                <h1 className="md:text-4xl text-xl text-black font-bold text-center"> “ Measure Twice, Cut once ” </h1>
            </div>
        </div>
    )
}

export default Hero