"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MomentsInMotion() {
  return (
    <section className="w-full py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Moments in Motion
        </h2>
      </div>

      {/* Main Track: Seamless Continuous Infinite Marquee Loop */}
      <div className="flex overflow-hidden relative w-full">
        <motion.div
          className="flex gap-6 shrink-0"
          animate={{ x: ["0%", "-50%"] }} // Smooth linear left-to-right infinite loop
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Render loop sequence twice to enable seamless infinite scroll */}
          {[1, 2].map((loopIndex) => (
            <div key={loopIndex} className="flex gap-6 shrink-0">
              
              {/* ==================== 1. FIRST TALL CARD ==================== */}
              <div className="w-[360px] h-[544px] relative rounded-lg overflow-hidden shadow-sm shrink-0">
                <Image
                  src="/images/momentsinmotion/10-removebg-preview.png"
                  alt="Red Scooter Rider"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <p className="text-white font-bold text-lg mb-3">
                        Ride in style
                  </p>
                 <p className="text-gray-200 text-sm">
                    Genuine gear designed for every rider.
                 </p>
                </div>
              </div>

              {/* ==================== 2. FIRST 4 CARDS (2x2 GRID) ==================== */}
              <div className="flex gap-6 shrink-0">
                {/* Column A */}
                <div className="flex flex-col gap-6 w-[480px]">
                  <div className="relative h-[320px] rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src="/images/momentsinmotion/hjk.jpg"
                      alt="Two Adventure Bikes"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-start">
                      <h3 className="text-white text-lg font-bold">
                        Adventure Awaits
                      </h3>
                      <p className="text-gray-200 text-sm mt-1">
                        Built to conquer every road with confidence.
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[200px] rounded-lg overflow-hidden shadow-sm grid grid-cols-2 bg-[#0052A3]">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/momentsinmotion/151490222.webp"
                        alt="Rider"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-center text-white">
                      <h3 className="font-bold text-sm mb-2 leading-snug">
                        Ride Beyond the Ordinary
                      </h3>
                      <p className="text-[11px] leading-relaxed text-blue-100">
                        Every Hero motorcycle is built to inspire confidence, combining advanced engineering, refined performance and everyday practicality.Whether it&apos;s your daily commute or your next adventure, experience a ride that&apos;s smooth, reliable and designed to keep you moving forward.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column B */}
                <div className="flex flex-col gap-6 w-[380px]">
                  <div className="relative h-[320px] rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src="/images/momentsinmotion/merchandise-card.png"
                      alt="Rider in Red Hero Jacket"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                      <p className="text-white font-bold text-lg mb-3">
                        Ride with Confidence
                      </p>
                      <p className="text-gray-200 text-sm">
                        Safety and comfort for every mile.
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[200px] rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src="/images/momentsinmotion/yellowscooty.webp"
                      alt="Yellow Scooter Couple"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                      <h4 className="font-bold text-white text-md mb-1">
                        Everyday Freedom
                      </h4>
                      <p className="text-[11px] text-gray-200 leading-relaxed">
                        Smart mobility for modern commuting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================== 3. SECOND TALL CARD (WITH INNER SLIDING IMAGE) ==================== */}
              <div className="w-[360px] h-[544px] relative rounded-lg overflow-hidden shadow-sm shrink-0">
                {/* Inner Motion Container */}
                <motion.div
                  className="absolute inset-0 w-[130%] h-full"
                  animate={{ x: ["0%", "-20%", "0%"] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/momentsinmotion/tallcardcentre.jpg"
                    alt="Phoenix Everything Will Change"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Card Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end text-white z-10">
                  <h3 className="text-2xl font-bold mb-1">Phoenix</h3>
                  <p className="text-sm font-semibold text-gray-200">
                    Power Meets Presence
                  </p>
                  <p className="text-gray-200 text-sm">
                    Performance that commands attention.
                  </p>
                </div>
              </div>

              {/* ==================== 4. NEXT 4 CARDS (2x2 GRID) ==================== */}
              <div className="flex gap-6 shrink-0">
                {/* Column C */}
                <div className="flex flex-col gap-6 w-[480px]">
                  <div className="relative h-[320px] rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src="/images/momentsinmotion/hjk.jpg"
                      alt="Two Adventure Bikes"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-start">
                      <h3 className="text-white text-lg font-bold">
                       Adventure Awaits
                      </h3>
                      <p className="text-gray-200 text-sm mt-1">
                        Built to conquer every road with confidence.
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[200px] rounded-lg overflow-hidden shadow-sm grid grid-cols-2 bg-[#0052A3]">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/momentsinmotion/151490222.webp"
                        alt="Rider"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-center text-white">
                      <h3 className="font-bold text-lg mb-2 leading-snug">
                        Ride Beyond the Ordinary
                      </h3>
                      <p className="text-[11px] leading-relaxed text-blue-100">
                        Every Hero motorcycle is built to inspire confidence, combining advanced engineering, refined performance and everyday practicality. Whether it&apos;s your daily commute or your next adventure, experience a ride that&apos;s smooth, reliable and designed to keep you moving forward.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column D */}
                <div className="flex flex-col gap-6 w-[380px]">
                  <div className="relative h-[320px] rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src="/images/momentsinmotion/merchandise-card.png"
                      alt="Rider in Red Hero Jacket"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                      <p className="text-white font-bold text-lg mb-3">
                        Ride with Confidence
                      </p>
                      <p className="text-gray-200 text-sm">
                        Safety and comfort for every mile.
                      </p>
                        
                    </div>
                  </div>

                  <div className="relative h-[200px] rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src="/images/momentsinmotion/yellowscooty.webp"
                      alt="Yellow Scooter Couple"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                      <h4 className="font-bold text-sm mb-1">
                        Everyday Freedom
                      </h4>
                      <p className="text-[11px] text-gray-200 leading-relaxed">
                        Smart mobility for modern commuting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}