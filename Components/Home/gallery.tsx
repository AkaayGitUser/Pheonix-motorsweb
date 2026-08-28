"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MomentsInMotion() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#F5F6F6]

        py-8
        sm:py-10
        md:py-12
        lg:py-12
      "
    >
      {/* =====================================================
          TITLE
      ===================================================== */}

      <div
        className="
          mx-auto
          mb-6
          w-full
          max-w-7xl

          px-4

          sm:mb-8
          sm:px-6

          md:px-8

          lg:px-10
        "
      >
        <h2
          className="
            text-center
            font-landrover
            font-bold
            uppercase
            text-black

            text-[26px]

            sm:text-[30px]
            md:text-[34px]
            lg:text-[36px]
          "
        >
          Gallery
        </h2>
      </div>

      {/* =====================================================
          MAIN TRACK
      ===================================================== */}

      <div className="relative flex w-full overflow-hidden">
        <motion.div
          className="
            flex
            shrink-0

            gap-4

            sm:gap-5
            md:gap-6
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* =================================================
              LOOP TWICE FOR SEAMLESS MARQUEE
          ================================================= */}

          {[1, 2].map((loopIndex) => (
            <div
              key={loopIndex}
              className="
                flex
                shrink-0

                gap-4

                sm:gap-5
                md:gap-6
              "
            >
              {/* =================================================
                  1. FIRST TALL CARD
              ================================================= */}

              <div
                className="
                  relative
                  shrink-0
                  overflow-hidden
                  rounded-none
                  shadow-sm

                  h-[380px]
                  w-[260px]

                  sm:h-[460px]
                  sm:w-[300px]

                  lg:h-[544px]
                  lg:w-[360px]
                "
              >
                <Image
                  src="/images/momentsinmotion/10-removebg-preview.png"
                  alt="Red Scooter Rider"
                  fill
                  sizes="
                    (max-width:640px) 260px,
                    (max-width:1024px) 300px,
                    360px
                  "
                  className="object-cover"
                />

                <div
                  className="
                    absolute
                    inset-0

                    flex
                    flex-col
                    justify-end

                    bg-gradient-to-t
                    from-black/80
                    via-transparent
                    to-transparent

                    p-4

                    sm:p-6
                  "
                >
                  <p
                    className="
                      font-Neurail_Grotesk
                      text-base
                      text-white

                      sm:text-lg
                    "
                  >
                    Ride in style
                  </p>

                  <p
                    className="
                      text-xs
                      text-gray-200

                      sm:text-sm
                    "
                  >
                    Genuine gear designed for every rider.
                  </p>
                </div>
              </div>

              {/* =================================================
                  2. FIRST 4 CARDS
              ================================================= */}

              <div
                className="
                  flex
                  shrink-0

                  gap-4

                  sm:gap-5
                  md:gap-6
                "
              >
                {/* ================= COLUMN A ================= */}

                <div
                  className="
                    flex
                    flex-col

                    gap-4

                    w-[280px]

                    sm:w-[360px]
                    sm:gap-5

                    md:gap-6

                    lg:w-[480px]
                  "
                >
                  {/* TOP CARD */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-none
                      shadow-sm

                      h-[220px]

                      sm:h-[270px]

                      lg:h-[320px]
                    "
                  >
                    <Image
                      src="/images/momentsinmotion/hjk.jpg"
                      alt="Two Adventure Bikes"
                      fill
                      sizes="
                        (max-width:640px) 280px,
                        (max-width:1024px) 360px,
                        480px
                      "
                      className="object-cover"
                    />

                    <div
                      className="
                        absolute
                        inset-0

                        flex
                        flex-col
                        justify-start

                        bg-gradient-to-t
                        from-black/70
                        via-transparent
                        to-transparent

                        p-4

                        sm:p-6
                      "
                    >
                      <h3
                        className="
                          font-Neurail_Grotesk
                          text-base
                          text-white

                          sm:text-lg
                        "
                      >
                        Adventure Awaits
                      </h3>

                      <p
                        className="
                          mt-1

                          text-xs
                          text-gray-200

                          sm:text-sm
                        "
                      >
                        Built to conquer every road with confidence.
                      </p>
                    </div>
                  </div>

                  {/* BOTTOM CARD */}

                  <div
                    className="
                      grid
                      grid-cols-2

                      overflow-hidden
                      rounded-none
                      bg-[#0052A3]
                      shadow-sm

                      h-[145px]

                      sm:h-[175px]

                      lg:h-[200px]
                    "
                  >
                    {/* LEFT IMAGE */}

                    <div className="relative h-full w-full">
                      <Image
                        src="/images/momentsinmotion/151490222.webp"
                        alt="Rider"
                        fill
                        sizes="
                          (max-width:640px) 140px,
                          (max-width:1024px) 180px,
                          240px
                        "
                        className="object-cover"
                      />
                    </div>

                    {/* RIGHT CONTENT */}

                    <div
                      className="
                        flex
                        flex-col
                        justify-center

                        p-3
                        text-white

                        sm:p-4

                        lg:p-5
                      "
                    >
                      <h3
                        className="
                          mb-1

                          font-Neurail_Grotesk

                          text-xs
                          leading-snug

                          sm:text-sm

                          lg:text-[15px]
                        "
                      >
                        Ride Beyond the Ordinary
                      </h3>

                      <p
                        className="
                          line-clamp-3

                          text-[10px]
                          leading-tight
                          text-blue-100

                          sm:line-clamp-4
                          sm:text-[11px]
                          sm:leading-relaxed

                          lg:line-clamp-none
                          lg:text-[12px]
                        "
                      >
                        Every Hero motorcycle is built to inspire
                        confidence, combining advanced engineering,
                        refined performance and everyday practicality.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================= COLUMN B ================= */}

                <div
                  className="
                    flex
                    flex-col

                    gap-4

                    w-[230px]

                    sm:w-[300px]
                    sm:gap-5

                    md:gap-6

                    lg:w-[380px]
                  "
                >
                  {/* TOP CARD */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-none
                      shadow-sm

                      h-[220px]

                      sm:h-[270px]

                      lg:h-[320px]
                    "
                  >
                    <Image
                      src="/images/momentsinmotion/merchandise-card.png"
                      alt="Rider in Red Hero Jacket"
                      fill
                      sizes="
                        (max-width:640px) 230px,
                        (max-width:1024px) 300px,
                        380px
                      "
                      className="object-cover"
                    />

                    <div
                      className="
                        absolute
                        inset-0

                        flex
                        flex-col
                        justify-end

                        bg-gradient-to-t
                        from-black/80
                        via-transparent
                        to-transparent

                        p-4

                        sm:p-6
                      "
                    >
                      <p
                        className="
                          font-Neurail_Grotesk
                          text-base
                          text-white

                          sm:text-lg
                        "
                      >
                        Ride with Confidence
                      </p>

                      <p
                        className="
                          text-xs
                          text-gray-200

                          sm:text-sm
                        "
                      >
                        Safety and comfort for every mile.
                      </p>
                    </div>
                  </div>

                  {/* BOTTOM CARD */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-none
                      shadow-sm

                      h-[145px]

                      sm:h-[175px]

                      lg:h-[200px]
                    "
                  >
                    <Image
                      src="/images/momentsinmotion/yellowscooty.webp"
                      alt="Yellow Scooter Couple"
                      fill
                      sizes="
                        (max-width:640px) 230px,
                        (max-width:1024px) 300px,
                        380px
                      "
                      className="object-cover"
                    />

                    <div
                      className="
                        absolute
                        inset-0

                        flex
                        flex-col
                        justify-end

                        bg-gradient-to-t
                        from-black/80
                        via-black/20
                        to-transparent

                        p-3
                        text-white

                        sm:p-5
                      "
                    >
                      <h4
                        className="
                          font-Neurail_Grotesk

                          text-sm
                          text-white

                          sm:text-lg
                        "
                      >
                        Everyday Freedom
                      </h4>

                      <p
                        className="
                          text-xs
                          text-gray-200

                          sm:text-sm
                        "
                      >
                        Smart mobility for modern commuting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  3. SECOND TALL CARD
              ================================================= */}

              <div
                className="
                  relative
                  shrink-0
                  overflow-hidden
                  rounded-none
                  shadow-sm

                  h-[380px]
                  w-[260px]

                  sm:h-[460px]
                  sm:w-[300px]

                  lg:h-[544px]
                  lg:w-[360px]
                "
              >
                {/* INNER MOVING IMAGE */}

                <motion.div
                  className="
                    absolute
                    inset-0

                    h-full
                    w-[130%]
                  "
                  animate={{
                    x: ["0%", "-20%", "0%"],
                  }}
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
                    sizes="
                      (max-width:640px) 340px,
                      (max-width:1024px) 390px,
                      470px
                    "
                    className="object-cover"
                  />
                </motion.div>

                {/* CONTENT OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    z-10

                    flex
                    flex-col
                    justify-end

                    bg-gradient-to-t
                    from-black/90
                    via-black/20
                    to-transparent

                    p-4
                    text-white

                    sm:p-6
                  "
                >
                  <h3
                    className="
                      mb-1

                      font-Neurail_Grotesk

                      text-xl

                      sm:text-2xl
                    "
                  >
                    Phoenix
                  </h3>

                  <p
                    className="
                      mb-1

                      font-Neurail_Grotesk

                      text-xs
                      text-gray-200

                      sm:mb-2
                      sm:text-sm
                    "
                  >
                    Power Meets Presence
                  </p>

                  <p
                    className="
                      text-xs
                      text-gray-200

                      sm:text-sm
                    "
                  >
                    Performance that commands attention.
                  </p>
                </div>
              </div>

              {/* =================================================
                  4. NEXT 4 CARDS
              ================================================= */}

              <div
                className="
                  flex
                  shrink-0

                  gap-4

                  sm:gap-5
                  md:gap-6
                "
              >
                {/* ================= COLUMN C ================= */}

                <div
                  className="
                    flex
                    flex-col

                    gap-4

                    w-[280px]

                    sm:w-[360px]
                    sm:gap-5

                    md:gap-6

                    lg:w-[480px]
                  "
                >
                  {/* TOP CARD */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-none
                      shadow-sm

                      h-[220px]

                      sm:h-[270px]

                      lg:h-[320px]
                    "
                  >
                    <Image
                      src="/images/momentsinmotion/hjk.jpg"
                      alt="Two Adventure Bikes"
                      fill
                      sizes="
                        (max-width:640px) 280px,
                        (max-width:1024px) 360px,
                        480px
                      "
                      className="object-cover"
                    />

                    <div
                      className="
                        absolute
                        inset-0

                        flex
                        flex-col
                        justify-start

                        bg-gradient-to-t
                        from-black/70
                        via-transparent
                        to-transparent

                        p-4

                        sm:p-6
                      "
                    >
                      <h3
                        className="
                          font-Neurail_Grotesk
                          text-base
                          text-white

                          sm:text-lg
                        "
                      >
                        Adventure Awaits
                      </h3>

                      <p
                        className="
                          mt-1

                          text-xs
                          text-gray-200

                          sm:text-sm
                        "
                      >
                        Built to conquer every road with confidence.
                      </p>
                    </div>
                  </div>

                  {/* BOTTOM CARD */}

                  <div
                    className="
                      grid
                      grid-cols-2

                      overflow-hidden
                      rounded-none
                      bg-[#0052A3]
                      shadow-sm

                      h-[145px]

                      sm:h-[175px]

                      lg:h-[200px]
                    "
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/momentsinmotion/151490222.webp"
                        alt="Rider"
                        fill
                        sizes="
                          (max-width:640px) 140px,
                          (max-width:1024px) 180px,
                          240px
                        "
                        className="object-cover"
                      />
                    </div>

                    <div
                      className="
                        flex
                        flex-col
                        justify-center

                        p-3
                        text-white

                        sm:p-4

                        lg:p-5
                      "
                    >
                      <h3
                        className="
                          mb-1

                          font-Neurail_Grotesk

                          text-xs
                          leading-snug

                          sm:text-sm

                          lg:text-[15px]
                        "
                      >
                        Ride Beyond the Ordinary
                      </h3>

                      <p
                        className="
                          line-clamp-3

                          text-[10px]
                          leading-tight
                          text-blue-100

                          sm:line-clamp-4
                          sm:text-[11px]
                          sm:leading-relaxed

                          lg:line-clamp-none
                          lg:text-[12px]
                        "
                      >
                        Every Hero motorcycle is built to inspire
                        confidence, combining advanced engineering,
                        refined performance and everyday practicality.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================= COLUMN D ================= */}

                <div
                  className="
                    flex
                    flex-col

                    gap-4

                    w-[230px]

                    sm:w-[300px]
                    sm:gap-5

                    md:gap-6

                    lg:w-[380px]
                  "
                >
                  {/* TOP CARD */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-none
                      shadow-sm

                      h-[220px]

                      sm:h-[270px]

                      lg:h-[320px]
                    "
                  >
                    <Image
                      src="/images/momentsinmotion/merchandise-card.png"
                      alt="Rider in Red Hero Jacket"
                      fill
                      sizes="
                        (max-width:640px) 230px,
                        (max-width:1024px) 300px,
                        380px
                      "
                      className="object-cover"
                    />

                    <div
                      className="
                        absolute
                        inset-0

                        flex
                        flex-col
                        justify-end

                        bg-gradient-to-t
                        from-black/80
                        via-transparent
                        to-transparent

                        p-4

                        sm:p-6
                      "
                    >
                      <p
                        className="
                          font-Neurail_Grotesk
                          text-base
                          text-white

                          sm:text-lg
                        "
                      >
                        Ride with Confidence
                      </p>

                      <p
                        className="
                          text-xs
                          text-gray-200

                          sm:text-sm
                        "
                      >
                        Safety and comfort for every mile.
                      </p>
                    </div>
                  </div>

                  {/* BOTTOM CARD */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-none
                      shadow-sm

                      h-[145px]

                      sm:h-[175px]

                      lg:h-[200px]
                    "
                  >
                    <Image
                      src="/images/momentsinmotion/yellowscooty.webp"
                      alt="Yellow Scooter Couple"
                      fill
                      sizes="
                        (max-width:640px) 230px,
                        (max-width:1024px) 300px,
                        380px
                      "
                      className="object-cover"
                    />

                    <div
                      className="
                        absolute
                        inset-0

                        flex
                        flex-col
                        justify-end

                        bg-gradient-to-t
                        from-black/80
                        via-black/20
                        to-transparent

                        p-3
                        text-white

                        sm:p-5
                      "
                    >
                      <h4
                        className="
                          font-landrover

                          text-sm
                          text-white

                          sm:text-lg
                        "
                      >
                        Everyday Freedom
                      </h4>

                      <p
                        className="
                          text-xs
                          text-gray-200

                          sm:text-sm
                        "
                      >
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