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
      src: "/images/slide1.png",
      alt: "Hero Destini - Scooter Ka Hero",
      link: "/book",
    },
    {
      type: "image",
      src: "/images/ev.png",
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
      
    </div>
  );
}




