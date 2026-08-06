"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-10 py-6">

        {/* Logo Button */}
        
          <Image
            src="/Logo.png"
            alt="Logo"
            width={130}
            height={70}
            className="cursor-pointer ml-8 mt-[-6px]"
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
    </header>
  );
}