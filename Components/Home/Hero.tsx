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
      type: "video",
      src: "/hero/hero.mp4",
      alt: "Hero Adventure Journey",
      link: "/book",
      position: "object-center",
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



  return (
    <div className="relative w-full">
      {/* Header Navigation sits outside the slider in normal flow */}
      <Header />

      {/* 1. Fullscreen Media Slider Viewport (Adjusted height to account for header) */}
      <section className="relative w-full h-[calc(100dvh-48px)] md:h-[calc(100dvh-56px)] min-h-[500px] flex flex-col justify-between bg-black overflow-hidden select-none">

        {/* Background media wrapper */}
        <div
          className="absolute inset-0 w-full h-full z-0"
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
                  className={`object-cover ${slides[activeIndex].position || "object-center"}`}
                />
              )}
              {/* Vignette overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/55" />
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {slides[activeIndex].type === "video" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-28 pb-24 md:pb-40 z-10 pointer-events-none">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="text-white text-2xl md:text-4xl lg:text-6xl font-semibold tracking-tight max-w-4xl font-sans uppercase leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] mt-5"
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

              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="pointer-events-auto mt-8"
              >
               
                 <div className="flex gap-4">
      {/* Request Call Back */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          router.push("/book");
        }}
        className="px-6 py-3 bg-[#0056A6] text-white font-medium hover:bg-[#00407C] transition-all duration-300 uppercase tracking-widest text-xs md:text-sm rounded-full shadow-2xl flex items-center gap-2 group border border-white/10 cursor-pointer"
      >
        Request call back
        
      </button>

      {/* Book Test Ride */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          router.push("/test_ride");
        }}
        className="px-6 py-3 bg-black text-white font-medium  transition-all duration-300 uppercase tracking-widest text-xs md:text-sm rounded-full shadow-2xl flex items-center gap-2 group border border-white/10 cursor-pointer"
      >
        Book a testride
        
      </button>
    </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Slide Description Overlay (Active for slides with custom title/description) */}
        <AnimatePresence>
          {!(slides[activeIndex].type === "video") && (slides[activeIndex] as any).title && (
            <div className={`absolute inset-y-0 right-16 md:right-44 w-[calc(100%-48px)] md:w-[614px] flex flex-col justify-center items-start text-left z-10 pointer-events-none pt-24 md:pt-28 ${(slides[activeIndex] as any).titleOffset || 'pb-48 md:pb-56'}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-start"
              >
                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-tight font-sans drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] max-w-none md:max-w-none md:whitespace-nowrap"
                >
                  {(slides[activeIndex] as any).title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-white/90 text-sm md:text-xl mt-4 font-sans leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] max-w-sm md:max-w-md"
                >
                  {(slides[activeIndex] as any).description}
                </motion.p>

                {/* Tagline */}
                {(slides[activeIndex] as any).tagline && (
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-white/80 text-xs md:text-base mt-1 font-sans leading-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] max-w-sm md:max-w-md"
                  >
                    {(slides[activeIndex] as any).tagline}
                  </motion.p>
                )}

                {/* CTA Button */}
                {(slides[activeIndex] as any).title !== "Ride Into The Future" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="pointer-events-auto mt-4 self-center"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push((slides[activeIndex] as any).link);
                      }}
                      className="px-8 py-3 bg-[#0056A6] text-white font-medium hover:bg-[#00407C] transition-all duration-300 uppercase tracking-widest text-xs md:text-sm rounded-sm shadow-2xl flex items-center gap-2 group border border-white/10 cursor-pointer"
                    >
                      Book Now
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Custom Slide Button Overlay (Active for slides with custom buttonText) */}
        <AnimatePresence>
          {(slides[activeIndex] as any).buttonText && (
            <div className="absolute inset-y-0 right-6 md:right-16 w-[calc(100%-48px)] md:w-[614px] flex flex-col justify-center items-start text-left z-10 pointer-events-none pt-24 md:pt-28 pb-32 md:pb-36">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="pointer-events-auto mt-8 self-center flex flex-col items-center gap-4"
              >
                {(slides[activeIndex] as any).buttonTitle && (
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-tight font-sans drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-center"
                  >
                    {(slides[activeIndex] as any).buttonTitle}
                  </motion.h1>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push((slides[activeIndex] as any).buttonLink || slides[activeIndex].link);
                  }}
                  className="px-8 py-3 bg-[#0056A6] text-white font-medium hover:bg-[#00407C] transition-all duration-300 uppercase tracking-widest text-xs md:text-sm rounded-sm shadow-2xl flex items-center gap-2 group border border-white/10 cursor-pointer"
                >
                  {(slides[activeIndex] as any).buttonText}
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
                    ${activeIndex === idx
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

        </div>
      </section>

      {/* 2. Scrolling Reveal Help Widget (Positioned below the viewport fold, overlapping the bottom of the slider) */}

    </div>
  );
}




