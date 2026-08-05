"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MomentsInMotion() {
  return (
    <section className="w-full py-8 sm:py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#303030] text-center">
          Moments in Motion
        </h2>
      </div>

      {/* Main Track: Seamless Continuous Infinite Marquee Loop */}
      <div className="flex overflow-hidden relative w-full">
        <motion.div
          className="flex gap-4 sm:gap-6 shrink-0"
          animate={{ x: ["0%", "-50%"] }} // Smooth linear left-to-right infinite loop
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Render loop sequence twice to enable seamless infinite scroll */}
          {[1, 2].map((loopIndex) => (
            <div key={loopIndex} className="flex gap-4 sm:gap-6 shrink-0">
              
              {/* ==================== 1. FIRST TALL CARD ==================== */}
              <div className="w-[260px] sm:w-[300px] lg:w-[360px] h-[380px] sm:h-[460px] lg:h-[544px] relative rounded-lg overflow-hidden shadow-sm shrink-0">
                <Image
                  src="/images/momentsinmotion/10-removebg-preview.png"
                  alt="Red Scooter Rider"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <p className="text-white font-Neurail_Grotesk text-base sm:text-lg mb-1 sm:mb-2">
                    Ride in style
                  </p>
                  <p className="text-gray-200 text-xs sm:text-sm">
                    Genuine gear designed for every rider.
                  </p>
                </div>
              </div>

              {/* ==================== 2. FIRST 4 CARDS (2x2 GRID) ==================== */}
              <div className="flex gap-4 sm:gap-6 shrink-0">
                {/* Column A */}
                <div className="flex flex-col gap-4 sm:gap-6 w-[280px] sm:w-[360px] lg:w-[480px]">
                  <div className="relative h-[220px] sm:h-[270px] lg:h-[320px] rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src="/images/momentsinmotion/hjk.jpg"
                      alt="Two Adventure Bikes"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 sm:p-6 flex flex-col justify-start">
                      <h3 className="text-white text-base sm:text-lg font-Neurail_Grotesk">
                        Adventure Awaits
                      </h3>
                      <p className="text-gray-200 text-xs sm:text-sm mt-1">
                        Built to conquer every road with confidence.
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[145px] sm:h-[175px] lg:h-[200px] rounded-lg overflow-hidden shadow-sm grid grid-cols-2 bg-[#0052A3]">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/momentsinmotion/151490222.webp"
                        alt="Rider"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3 sm:p-4 lg:p-5 flex flex-col justify-center text-white">
                      <h3 className="font-Neurail_Grotesk text-xs sm:text-sm lg:text-md mb-1 leading-snug">
                        Ride Beyond the Ordinary
                      </h3>
                      <p className="text-[10px] sm:text-[11px] lg:text-[12px] leading-tight sm:leading-relaxed text-blue-100 line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                        Every Hero motorcycle is built to inspire confidence, combining advanced engineering, refined performance and everyday practicality. Whether it&apos;s your daily commute or your next adventure, experience a ride that&apos;s smooth, reliable and designed to keep you moving forward.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column B */}
                <div className="flex flex-col gap-4 sm:gap-6 w-[230px] sm:w-[300px] lg:w-[380px]">
                  <div className="relative h-[220px] sm:h-[270px] lg:h-[320px] rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src="/images/momentsinmotion/merchandise-card.png"
                      alt="Rider in Red Hero Jacket"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6">
                      <p className="text-white font-Neurail_Grotesk text-base sm:text-lg">
                        Ride with Confidence
                      </p>
                      <p className="text-gray-200 text-xs sm:text-sm">
                        Safety and comfort for every mile.
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[145px] sm:h-[175px] lg:h-[200px] rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src="/images/momentsinmotion/yellowscooty.webp"
                      alt="Yellow Scooter Couple"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 sm:p-5 flex flex-col justify-end text-white">
                      <h4 className="font-Neurail_Grotesk text-white text-sm sm:text-lg">
                        Everyday Freedom
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-200">
                        Smart mobility for modern commuting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==================== 3. SECOND TALL CARD (WITH INNER SLIDING IMAGE) ==================== */}
              <div className="w-[260px] sm:w-[300px] lg:w-[360px] h-[380px] sm:h-[460px] lg:h-[544px] relative rounded-lg overflow-hidden shadow-sm shrink-0">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 sm:p-6 flex flex-col justify-end text-white z-10">
                  <h3 className="text-xl sm:text-2xl font-Neurail_Grotesk mb-1">Phoenix</h3>
                  <p className="text-xs sm:text-sm font-Neurail_Grotesk text-gray-200 mb-1 sm:mb-2">
                    Power Meets Presence
                  </p>
                  <p className="text-gray-200 text-xs sm:text-sm">
                    Performance that commands attention.
                  </p>
                </div>
              </div>

              {/* ==================== 4. NEXT 4 CARDS (2x2 GRID) ==================== */}
              <div className="flex gap-4 sm:gap-6 shrink-0">
                {/* Column C */}
                <div className="flex flex-col gap-4 sm:gap-6 w-[280px] sm:w-[360px] lg:w-[480px]">
                  <div className="relative h-[220px] sm:h-[270px] lg:h-[320px] rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src="/images/momentsinmotion/hjk.jpg"
                      alt="Two Adventure Bikes"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 sm:p-6 flex flex-col justify-start">
                      <h3 className="text-white text-base sm:text-lg font-Neurail_Grotesk">
                        Adventure Awaits
                      </h3>
                      <p className="text-gray-200 text-xs sm:text-sm mt-1">
                        Built to conquer every road with confidence.
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[145px] sm:h-[175px] lg:h-[200px] rounded-lg overflow-hidden shadow-sm grid grid-cols-2 bg-[#0052A3]">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/momentsinmotion/151490222.webp"
                        alt="Rider"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3 sm:p-4 lg:p-5 flex flex-col justify-center text-white">
                      <h3 className="font-Neurail_Grotesk text-xs sm:text-sm lg:text-md mb-1 leading-snug">
                        Ride Beyond the Ordinary
                      </h3>
                      <p className="text-[10px] sm:text-[11px] lg:text-[12px] leading-tight sm:leading-relaxed text-blue-100 line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                        Every Hero motorcycle is built to inspire confidence, combining advanced engineering, refined performance and everyday practicality. Whether it&apos;s your daily commute or your next adventure, experience a ride that&apos;s smooth, reliable and designed to keep you moving forward.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column D */}
                <div className="flex flex-col gap-4 sm:gap-6 w-[230px] sm:w-[300px] lg:w-[380px]">
                  <div className="relative h-[220px] sm:h-[270px] lg:h-[320px] rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src="/images/momentsinmotion/merchandise-card.png"
                      alt="Rider in Red Hero Jacket"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6">
                      <p className="text-white font-Neurail_Grotesk text-base sm:text-lg">
                        Ride with Confidence
                      </p>
                      <p className="text-gray-200 text-xs sm:text-sm">
                        Safety and comfort for every mile.
                      </p>
                    </div>
                  </div>

                  <div className="relative h-[145px] sm:h-[175px] lg:h-[200px] rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src="/images/momentsinmotion/yellowscooty.webp"
                      alt="Yellow Scooter Couple"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 sm:p-5 flex flex-col justify-end text-white">
                      <h4 className="font-Neurail_Grotesk text-sm sm:text-lg">
                        Everyday Freedom
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-200">
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