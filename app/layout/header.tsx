"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [showMobileHead, setShowMobileHead] = useState(false);
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="hidden lg:flex items-center justify-between px-10 py-6">
        {/* Logo Button */}

        <Image
          src="/Logo.png"
          alt="Logo"
          width={130}
          height={70}
          className="cursor-pointer ml-8 -mt-1.5"
        />
        {/* Menu */}
        <nav className="hidden lg:flex ml-55 mt-5 gap-10 text-gray-200 text-md">
          <a href="#">Motorcycles</a>
          <a href="#">Scooters</a>
          <a href="#">Motorsports</a>
          <a href="#">Premia</a>
          <a href="#">VIDA</a>
        </nav>

        {/* Button */}
        <button className="bg-white text-[#0A4EA5] px-10 py-2 mt-3 font-medium h-10 w-43">
          Explore
        </button>
      </div>

      {/* {MObile View} */}
      <div className="lg:hidden flex py-10 justify-between">
        {/* Logo Button */}
        <div className="">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={130}
            height={70}
            className="cursor-pointer ml-8 -mt-1.5"
          />
        </div>
        <div className="mr-6 mt-4">
          <button
            aria-label="Menu"
            className="p-2 rounded-full bg-black/30"
            onClick={() => setShowMobileHead(true)}
          >
            <Menu size={30} className="text-white" />
          </button>
        </div>
      </div>
      {showMobileHead && (
        <div className="fixed top-0 right-0 h-screen w-1/2 z-50 max-w-100 bg-[#003366] flex flex-col items-start justify-top gap-6 text-white px-4 py-20">
          <button
            className="absolute top-5 right-5 text-2xl"
            onClick={() => setShowMobileHead(false)}
          >
            ✕
          </button>

          <a href="#">Motorcycles</a>
          <a href="#">Scooters</a>
          <a href="#">Motorsports</a>
          <a href="#">Premia</a>
          <a href="#">VIDA</a>

          <button className="bg-white text-[#0A4EA5] px-8 py-2">Explore</button>
        </div>
      )}
    </header>
  );
}
