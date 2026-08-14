"use client";

import Image from "next/image";
import { Menu, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

// Pure CSS representation of the India flag (scaled to match size)
const IndiaFlag = () => (
  <div className="w-[22px] h-[16px] relative flex flex-col justify-between overflow-hidden rounded-[1px] border border-gray-200 select-none">
    <div className="h-1/3 bg-[#FF9933]" />
    <div className="h-1/3 bg-white flex items-center justify-center relative">
      <div className="w-1.5 h-1.5 rounded-full border border-[#000080] flex items-center justify-center">
        <div className="w-0.5 h-0.5 rounded-full bg-[#000080]" />
      </div>
    </div>
    <div className="h-1/3 bg-[#128807]" />
  </div>
);

export default function Header() {
  const [showMobileHead, setShowMobileHead] = useState(false);
  const [showPlacesModal, setShowPlacesModal] = useState(false);

  const places = [
    { name: "Jubliee Hills", flag: "📍" },
    { name: "Gachibowli", flag: "📍" },
    { name: "Kondapur", flag: "📍" },
    { name: "Madhapur", flag: "📍" },
    { name: "Kukatpally", flag: "📍" },
    { name: "Hitech City", flag: "📍" },
    { name: "Begumpet", flag: "📍" },
    { name: "Tolichowki", flag: "📍" },
    { name: "JNTU", flag: "📍" },
    { name: "Kompally", flag: "📍" },
    { name: "Secunderabad", flag: "📍" },
    { name: "Nampally", flag: "📍" },
    { name: "Banjara Hills", flag: "📍" },
    { name: "Mehdipatnam", flag: "📍" },
    { name: "Dilsukhnagar", flag: "📍" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-between px-10 h-[56px]">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={96}
            height={44}
            className="cursor-pointer ml-4"
            style={{ filter: "drop-shadow(1px 0px 0px #1A1A1A) drop-shadow(-1px 0px 0px #1A1A1A) drop-shadow(0px 1px 0px #1A1A1A) drop-shadow(0px -1px 0px #1A1A1A)" }}
          />
        </div>

        {/* Middle Side: Menu */}
        <nav className="flex items-center gap-8 text-[#1A1A1A] text-[14px] font-medium tracking-wide">
          <a href="#" className="hover:text-[#E10A17] transition-colors">Premia</a>
          <a href="#" className="hover:text-[#E10A17] transition-colors">Motorcycles</a>
          <a href="#" className="hover:text-[#E10A17] transition-colors">Scooters</a>
          <a href="#" className="hover:text-[#E10A17] transition-colors">VIDA</a>
          <a href="#" className="hover:text-[#E10A17] transition-colors">Motorsports</a>
          <a href="#" className="hover:text-[#E10A17] transition-colors">Explore</a>
        </nav>

        {/* Right Side: Utility Icons */}
        <div className="flex items-center gap-4 text-[#1D1D1D]">
          <button aria-label="Cart" className="hover:text-[#E10A17] transition-colors cursor-pointer p-1">
            <ShoppingCart size={22} className="stroke-[1.75]" />
          </button>
          <span className="text-gray-200 select-none">|</span>
          
          {/* Flag Trigger Button */}
          <button 
            aria-label="Select Hyderabad Places" 
            className="hover:opacity-85 transition-opacity cursor-pointer p-1 flex items-center"
            onClick={() => setShowPlacesModal(true)}
          >
            <IndiaFlag />
          </button>

          <span className="text-gray-200 select-none">|</span>
          <button aria-label="Profile" className="hover:text-[#E10A17] transition-colors cursor-pointer p-1">
            <User size={22} className="stroke-[1.75]" />
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex items-center justify-between w-full h-[48px] px-6">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={80}
          height={36}
          className="cursor-pointer"
          style={{ filter: "drop-shadow(1px 0px 0px #1A1A1A) drop-shadow(-1px 0px 0px #1A1A1A) drop-shadow(0px 1px 0px #1A1A1A) drop-shadow(0px -1px 0px #1A1A1A)" }}
        />
        <button
          aria-label="Menu"
          className="p-2 text-black hover:text-[#E10A17] transition-colors"
          onClick={() => setShowMobileHead(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {showMobileHead && (
        <div className="fixed inset-y-0 right-0 h-screen w-[280px] z-50 bg-white border-l border-gray-100 shadow-2xl flex flex-col items-start p-6 transition-all duration-300">
          <div className="w-full flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
            <span className="font-semibold text-lg text-black">Menu</span>
            <button
              className="text-gray-500 hover:text-black text-2xl"
              onClick={() => setShowMobileHead(false)}
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-5 text-gray-800 text-[16px] font-medium w-full">
            <a href="#" className="hover:text-[#E10A17] transition-colors py-1">Premia</a>
            <a href="#" className="hover:text-[#E10A17] transition-colors py-1">Motorcycles</a>
            <a href="#" className="hover:text-[#E10A17] transition-colors py-1">Scooters</a>
            <a href="#" className="hover:text-[#E10A17] transition-colors py-1">VIDA</a>
            <a href="#" className="hover:text-[#E10A17] transition-colors py-1">Motorsports</a>
            <a href="#" className="hover:text-[#E10A17] transition-colors py-1">Explore</a>
          </nav>
        </div>
      )}

      {/* "Top  Places in Hyderabad" Modal Overlay */}
      {showPlacesModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          {/* Modal Container */}
          <div className="relative bg-white max-w-[1000px] w-full rounded-sm shadow-2xl p-6 md:p-8 flex flex-col animate-in fade-in zoom-in-95 duration-200">
            
            {/* Red Close Button */}
            <button 
              onClick={() => setShowPlacesModal(false)}
              className="absolute top-6 right-8 text-[#E10A17] hover:opacity-85 transition-opacity font-bold text-2xl cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 text-center pt-2 pb-8 font-sans select-none">
             Our Branches in Hyderabad
            </h2>

            {/* Grid of Places (5 columns on desktop, 3 columns on sm/md, 2 columns on mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-h-[480px] overflow-y-auto pr-2 no-scrollbar">
              {places.map((place, idx) => (
                <div 
                  key={idx}
                  onClick={() => setShowPlacesModal(false)}
                  className="
                    flex items-center justify-center bg-[#5B5B5B] hover:bg-[#E10A17] text-white 
                    px-3 py-2.5 rounded-[2px] cursor-pointer transition-all duration-200 select-none
                    text-center group
                  "
                >
                  <span className="text-[13px] font-normal tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
                    {place.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
