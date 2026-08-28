"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BuildYourOwn() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F5F6F6]
      "
      style={{
        fontFamily:
          '"Land Rover Web Bold", Arial, Helvetica, sans-serif',
      }}
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1600px]

          grid-cols-1

          px-5
          py-10

          sm:px-7
          sm:py-12

          md:px-10
          md:py-14

          lg:min-h-[650px]
          lg:grid-cols-[37%_63%]
          lg:items-center
          lg:gap-8
          lg:px-12
          lg:py-8

          xl:min-h-[680px]
          xl:grid-cols-[38%_62%]
          xl:px-[60px]

          2xl:px-[64px]
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div
          className="
            flex
            w-full
            flex-col
            items-start
            justify-center

            lg:pr-10
            xl:pr-14
          "
        >
          {/* HEADING - closer to sample */}

          <h2
            className="
              text-[24px]
              font-bold
              uppercase
              leading-[1.05]
              tracking-[0.01em]
              text-[#07131D]

              sm:text-[27px]

              md:text-[29px]

              lg:text-[31px]

              xl:text-[33px]
            "
          >
            ACCESSORIES
          </h2>

          {/* PARAGRAPH - smaller and lighter like sample */}

          <p
            className="
              mt-5
              max-w-[410px]

              text-[12px]
              font-normal
              leading-[1.65]
              tracking-[0.01em]

              text-[#46515B]

              sm:text-[13px]

              lg:max-w-[390px]
              lg:text-[13px]

              xl:text-[14px]
            "
          >
            Designed to complement. Built for everyday life. Made for your
            ride.
          </p>

          {/* =================================================
              VIEW ACCESSORIES BUTTON
          ================================================= */}

          <button
            type="button"
            className="
              group

              mt-7

              flex
              h-[40px]
              w-[150px]

              items-center
              justify-between

              overflow-hidden

              border
              border-[#07131D]

              bg-transparent

              px-5

              text-[9px]
              font-semibold
              uppercase
              tracking-[0.14em]

              text-[#07131D]

              transition-all
              duration-300
              ease-out

              hover:w-[205px]
              hover:bg-[#07131D]
              hover:text-white

              sm:w-[165px]
              sm:hover:w-[210px]

              lg:w-[170px]
              lg:hover:w-[205px]
            "
          >
            <span className="whitespace-nowrap">
              VIEW ACCESSORIES
            </span>

            <ArrowRight
              size={17}
              strokeWidth={1.6}
              className="
                ml-4
                shrink-0

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </button>
        </div>

        {/* =====================================================
            RIGHT IMAGE MOSAIC
        ====================================================== */}

        <div
          className="
            mt-8
            flex
            w-full
            flex-col

            gap-[14px]

            lg:mt-0
            lg:h-[500px]

            xl:h-[520px]

            2xl:h-[535px]
          "
        >
          {/* =================================================
              TOP ROW
          ================================================= */}

          <div
            className="
              grid
              w-full

              grid-cols-1

              gap-[14px]

              sm:grid-cols-2

              lg:h-[205px]

              xl:h-[215px]

              2xl:h-[220px]
            "
          >
            {/* TOP LEFT */}

            <div
              className="
                relative

                h-[220px]
                w-full

                overflow-hidden

                bg-white

                sm:h-[230px]

                lg:h-full
              "
            >
              <Image
                src="/Accessories/home-charging-desktop.png"
                alt="Hero home charging accessories"
                fill
                sizes="
                  (max-width:640px) 100vw,
                  (max-width:1024px) 50vw,
                  30vw
                "
                className="
                  object-cover
                  object-center

                  transition-transform
                  duration-700

                  hover:scale-[1.02]
                "
              />
            </div>

            {/* TOP RIGHT */}

            <div
              className="
                relative

                h-[220px]
                w-full

                overflow-hidden

                bg-white

                sm:h-[230px]

                lg:h-full
              "
            >
              <Image
                src="/Accessories/cover.png"
                alt="Hero bike cover"
                fill
                sizes="
                  (max-width:640px) 100vw,
                  (max-width:1024px) 50vw,
                  30vw
                "
                className="
                  object-cover
                  object-center

                  transition-transform
                  duration-700

                  hover:scale-[1.02]
                "
              />
            </div>
          </div>

          {/* =================================================
              BOTTOM ROW
          ================================================= */}

          <div
            className="
              grid
              w-full

              grid-cols-1

              gap-[14px]

              sm:grid-cols-[32%_68%]

              lg:min-h-0
              lg:flex-1

              lg:grid-cols-[30%_70%]
            "
          >
            {/* BOTTOM LEFT - HELMET */}

            <div
              className="
                relative

                h-[360px]
                w-full

                overflow-hidden

                bg-white

                sm:h-[380px]

                lg:h-full
              "
            >
              <Image
                src="/Accessories/helmet.avif"
                alt="Hero helmet accessory"
                fill
                sizes="
                  (max-width:640px) 100vw,
                  (max-width:1024px) 32vw,
                  18vw
                "
                className="
                  object-cover
                  object-center

                  transition-transform
                  duration-700

                  hover:scale-[1.02]
                "
              />
            </div>

            {/* BOTTOM RIGHT - HERO */}

            <div
              className="
                relative

                h-[330px]
                w-full

                overflow-hidden

                bg-white

                sm:h-[380px]

                lg:h-full
              "
            >
              <Image
                src="/Accessories/hero.png"
                alt="Hero smart accessories"
                fill
                sizes="
                  (max-width:640px) 100vw,
                  (max-width:1024px) 68vw,
                  44vw
                "
                className="
                  object-cover
                  object-center

                  transition-transform
                  duration-700

                  hover:scale-[1.02]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}