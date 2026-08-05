"use client";

import Header from "./../../app/layout/header";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Hero.png')",
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="text-white  md:text-4xl font-light text-center md:mt-[-220] font-grotesk ">
          Your Next Adventure Starts in Style.
        </h1>
      </div>
     <div className="flex justify-center  ">
  <button className="  border border-white text-sm  mb-10 font-grotesk text-white w-55 h-10 ">
    Start Your Adventure
  </button>
      </div>
    </section>
  );
}
