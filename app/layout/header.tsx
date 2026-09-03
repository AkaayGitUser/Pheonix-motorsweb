"use client";

import Image from "next/image";
import { Menu, ShoppingCart, MapPin, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [showMobileHead, setShowMobileHead] = useState(false);
  const [showPlacesModal, setShowPlacesModal] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const places = [
    { name: "Habsiguda", flag: "📍" },
    { name: "Nagole", flag: "📍" },
    { name: "ECIL", flag: "📍" },
    { name: "Sainikpuri", flag: "📍" },
    { name: "Bhuvanagiri", flag: "📍" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white/85 backdrop-blur-md border-b border-gray-100 shadow-sm py-1.5"
        : showPlacesModal
          ? "bg-black/75 backdrop-blur-lg border-b border-white/10 py-1.5 shadow-lg"
          : "bg-transparent py-3"
    }`}>
      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-between px-10 h-[56px]">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Image
            src={isScrolled ? "/images/motorsslogo.png" : "/motor-logo.png"}
            alt="Logo"
            width={96}
            height={44}
            className="cursor-pointer ml-4 transition-all duration-300"
          />
        </div>

        {/* Middle Side: Menu */}
        <nav className={`flex items-center gap-8 text-[14px] font-normal tracking-wide transition-colors duration-300 ${isScrolled ? "text-[#1A1A1A]" : "text-white"
          }`}>
          <a href="#" className="hover:text-[#E10A17] transition-colors">Premia</a>
          <a href="#" className="hover:text-[#E10A17] transition-colors">Motorcycles</a>
          <a href="#" className="hover:text-[#E10A17] transition-colors">Scooters</a>
          <a href="#" className="hover:text-[#E10A17] transition-colors">VIDA</a>
          <a href="#" className="hover:text-[#E10A17] transition-colors">Motorsports</a>
          <a href="#" className="hover:text-[#E10A17] transition-colors">Explore</a>
          <a href="#" className="hover:text-[#E10A17] transition-colors">Events</a>
        </nav>

        {/* Right Side: Utility Icons */}
        <div className={`flex items-center gap-4 transition-colors duration-300 ${isScrolled ? "text-[#1D1D1D]" : "text-white"
          }`}>
          <button aria-label="Cart" className="hover:text-[#E10A17] transition-colors cursor-pointer p-1">
            <ShoppingCart size={22} className="stroke-[1.75]" />
          </button>
          <span className={`select-none transition-colors duration-300 ${isScrolled ? "text-gray-200" : "text-white/20"}`}>|</span>

          {/* Location Trigger Button */}
          <button
            aria-label="Select Hyderabad Branch"
            className="hover:text-[#E10A17] transition-colors cursor-pointer p-1 flex items-center gap-1.5 font-medium text-[14px]"
            onClick={() => setShowPlacesModal(!showPlacesModal)}
          >
            <MapPin size={20} className="stroke-[1.75]" />
            <span>Hyderabad</span>
            <ChevronDown size={14} className="stroke-[1.75] opacity-80" />
          </button>

          <span className={`select-none transition-colors duration-300 ${isScrolled ? "text-gray-200" : "text-white/20"}`}>|</span>

          <div className="relative">
            <button
              aria-label="Menu"
              className="hover:text-[#E10A17] transition-colors cursor-pointer p-1"
              onClick={() => setShowDesktopMenu(!showDesktopMenu)}
            >
              <Menu size={22} className="stroke-[1.75]" />
            </button>

            {/* Desktop Drawer */}
            <AnimatePresence>
              {showDesktopMenu && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setShowDesktopMenu(false)}
                    className="fixed inset-0 bg-black/40 z-[60]"
                  />

                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                    className={`fixed top-0 right-0 h-fit w-[320px] shadow-2xl flex flex-col items-start p-8 z-[70] border-l border-b transition-colors duration-300 ${
                      isScrolled
                        ? "bg-white/95 backdrop-blur-md border-gray-100 text-black"
                        : "bg-black/75 backdrop-blur-md border-white/10 text-white"
                    }`}
                  >
                    <div className={`w-full flex items-center justify-between pb-6 border-b mb-6 ${
                      isScrolled ? "border-gray-100" : "border-white/10"
                    }`}>
                      <span className={`font-medium text-xl ${isScrolled ? "text-black" : "text-white"}`}>Menu</span>
                      <button
                        className={`text-2xl cursor-pointer transition-colors duration-200 ${
                          isScrolled ? "text-gray-500 hover:text-black" : "text-gray-400 hover:text-white"
                        }`}
                        onClick={() => setShowDesktopMenu(false)}
                      >
                        ✕
                      </button>
                    </div>

                    <nav className={`flex flex-col gap-6 text-[16px] font-normal w-full ${
                      isScrolled ? "text-gray-800" : "text-gray-200"
                    }`}>
                      <a href="#" onClick={() => setShowDesktopMenu(false)} className={`hover:text-[#E10A17] transition-colors py-1 border-b ${isScrolled ? "border-gray-50" : "border-white/10"}`}>
                        Exchange Your Bike
                      </a>
                      <a href="#" onClick={() => setShowDesktopMenu(false)} className={`hover:text-[#E10A17] transition-colors py-1 border-b ${isScrolled ? "border-gray-50" : "border-white/10"}`}>
                        Find Dealers
                      </a>
                      <a href="#" onClick={() => setShowDesktopMenu(false)} className={`hover:text-[#E10A17] transition-colors py-1 border-b ${isScrolled ? "border-gray-50" : "border-white/10"}`}>
                        Help & Support
                      </a>
                      <a href="#" onClick={() => setShowDesktopMenu(false)} className="hover:text-[#E10A17] transition-colors py-1">
                        Corporate Offers
                      </a>
                    </nav>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex items-center justify-between w-full h-[48px] px-6">
        <Image
          src={isScrolled ? "/motor-logo-dark.png" : "/motor-logo.png"}
          alt="Logo"
          width={80}
          height={36}
          className="cursor-pointer transition-all duration-300"
        />
        <button
          aria-label="Menu"
          className={`p-2 transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"} hover:text-[#E10A17]`}
          onClick={() => setShowMobileHead(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {showMobileHead && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowMobileHead(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 h-screen w-[280px] z-50 bg-white border-l border-gray-100 shadow-2xl flex flex-col items-start p-6"
            >
              <div className="w-full flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
                <span className="font-semibold text-lg text-black">Menu</span>
                <button
                  className="text-gray-500 hover:text-black text-2xl cursor-pointer"
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
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Locations Full-Width Dropdown Panel */}
      <AnimatePresence>
        {showPlacesModal && (
          <>
            <div
              onClick={() => setShowPlacesModal(false)}
              className="fixed inset-0 bg-black/40 z-30"
            />

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`absolute left-0 right-0 w-full z-40 shadow-2xl transition-colors duration-300 top-full ${
                isScrolled
                  ? "bg-white border-b border-gray-200 text-[#1A1A1A]"
                  : "bg-black/75 backdrop-blur-md border-b border-white/10 text-white"
              }`}
            >
              <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 border-r border-gray-200/20 pr-6">
                  <h3 className="text-[20px] font-semibold tracking-tight mb-2">Our Locations</h3>
                  <p className={`text-[13px] ${isScrolled ? "text-gray-500" : "text-gray-400"} leading-relaxed`}>
                    Visit any of our premium showrooms and experience centers across Hyderabad.
                  </p>
                </div>

                <div className="col-span-3 pl-4">
                  <h4 className="text-[12px] font-semibold tracking-wider uppercase mb-6 opacity-60">
                    Branches in Hyderabad
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                    {places.map((place, idx) => (
                      <button
                        key={idx}
                        onClick={() => setShowPlacesModal(false)}
                        className={`flex items-center gap-2.5 text-[15px] font-medium transition-colors py-2 text-left cursor-pointer group w-fit ${
                          isScrolled
                            ? "hover:text-[#E10A17] text-gray-800"
                            : "hover:text-[#E10A17] text-gray-200"
                        }`}
                      >
                        <MapPin size={16} className="text-[#E10A17] shrink-0" />
                        <span className="font-sans font-medium">{place.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}