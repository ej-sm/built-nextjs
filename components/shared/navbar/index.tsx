"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "/public/assets/logo.png";
import Link from "next/link";
import { MenuBurger } from "../../svgs";
import Section from "../common/Section";
import { useRouter } from "next/router";

const menuItems = [
  { label: "Home ", url: "/" },
  { label: "About Us", url: "/aboutUs" },
  { label: "Contact Us", url: "/contactUs" },
  { label: "Services ", url: "/services" },
];

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const isActive = (path: string) => {
    // Assuming router.path represents the current route path
    return router.pathname === path ? "underline leading-relaxed" : "";
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeModalScan = () => {
    setIsModalOpen(false);
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Create a ref for the dropdown
  useEffect(() => {
    // The event parameter is typed as MouseEvent
    const handleClickOutside = (event: MouseEvent) => {
      // Using current as HTMLDivElement | null, so we check if current is not null
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      // The event type 'mousedown' remains the same, but TypeScript ensures the handler function matches the expected signature
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLinkClick = (url: string) => {
    // Scroll to the section with the corresponding ID
    const sectionId = url.substring(1); // Remove the '#' from the URL
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    // Close the mobile navigation menu
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full bg-primary">
        <nav
          className={`  flex  justify-center mx-auto py-2 items-start relative top-0 w-full z-20 text-black md:px-24 px-5`}
        >
          <div className="flex justify-between items-center flex-shrink-0 w-full">
            <Link href="/">
              <Image
                src={logo}
                alt=""
                width={200}
                height={70}
                className=" hover:scale-105  duration-300 transition-all "
              />
            </Link>
            <div className="lg:flex items-center hidden gap-7 ">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.url}
                  // style={{ fontWeight: '600' }}
                  className={`hover:scale-105 hover:text-white  duration-300 text-xl transition-all font-bold ${isActive(
                    item.url
                  )}`}
                >
                  <h2 className="font-bold text-lg cursor-pointer hover:text-gray">
                    {item.label}
                  </h2>
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="lg:hidden block "
            >
              <MenuBurger />
            </button>
          </div>
        </nav>
        {isModalOpen && (
          <>
            <div
              className="w-full h-screen fixed blurBg left-0 top-0 "
              onClick={closeModal}
            ></div>
            <div className="bg-primary flex flex-col gap-3 absolute left-0 w-full  px-10 z-20 py-16 transition-all duration-300">
              
                {menuItems.map((item) => (
                  <Link
                    onClick={() => setIsModalOpen(false)}
                    key={item.label}
                    href={item.url}
                    style={{ fontWeight: '600' }}
                    className={`text-white font-medium cursor-pointer text-lg hover:scale-105 hover:text-white duration-300 transition-all ${isActive(
                      item.url
                    )}`}
                  >
                    {item.label}
                  </Link>
                ))}
              
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
