"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "./../../app/layout/header";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RefreshCw, MapPin, Headphones, Tag } from "lucide-react";

export default function Hero() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      type: "image",
      src: "/hero-1.png",
      alt: "Hero Destini - Scooter Ka Hero",
      link: "/book",
    },
    {
      type: "image",
      src: "/hero-2.png",
      alt: "Hero Motorcycles - Premium Lineup",
      link: "/book",
    },
    {
      type: "image",
      src: "/hero-3.png",
      alt: "Hero Xtreme - Unleash the Beast",
      link: "/book",
    },
    {
      type: "video",
      src: "/hero-video.mp4",
      alt: "Hero Adventure Journey",
      link: "/book",
    },
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const handleSlideClick = () => {
    router.push(slides[activeIndex].link);
  };

  return (
    <div className="relative w-full">
      {/* Header Navigation sits outside the slider in normal flow */}
      <Header />

      {/* 1. Fullscreen Media Slider Viewport (Adjusted height to account for header) */}
      <section className="relative w-full h-[calc(100dvh-48px)] md:h-[calc(100dvh-56px)] min-h-[500px] flex flex-col justify-between bg-black overflow-hidden select-none">
        
        {/* Background media wrapper */}
        <div 
          className="absolute inset-0 w-full h-full cursor-pointer z-0"
          onClick={handleSlideClick}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {slides[activeIndex].type === "video" ? (
                <video
                  src={slides[activeIndex].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={slides[activeIndex].src}
                  alt={slides[activeIndex].alt}
                  fill
                  priority
                  className="object-cover"
                />
              )}
              {/* Vignette overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/55" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Middle text overlay (Active only for the video slide) - Shifted upward to clear bottom panel */}
        <AnimatePresence>
          {activeIndex === 3 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pb-24 md:pb-40 z-10 pointer-events-none">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl font-sans uppercase leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
              >
                Your Next Adventure Starts in Style
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="text-white/90 text-sm md:text-xl mt-4 max-w-2xl font-sans drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
              >
                Experience high performance, premium engineering, and absolute control.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="pointer-events-auto mt-8"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push("/book");
                  }}
                  className="px-8 py-3 bg-[#0056A6] text-white font-medium hover:bg-[#00407C] transition-all duration-300 uppercase tracking-widest text-xs md:text-sm rounded-sm shadow-2xl flex items-center gap-2 group border border-white/10 cursor-pointer"
                >
                  Start Your Adventure
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Right Side: Thumbnail Controls & Counter below them - Positioned in the slider viewport */}
        <div 
          className="absolute bottom-6 sm:bottom-8 md:bottom-12 right-6 md:right-16 z-20 flex flex-col pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slide Thumbnails Row */}
          <div className="flex gap-4">
            {slides.map((slide, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(idx);
                }}
                className="relative flex flex-col cursor-pointer focus:outline-none"
              >
                {/* Thumbnail Image Container */}
                <div 
                  className={`
                    w-[80px] h-[45px] sm:w-[95px] sm:h-[54px] md:w-[110px] md:h-[62px] 
                    overflow-hidden transition-all duration-300
                    ${
                      activeIndex === idx
                        ? "opacity-100 scale-[1.02]"
                        : "opacity-45 hover:opacity-85"
                    }
                  `}
                >
                  {slide.type === "video" ? (
                    <video
                      src={slide.src}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  ) : (
                    <img
                      src={slide.src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  )}
                </div>
                {/* Active progress bar indicator at the bottom edge */}
                {activeIndex === idx && (
                  <div 
                    className="h-[3px] bg-white w-full origin-left mt-1.5"
                    style={{ animation: "thumbnail-progress 7000ms linear infinite" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active Counter below the first thumbnail */}
          <div className="text-white font-sans flex items-baseline leading-none mt-4 select-none pl-1">
            <span className="text-4xl md:text-6xl font-light tracking-tight">
              {activeIndex + 1}
            </span>
            <span className="text-2xl md:text-3xl font-light text-white/80">
              /{slides.length}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Scrolling Reveal Help Widget (Positioned below the viewport fold, overlapping the bottom of the slider) */}
      <div 
        className="
          relative z-20 w-full bg-black pointer-events-auto
          -mt-[90px] pt-4 pb-6
          md:-mt-[115px] md:pt-4 md:pb-8
          clip-hero-header
        "
      >
        {/* Header row containing title on the left */}
        <div className="w-full flex flex-col md:flex-row md:items-start justify-between px-6 md:px-16 h-auto md:h-[76px] mb-3 md:mb-4">
          
          {/* Left Side: "How can we help you?" Title - Shifted right on desktop */}
          <div className="pt-1 md:pt-3 md:pl-[240px]">
            <h2 className="text-lg md:text-xl font-medium tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              How can we help you?
            </h2>
          </div>

          {/* Right side spacer to maintain desktop grid spacing */}
          <div className="hidden md:block w-[500px]" />
        </div>

        {/* 3. Cards Options (Sits right below the header row, revealed upon scrolling) */}
        <div className="w-full bg-black px-6 md:px-16 pt-2 flex justify-center">
          <div className="max-w-[928px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Exchange your Bike */}
            <div 
              onClick={() => router.push("/book")}
              className="
                bg-[#2A2A2A] text-white h-[144px] px-6 flex flex-col items-center justify-center cursor-pointer 
                clip-card transition-all duration-300 hover:bg-[#383838] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.65)]
                border border-white/5 hover:border-white/10 group
              "
            >
              <div className="w-14 h-14 rounded-full border border-white/10 bg-black/40 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                <div className="relative w-6 h-6">
                  <RefreshCw className="text-white" size={24} />
                  <span className="absolute top-[9px] left-[9px] w-1.5 h-1.5 rounded-full bg-[#E10A17]" />
                </div>
              </div>
              <span className="text-[16px] leading-[22.4px] font-medium text-center">
                Exchange your<br />Bike
              </span>
            </div>

            {/* Card 2: Find Dealers */}
            <div 
              onClick={() => router.push("/book")}
              className="
                bg-[#2A2A2A] text-white h-[144px] px-6 flex flex-col items-center justify-center cursor-pointer 
                clip-card transition-all duration-300 hover:bg-[#383838] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.65)]
                border border-white/5 hover:border-white/10 group
              "
            >
              <div className="w-14 h-14 rounded-full border border-white/10 bg-black/40 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                <div className="relative w-6 h-6">
                  <MapPin className="text-white" size={24} />
                  <span className="absolute top-[6px] left-[9px] w-1.5 h-1.5 rounded-full bg-[#E10A17]" />
                </div>
              </div>
              <span className="text-[16px] leading-[22.4px] font-medium text-center">
                Find Dealers
              </span>
            </div>

            {/* Card 3: Help & Support */}
            <div 
              onClick={() => router.push("/book")}
              className="
                bg-[#2A2A2A] text-white h-[144px] px-6 flex flex-col items-center justify-center cursor-pointer 
                clip-card transition-all duration-300 hover:bg-[#383838] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.65)]
                border border-white/5 hover:border-white/10 group
              "
            >
              <div className="w-14 h-14 rounded-full border border-white/10 bg-black/40 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                <div className="relative w-6 h-6">
                  <Headphones className="text-white" size={24} />
                  <span className="absolute top-[3px] right-[4px] w-1.5 h-1.5 rounded-full bg-[#E10A17]" />
                </div>
              </div>
              <span className="text-[16px] leading-[22.4px] font-medium text-center">
                Help & Support
              </span>
            </div>

            {/* Card 4: Corporate Offers */}
            <div 
              onClick={() => router.push("/book")}
              className="
                bg-[#2A2A2A] text-white h-[144px] px-6 flex flex-col items-center justify-center cursor-pointer 
                clip-card transition-all duration-300 hover:bg-[#383838] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.65)]
                border border-white/5 hover:border-white/10 group
              "
            >
              <div className="w-14 h-14 rounded-full border border-white/10 bg-black/40 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                <div className="relative w-6 h-6">
                  <Tag className="text-white" size={24} />
                  <span className="absolute top-[7px] left-[7px] w-1.5 h-1.5 rounded-full bg-[#E10A17]" />
                </div>
              </div>
              <span className="text-[16px] leading-[22.4px] font-medium text-center">
                Corporate Offers
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}



