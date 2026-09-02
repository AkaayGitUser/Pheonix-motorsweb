"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import {
  X,
  MessageCircleMore,
  CircleUserRound,
  ShieldCheck,
  Handshake,
  ChevronDown,
} from "lucide-react";

/* =========================================================
   ENQUIRY OPTIONS
========================================================= */

const enquiryOptions = [
  "New Vehicle Enquiry",
  "Service Appointment",
  "Finance Assistance",
];

/* =========================================================
   COMMON STYLES
========================================================= */

const labelClass =
  "mb-[5px] block text-[11px] font-medium text-[#222222] sm:text-[11.5px]";

const inputClass =
  "h-[39px] w-full border border-[#AEB7C2] bg-[#FAFAFA] " +
  "px-[12px] text-[12px] font-normal text-gray-800 " +
  "outline-none placeholder:text-[#94A0AE] " +
  "transition-all duration-200 " +
  "focus:border-[#075AA8] focus:bg-white " +
  "sm:h-[40px]";

/* =========================================================
   COMMON INPUT FIELD
========================================================= */

const Field = ({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) => {
  return (
    <div className="w-full">
      <label className={labelClass}>
        {label}

        <span className="ml-[2px] text-red-500">*</span>
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function EnquiryBanner() {
  const pathname = usePathname();

  /* =========================================================
     STATES
  ========================================================= */

  const [showEnquiryButton, setShowEnquiryButton] =
    useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const [selectedEnquiry, setSelectedEnquiry] =
    useState("");

  /* =========================================================
     SHOW ENQUIRY BUTTON EVERYWHERE EXCEPT HERO SECTION

     BEHAVIOUR:

     Hero visible
     -> button hidden

     Scroll below Hero
     -> button visible

     Other pages without #hero-section
     -> button visible

     Route change
     -> automatically checks again
  ========================================================= */

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const timer = window.setTimeout(() => {
      const heroSection =
        document.getElementById("hero-section");

      /*
       * No Hero section on this page.
       *
       * Examples:
       * /motorcycles
       * /scooters
       * /vida
       * /events
       *
       * Show Enquiry Now immediately.
       */
      if (!heroSection) {
        setShowEnquiryButton(true);
        return;
      }

      /*
       * This page contains the Hero.
       *
       * Watch only that section.
       */
      observer = new IntersectionObserver(
        ([entry]) => {
          /*
           * Hero visible
           * -> hide Enquiry Now
           *
           * Hero not visible
           * -> show Enquiry Now
           */
          setShowEnquiryButton(
            !entry.isIntersecting
          );
        },
        {
          threshold: 0.05,
        }
      );

      observer.observe(heroSection);
    }, 0);

    return () => {
      window.clearTimeout(timer);

      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  /* =========================================================
     STOP BODY SCROLL WHEN POPUP IS OPEN
  ========================================================= */

  useEffect(() => {
    if (!showPopup) return;

    const oldOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setShowPopup(false);
        setEnquiryOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        oldOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [showPopup]);

  /* =========================================================
     LEFT SIDE FEATURES
  ========================================================= */

  const features = [
    {
      id: "response",
      label: "Quick response from our team",
      icon: CircleUserRound,
    },

    {
      id: "secure",
      label: "100% secure & spam free",
      icon: ShieldCheck,
    },

    {
      id: "help",
      label:
        "Personalised assistance just for you",
      icon: Handshake,
    },
  ];

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <>
      {/* =====================================================
          ENQUIRY NOW SIDE BUTTON
      ===================================================== */}

      <AnimatePresence>
        {showEnquiryButton &&
          !showPopup && (
            <motion.button
              type="button"
              onClick={() => {
                setShowPopup(true);
              }}
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -50,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              whileHover={{
                x: 3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              aria-label="Enquiry Now"
              className="
                fixed
                left-0
                top-1/2
                z-[999]

                flex
                h-[108px]
                w-[34px]
                -translate-y-1/2

                items-center
                justify-center

                bg-[#075AA8]
                text-white

                shadow-[4px_0_15px_rgba(0,0,0,0.25)]

                transition-colors
                duration-300

                hover:bg-[#064B8E]

                sm:h-[120px]
                sm:w-[38px]

                md:h-[132px]
                md:w-[40px]
              "
            >
              <span
                className="
                  whitespace-nowrap

                  text-[9px]
                  font-semibold
                  uppercase

                  tracking-[0.12em]

                  sm:text-[10px]
                "
                style={{
                  writingMode:
                    "vertical-rl", 

                  transform:
                    "rotate(180deg)",

                  fontFamily:
                    "Arial, Helvetica, sans-serif",
                }}
              >
                ENQUIRY NOW
              </span>
            </motion.button>
          )}
      </AnimatePresence>

      {/* =====================================================
          FULL SCREEN POPUP

          IMPORTANT:
          This must use showPopup.
      ===================================================== */}

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[99999]

              min-h-[100dvh]
              w-full

              overflow-y-auto
            "
          >
            {/* =================================================
                HERO.PNG FULL SCREEN BACKGROUND
            ================================================= */}

            <div
              className="
                fixed
                inset-0

                h-full
                w-full

                bg-cover
                bg-center
                bg-no-repeat
              "
              style={{
                backgroundImage:
                  "url('/Hero.png')",
              }}
            />

            {/* =================================================
                DARK OVERLAY
            ================================================= */}

            <div
              className="
                fixed
                inset-0

                bg-black/40

                backdrop-brightness-[0.80]
              "
            />

            {/* =================================================
                POPUP POSITION WRAPPER
            ================================================= */}

            <div
              className="
                relative
                z-20

                flex

                min-h-[100dvh]
                w-full

                items-center
                justify-center

                p-[10px]

                sm:p-[16px]

                md:p-[24px]
              "
              onMouseDown={() => {
                setShowPopup(false);

                setEnquiryOpen(false);
              }}
            >
              {/* =================================================
                  MAIN POPUP
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: 15,
                }}
                transition={{
                  duration: 0.23,
                  ease: "easeOut",
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                }}
                className="
                  relative

                  w-full
                  max-w-[600px]

                  bg-white

                  shadow-[0_22px_65px_rgba(0,0,0,0.38)]

                  max-h-[94dvh]

                  overflow-y-auto

                  md:h-[442px]

                  md:max-h-none

                  md:overflow-visible
                "
                style={{
                  fontFamily:
                    "Arial, Helvetica, sans-serif",
                }}
              >
                {/* =================================================
                    CLOSE BUTTON
                ================================================= */}

                <button
                  type="button"
                  onClick={() => {
                    setShowPopup(false);

                    setEnquiryOpen(false);
                  }}
                  aria-label="Close enquiry popup"
                  className="
                    absolute

                    right-[10px]
                    top-[10px]

                    z-[100]

                    flex

                    h-[28px]
                    w-[28px]

                    items-center
                    justify-center

                    bg-transparent

                    text-[#303030]

                    transition-transform
                    duration-200

                    hover:scale-110

                    sm:right-[12px]
                    sm:top-[10px]
                  "
                >
                  <X
                    size={17}
                    strokeWidth={1.8}
                  />
                </button>

                {/* =================================================
                    POPUP GRID
                ================================================= */}

                <div
                  className="
                    grid

                    w-full

                    grid-cols-1

                    md:h-full

                    md:grid-cols-[205px_minmax(0,395px)]
                  "
                >
                  {/* =================================================
                      LEFT BLUE SIDE
                  ================================================= */}

                  <div
                    className="
                      relative

                      min-h-[250px]

                      bg-[url('/hero/bg.png')]
                      bg-cover

                      px-[24px]
                      py-[24px]

                      sm:min-h-[260px]

                      sm:px-[26px]
                      sm:py-[25px]

                      md:h-full
                      md:min-h-0

                      md:px-[25px]
                      md:py-[24px]
                    "
                  >
                    {/* ===============================================
                        CHAT ICON
                    =============================================== */}

                    <div
                      className="
                        mb-[13px]

                        flex

                        h-[43px]
                        w-[43px]

                        items-center
                        justify-center

                        rounded-full

                        bg-[#CDEBFF]

                        text-[#0075C9]
                      "
                    >
                      <MessageCircleMore
                        size={20}
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* ===============================================
                        TITLE
                    =============================================== */}

                    <h2
                      className="
                        text-[18px]
                        font-medium

                        leading-[1.2]

                        text-[#191919]

                        sm:text-[19px]

                        md:text-[20px]
                      "
                    >
                      Lets Connect!!
                    </h2>

                    {/* ===============================================
                        TEXT
                    =============================================== */}

                    <p
                      className="
                        mt-[12px]

                        max-w-[160px]

                        text-[10px]
                        font-normal

                        leading-[1.45]

                        text-[#222222]
                      "
                    >
                      Share your details and our
                      team will get in touch with
                      you shortly.
                    </p>

                    {/* ===============================================
                        FEATURES
                    =============================================== */}

                    <div
                      className="
                        mt-[24px]

                        flex
                        flex-col

                        gap-[18px]

                        md:mt-[25px]
                        md:gap-[20px]
                      "
                    >
                      {features.map(
                        (item) => {
                          const Icon =
                            item.icon;

                          return (
                            <div
                              key={
                                item.id
                              }
                              className="
                                flex

                                items-start

                                gap-[9px]
                              "
                            >
                              <div
                                className="
                                  flex

                                  h-[21px]
                                  w-[21px]

                                  shrink-0

                                  items-center
                                  justify-center

                                  rounded-full

                                  bg-[#D4EFFF]

                                  text-[#0875C7]
                                "
                              >
                                <Icon
                                  size={
                                    12
                                  }
                                  strokeWidth={
                                    1.7
                                  }
                                />
                              </div>

                              <span
                                className="
                                  max-w-[135px]

                                  pt-[2px]

                                  text-[9px]
                                  font-normal

                                  leading-[1.35]

                                  text-[#333333]
                                "
                              >
                                {
                                  item.label
                                }
                              </span>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* =================================================
                      RIGHT FORM SIDE
                  ================================================= */}

                  <div
                    className="
                      relative

                      min-w-0

                      bg-white

                      px-[20px]
                      py-[23px]

                      sm:px-[24px]
                      sm:py-[24px]

                      md:h-full

                      md:px-[24px]
                      md:py-[24px]
                    "
                  >
                    {/* ===============================================
                        TITLE
                    =============================================== */}

                    <h3
                      className="
                        mb-[20px]

                        pr-[35px]

                        text-[19px]
                        font-normal

                        leading-tight

                        text-[#222222]

                        sm:text-[20px]

                        md:text-[21px]
                      "
                    >
                      Find Your Perfect Ride
                    </h3>

                    {/* =================================================
                        FORM
                    ================================================= */}

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();

                        if (
                          !selectedEnquiry
                        ) {
                          setEnquiryOpen(
                            true
                          );

                          return;
                        }

                        setShowPopup(
                          false
                        );
                      }}
                      className="
                        flex

                        w-full

                        flex-col

                        gap-[11px]
                      "
                    >
                      {/* ===============================================
                          NAME
                      =============================================== */}

                      <Field
                        label="Name"
                        placeholder="Enter your name"
                      />

                      {/* ===============================================
                          PHONE
                      =============================================== */}

                      <Field
                        label="Phone Number"
                        type="tel"
                        placeholder="Enter your number"
                      />

                      {/* ===============================================
                          EMAIL
                      =============================================== */}

                      <Field
                        label="Email ID"
                        type="email"
                        placeholder="Enter your mail"
                      />

                      {/* ===============================================
                          LOCATION
                      =============================================== */}

                      <Field
                        label="Location"
                        placeholder="Enter your pin code or area"
                      />

                      {/* =================================================
                          CUSTOM ENQUIRY DROPDOWN
                      ================================================= */}

                      <div className="relative w-full">
                        <label
                          className={
                            labelClass
                          }
                        >
                          Enquiry Type

                          <span className="ml-[2px] text-red-500">
                            *
                          </span>
                        </label>

                        {/* =============================================
                            DROPDOWN BUTTON
                        ============================================= */}

                        <button
                          type="button"
                          onClick={() => {
                            setEnquiryOpen(
                              (prev) =>
                                !prev
                            );
                          }}
                          className="
                            flex

                            h-[39px]
                            w-full

                            items-center
                            justify-between

                            border
                            border-[#AEB7C2]

                            bg-[#FAFAFA]

                            px-[12px]

                            text-left

                            text-[12px]

                            outline-none

                            transition-all
                            duration-200

                            focus:border-[#075AA8]

                            sm:h-[40px]
                          "
                        >
                          <span
                            className={
                              selectedEnquiry
                                ? "text-gray-800"
                                : "text-[#94A0AE]"
                            }
                          >
                            {selectedEnquiry ||
                              "Select enquiry type"}
                          </span>

                          <ChevronDown
                            size={15}
                            strokeWidth={
                              2
                            }
                            className={`
                              shrink-0

                              transition-transform
                              duration-200

                              ${
                                enquiryOpen
                                  ? "rotate-180"
                                  : "rotate-0"
                              }
                            `}
                          />
                        </button>

                        {/* =============================================
                            DROPDOWN OPTIONS
                        ============================================= */}

                        <AnimatePresence>
                          {enquiryOpen && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                y: -3,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                y: -3,
                              }}
                              transition={{
                                duration: 0.14,
                              }}
                              className="
                                absolute

                                left-0
                                top-full

                                z-[999]

                                mt-[2px]

                                w-full

                                border
                                border-[#AEB7C2]

                                bg-white

                                shadow-[0_7px_20px_rgba(0,0,0,0.15)]
                              "
                            >
                              {enquiryOptions.map(
                                (
                                  item
                                ) => (
                                  <button
                                    key={
                                      item
                                    }
                                    type="button"
                                    onClick={() => {
                                      setSelectedEnquiry(
                                        item
                                      );

                                      setEnquiryOpen(
                                        false
                                      );
                                    }}
                                    className="
                                      flex

                                      h-[32px]
                                      w-full

                                      items-center

                                      px-[12px]

                                      text-left

                                      text-[11px]

                                      text-gray-800

                                      transition-colors

                                      hover:bg-[#E8F6FF]

                                      sm:text-[12px]
                                    "
                                  >
                                    {
                                      item
                                    }
                                  </button>
                                )
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* =================================================
                          SUBMIT BUTTON
                      ================================================= */}

                      <button
                        type="submit"
                        className="
                          mt-[7px]

                          flex

                          h-[40px]
                          w-full

                          items-center
                          justify-center

                          bg-[#075CA8]

                          px-4

                          text-[12px]
                          font-medium

                          text-white

                          transition-colors
                          duration-300

                          hover:bg-[#064A8A]
                        "
                      >
                        Request a Callback
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}