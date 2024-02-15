'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "/public/assets/footer.png";


type Props = {};
const Footer = (props: Props) => {


  return (
    <>
      <div className="py-10 lg:px-24 md:px-12 px-5 flex justify-between items-start gap-4 flex-wrap  w-full">
          <div className="md:w-[30%] w-full space-y-5">
            <h3 className="md:text-2xl text-lg font-semibold text-black">Contact</h3>

            <div className="">
              <p className="text-lg ">Phone: 027 XXX  XXX</p>
              <p className="text-lg ">Email: info@email.co.nz</p>
            <div className="w-full pt-7 md:pt-0">
              <Image src={img} alt='' className='' />

            </div>
            </div>

        </div>


        <div className="md:w-[30%] w-full space-y-5">
          <h3 className="md:text-2xl text-lg font-semibold text-black">Hours</h3>

          <div className="">
            <p className="text-lg ">Monday - Friday : 7:30 am -5pm</p>
            <p className="text-lg ">Saturday - Sunday : On Apponinment</p>
          </div>
        </div>


        <div className="md:w-[30%] w-full space-y-5">
          <h3 className="md:text-2xl text-lg font-semibold text-black">Follow Us</h3>

          <div className="flex flex-col gap-2">
            <Link href='/' className="block">Instagram</Link> 
            <Link href='/' className="">Facebook</Link> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
