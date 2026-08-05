"use client";

import Header from "./../../app/layout/header";

export default function Hero() {
  return (
    <section
      className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-screen w-full bg-[#0052A5] bg-[size:100%_auto] lg:bg-cover bg-center bg-no-repeat flex flex-col justify-between overflow-hidden"
      style={{
        backgroundImage: "url('/Hero.png')",
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 sm:px-6 pt-12 sm:pt-28 md:pt-32 text-center">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light font-grotesk leading-tight drop-shadow-md -mt-28 sm:mt-[-60px] md:mt-[-120px] lg:mt-[-220px]">
          Your Next Adventure Starts in Style.
        </h1>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 flex justify-center pb-8 sm:pb-10 md:pb-12">
        <button className="border border-white text-xs sm:text-sm font-grotesk text-white w-48 sm:w-52 md:w-55 h-9 sm:h-10 hover:bg-white hover:text-[#0A4EA5] transition-colors">
          Start Your Adventure
        </button>
      </div>
    </section>
  );
}
