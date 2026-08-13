"use client";

import { useState } from "react";
import Image from "next/image";

interface HeroSlide {
  id: number;
  background: string;
  thumbnail: string;
  alt: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    background: "/hero/hero-1.png",
    thumbnail: "/hero/hero-1.png",
    alt: "Phoenix Motors motorcycles",
  },
  {
    id: 2,
    background: "/hero/hero-2.png",
    thumbnail: "/hero/hero-2.png",
    alt: "Hero Xtreme motorcycle",
  },
  {
    id: 3,
    background: "/hero/hero-3.png",
    thumbnail: "/hero/hero-3.png",
    alt: "Hero Xtreme motorcycles",
  },
  {
    id: 4,
    background: "/hero/hero-4.mp4",
    thumbnail: "/hero/hero-4.mp4",
    alt: "Hero Xtreme motorcycle",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeSlide = heroSlides[currentSlide];

  return (
    <section
      className="
        relative
        w-full
        h-[100svh]
        min-h-[600px]
        overflow-hidden
        bg-black
      "
    >
      {/* =====================================================
          MAIN BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0 z-0">
        <Image
          key={activeSlide.id}
          src={activeSlide.background}
          alt={activeSlide.alt}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="
            object-cover
            object-center
            transition-opacity
            duration-700
          "
        />

        {/* 
          VERY LIGHT OVERLAY

          Your previous version had a dark overlay.
          This one keeps the original image bright and clear.
        */}
        <div className="absolute inset-0 bg-black/[0.04]" />

        {/* Very small bottom gradient for text visibility */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[30%]
            bg-gradient-to-t
            from-black/15
            via-black/5
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          HERO CONTENT WRAPPER
      ====================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          h-full
          w-full
          max-w-[1920px]
        "
      >
        {/* ===================================================
            EXPLORE NOW BUTTON
        ==================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-[46%]
            -translate-x-1/2
            -translate-y-1/2

            sm:top-[46%]
            md:top-[46%]
            lg:top-[46%]
            xl:top-[46%]
          "
        >
          <button
            type="button"
            className="
              group
              flex
              h-[40px]
              w-[210px]
              items-center
              justify-center

              border
              border-white/90

              bg-black/10

              px-4

              text-[11px]
              font-bold
              uppercase
              tracking-[-0.02em]
              text-white

              backdrop-blur-[1px]

              transition-all
              duration-300

              hover:bg-white
              hover:text-black

              sm:h-[42px]
              sm:w-[230px]
              sm:text-[12px]

              md:w-[250px]

              lg:h-[40px]
              lg:w-[285px]
              lg:text-[13px]

              xl:w-[285px]
            "
          >
            Explore Now
          </button>
        </div>

        {/* ===================================================
            DESKTOP / LAPTOP THUMBNAILS
        ==================================================== */}

        <div
          className="
            absolute

            bottom-[70px]
            right-[4%]

            hidden

            md:block
            md:w-[56%]

            lg:right-[7%]
            lg:w-[50%]

            xl:right-[7%]
            xl:w-[48%]

            2xl:right-[8%]
            2xl:w-[46%]
          "
        >
          {/* THUMBNAILS */}

          <div
            className="
              flex
              w-full
              items-center
              justify-end

              gap-3

              lg:gap-4
            "
          >
            {heroSlides.map((slide, index) => {
              const isActive = currentSlide === index;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Open slide ${index + 1}`}
                  className="
                    group
                    relative
                    overflow-hidden
                    bg-black

                    w-[31%]

                    max-w-[210px]

                    outline-none

                    transition-all
                    duration-300
                  "
                >
                  {/* IMAGE */}

                  <div
                    className="
                      relative
                      aspect-[16/9]
                      w-full
                      overflow-hidden
                    "
                  >
                    <Image
                      src={slide.thumbnail}
                      alt={`Hero preview ${index + 1}`}
                      fill
                      quality={100}
                      sizes="
                        (max-width: 1024px) 180px,
                        (max-width: 1440px) 200px,
                        220px
                      "
                      className="
                        object-cover
                        object-center

                        transition-transform
                        duration-500

                        group-hover:scale-[1.04]
                      "
                    />

                    {/* inactive slight overlay */}

                    {!isActive && (
                      <div
                        className="
                          absolute
                          inset-0
                          bg-black/[0.03]
                          transition-all
                          duration-300

                          group-hover:bg-transparent
                        "
                      />
                    )}
                  </div>

                  {/* ACTIVE RED LINE */}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-[3px]

                      bg-[#ed1c24]

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>

          {/* =================================================
              DESKTOP COUNTER
          ================================================== */}

          <div
            className="
              mt-4
              flex
              items-center
              justify-start
            "
          >
            <span
              className="
                text-[36px]
                font-light
                leading-none
                tracking-[-0.06em]
                text-white

                lg:text-[42px]
                xl:text-[46px]
              "
            >
              {currentSlide + 1}
              <span className="mx-[2px]">/</span>
              {heroSlides.length}
            </span>
          </div>
        </div>

        {/* ===================================================
            MOBILE / SMALL TABLET SLIDER
        ==================================================== */}

        <div
          className="
            absolute

            bottom-[30px]
            left-0

            w-full

            px-4

            sm:px-6

            md:hidden
          "
        >
          {/* MOBILE THUMBNAILS */}

          <div
            className="
              flex
              w-full
              items-center
              justify-center

              gap-2

              sm:gap-3
            "
          >
            {heroSlides.map((slide, index) => {
              const isActive = currentSlide === index;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Open slide ${index + 1}`}
                  className="
                    group
                    relative

                    w-[32%]

                    overflow-hidden

                    bg-black

                    outline-none
                  "
                >
                  <div
                    className="
                      relative
                      aspect-[16/9]
                      w-full
                      overflow-hidden
                    "
                  >
                    <Image
                      src={slide.thumbnail}
                      alt={`Hero preview ${index + 1}`}
                      fill
                      quality={100}
                      sizes="33vw"
                      className="
                        object-cover
                        object-center
                      "
                    />
                  </div>

                  {/* ACTIVE RED LINE */}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0

                      h-[2px]

                      bg-[#ed1c24]

                      transition-all
                      duration-300

                      ${isActive ? "w-full" : "w-0"}
                    `}
                  />
                </button>
              );
            })}
          </div>

          {/* MOBILE COUNTER */}

          <div className="mt-4">
            <span
              className="
                text-[28px]
                font-light
                leading-none
                tracking-[-0.05em]
                text-white

                sm:text-[32px]
              "
            >
              {currentSlide + 1}
              <span className="mx-[2px]">/</span>
              {heroSlides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}