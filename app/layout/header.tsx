"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Motorcycles", href: "#" },
    { name: "Scooters", href: "#" },
    { name: "Motorsports", href: "#" },
    { name: "Premia", href: "#" },
    { name: "VIDA", href: "#" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-10 py-4 sm:py-6">
        {/* Logo Button */}
        <div className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={130}
            height={70}
            className="cursor-pointer h-7 sm:h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex ml-auto mr-10 gap-8 lg:gap-10 text-gray-200 text-sm lg:text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-3">
          <button className="bg-white text-[#0A4EA5] px-4 sm:px-8 py-1.5 sm:py-2 font-medium h-8 sm:h-10 text-xs sm:text-sm rounded-xs hover:bg-gray-100 transition-colors shrink-0">
            Explore
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-1.5 text-white hover:text-blue-100 transition-colors focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#004EA5]/95 backdrop-blur-md border-b border-white/10 shadow-xl px-6 py-6"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-base font-medium hover:text-blue-200 transition-colors py-1.5 border-b border-white/10"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}