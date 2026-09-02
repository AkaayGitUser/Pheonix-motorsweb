"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import {
  X,
  MessageCircleMore,
  CircleUserRound,
  ShieldCheck,
  Handshake,
  ChevronDown,
  Check,
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
  "mb-[3px] block text-[10px] font-medium text-[#222222] sm:text-[10.5px]";

const inputClass =
  "h-[34px] w-full border border-[#AEB7C2] bg-[#FAFAFA] " +
  "px-[10px] text-[11px] font-normal text-gray-800 " +
  "outline-none placeholder:text-[#94A0AE] " +
  "transition-all duration-200 " +
  "focus:border-[#075AA8] focus:bg-white " +
  "sm:h-[35px]";

/* =========================================================
   INPUT FIELD
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
        required
      />
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

type RequestCallBackProps = {
  onClose: () => void;
};

export default function RequestCallBack({
  onClose,
}: RequestCallBackProps) {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState("");

  /* =========================================================
     CLOSE POPUP
  ========================================================= */

  const closeAndGoHome = () => {
    setShowPopup(false);
    setShowSuccess(false);
    setEnquiryOpen(false);

    router.push("/");
  };

  /* =========================================================
     BODY SCROLL
  ========================================================= */

  useEffect(() => {
    if (!showPopup && !showSuccess) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAndGoHome();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleEscape);
    };
  }, [showPopup, showSuccess]);

  /* =========================================================
     LEFT FEATURES
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
      label: "Personalised assistance just for you",
      icon: Handshake,
    },
  ];

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!selectedEnquiry) {
      setEnquiryOpen(true);
      return;
    }

    setEnquiryOpen(false);

    setShowPopup(false);

    setShowSuccess(true);
  };

  return (
    <>
      {/* =====================================================
          MAIN FORM POPUP
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
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              inset-0
              z-[99999]

              flex
              min-h-[100dvh]
              w-full

              items-center
              justify-center

              overflow-y-auto

              p-[10px]
              sm:p-[14px]
              md:p-[18px]
            "
          >
            {/* =================================================
                HOMEPAGE / HERO BLUR BACKGROUND

                IMPORTANT:
                No Hero.png image here.

                Actual Hero remains visible underneath.
            ================================================= */}

            <div
              className="
                absolute
                inset-0

                bg-black/20

                backdrop-blur-[3px]
              "
              onMouseDown={closeAndGoHome}
            />

            {/* =================================================
                SMALL POPUP
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 15,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
              }}
              className="
                relative
                z-20

                w-full
                max-w-[520px]

                max-h-[90dvh]

                overflow-y-auto

                bg-white

                shadow-[0_18px_50px_rgba(0,0,0,0.28)]

                md:h-[390px]
                md:max-h-none
                md:overflow-visible
              "
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              {/* =================================================
                  CLOSE
              ================================================= */}

              <button
                type="button"
                onClick={onClose}
                aria-label="Close enquiry popup"
                className="
                  absolute

                  right-[8px]
                  top-[8px]

                  z-[100]

                  flex

                  h-[28px]
                  w-[28px]

                  items-center
                  justify-center

                  rounded-full

                  bg-white/80

                  text-[#303030]

                  transition-all
                  duration-200

                  hover:bg-white
                  hover:scale-110
                "
              >
                <X size={16} strokeWidth={1.8} />
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

                  md:grid-cols-[175px_minmax(0,345px)]
                "
              >
                {/* =================================================
                    LEFT SECTION
                ================================================= */}

                <div
                  className="
                    relative

                    min-h-[190px]

                    bg-[#E8F6FF]

                    px-[18px]
                    py-[18px]

                    sm:min-h-[200px]

                    sm:px-[20px]
                    sm:py-[20px]

                    md:h-full
                    md:min-h-0

                    md:px-[18px]
                    md:py-[20px]
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      mb-[10px]

                      flex

                      h-[38px]
                      w-[38px]

                      items-center
                      justify-center

                      rounded-full

                      bg-[#CDEBFF]

                      text-[#0075C9]
                    "
                  >
                    <MessageCircleMore
                      size={18}
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* TITLE */}

                  <h2
                    className="
                      text-[17px]
                      font-medium

                      leading-[1.2]

                      text-[#191919]

                      sm:text-[18px]
                    "
                  >
                    Lets Connect!!
                  </h2>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-[9px]

                      max-w-[145px]

                      text-[9px]

                      leading-[1.45]

                      text-[#333333]
                    "
                  >
                    Share your details and our team will get in touch
                    with you shortly.
                  </p>

                  {/* FEATURES */}

                  <div
                    className="
                      mt-[18px]

                      flex
                      flex-col

                      gap-[14px]
                    "
                  >
                    {features.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.id}
                          className="
                            flex
                            items-start
                            gap-[7px]
                          "
                        >
                          <div
                            className="
                              flex

                              h-[19px]
                              w-[19px]

                              shrink-0

                              items-center
                              justify-center

                              rounded-full

                              bg-[#D4EFFF]

                              text-[#0875C7]
                            "
                          >
                            <Icon
                              size={11}
                              strokeWidth={1.7}
                            />
                          </div>

                          <span
                            className="
                              max-w-[120px]

                              pt-[1px]

                              text-[8px]

                              leading-[1.35]

                              text-[#333333]
                            "
                          >
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* =================================================
                    RIGHT FORM SECTION
                ================================================= */}

                <div
                  className="
                    relative

                    min-w-0

                    bg-white

                    px-[18px]
                    py-[18px]

                    sm:px-[20px]
                    sm:py-[19px]

                    md:h-full

                    md:px-[20px]
                    md:py-[18px]
                  "
                >
                  {/* TITLE */}

                  <h3
                    className="
                      mb-[12px]

                      pr-[30px]

                      text-[17px]
                      font-medium

                      leading-tight

                      text-[#222222]

                      sm:text-[18px]
                    "
                  >
                    Find Your Perfect Ride
                  </h3>

                  {/* =================================================
                      FORM
                  ================================================= */}

                  <form
                    onSubmit={handleSubmit}
                    className="
                      flex

                      w-full

                      flex-col

                      gap-[7px]
                    "
                  >
                    {/* NAME */}

                    <Field
                      label="Name"
                      placeholder="Enter your name"
                    />

                    {/* PHONE */}

                    <Field
                      label="Phone Number"
                      type="tel"
                      placeholder="Enter your number"
                    />

                    {/* EMAIL */}

                    <Field
                      label="Email ID"
                      type="email"
                      placeholder="Enter your mail"
                    />

                    {/* LOCATION */}

                    <Field
                      label="Location"
                      placeholder="Enter your pin code or area"
                    />

                    {/* =================================================
                        ENQUIRY TYPE
                    ================================================= */}

                    <div className="relative w-full">
                      <label className={labelClass}>
                        Enquiry Type

                        <span className="ml-[2px] text-red-500">
                          *
                        </span>
                      </label>

                      {/* DROPDOWN BUTTON */}

                      <button
                        type="button"
                        onClick={() => {
                          setEnquiryOpen((previous) => !previous);
                        }}
                        className="
                          flex

                          h-[35px]
                          w-full

                          items-center
                          justify-between

                          border
                          border-[#AEB7C2]

                          bg-[#FAFAFA]

                          px-[10px]

                          text-left

                          text-[11px]

                          outline-none

                          transition-all
                          duration-200

                          focus:border-[#075AA8]
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
                          size={14}
                          strokeWidth={2}
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

                      {/* =================================================
                          OPTIONS
                      ================================================= */}

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

                              overflow-hidden

                              border
                              border-[#AEB7C2]

                              bg-white

                              shadow-[0_6px_16px_rgba(0,0,0,0.13)]
                            "
                          >
                            {enquiryOptions.map((item) => (
                              <button
                                key={item}
                                type="button"
                                onClick={() => {
                                  setSelectedEnquiry(item);

                                  setEnquiryOpen(false);
                                }}
                                className="
                                  flex

                                  h-[30px]
                                  w-full

                                  items-center

                                  px-[10px]

                                  text-left

                                  text-[10px]

                                  text-gray-800

                                  transition-colors

                                  hover:bg-[#E8F6FF]
                                "
                              >
                                {item}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* =================================================
                        REQUEST CALLBACK
                    ================================================= */}

                    <button
                      type="submit"
                      className="
                        mt-[5px]

                        flex

                        h-[35px]
                        w-full

                        items-center
                        justify-center

                        bg-[#075CA8]

                        px-4

                        text-[11px]
                        font-medium

                        text-white

                        transition-all
                        duration-300

                        hover:bg-[#064A8A]

                        active:scale-[0.99]
                      "
                    >
                      Request a Callback
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          SUCCESS POPUP
      ========================================================= */}

      <AnimatePresence>
        {showSuccess && (
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
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              inset-0

              z-[999999]

              flex

              min-h-[100dvh]
              w-full

              items-center
              justify-center

              px-4
            "
          >
            {/* HERO STILL VISIBLE */}

            <div
              className="
                absolute
                inset-0

                bg-black/20

                backdrop-blur-[3px]
              "
              onMouseDown={closeAndGoHome}
            />

            {/* =================================================
                SUCCESS BOX
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.82,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 15,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
              }}
              className="
                relative

                z-20

                w-full

                max-w-[330px]

                overflow-hidden

                bg-white

                shadow-[0_18px_50px_rgba(0,0,0,0.28)]
              "
            >
              {/* CLOSE */}

              <button
                type="button"
                onClick={closeAndGoHome}
                aria-label="Close success popup"
                className="
                  absolute

                  right-[10px]
                  top-[10px]

                  z-30

                  flex

                  h-[28px]
                  w-[28px]

                  items-center
                  justify-center

                  rounded-full

                  bg-white/20

                  text-white

                  transition-colors

                  hover:bg-white/30
                "
              >
                <X size={16} strokeWidth={2} />
              </button>

              {/* =================================================
                  SUCCESS TOP
              ================================================= */}

              <div
                className="
                  bg-gradient-to-r
                  from-[#075CA8]
                  to-[#0878CC]

                  px-5

                  pb-5
                  pt-6

                  text-center
                "
              >
                <motion.div
                  initial={{
                    scale: 0,
                    rotate: -30,
                  }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    delay: 0.1,
                    duration: 0.35,
                  }}
                  className="
                    mx-auto

                    mb-3

                    flex

                    h-[52px]
                    w-[52px]

                    items-center
                    justify-center

                    rounded-full

                    bg-white

                    shadow-md
                  "
                >
                  <Check
                    size={28}
                    strokeWidth={3}
                    className="text-green-500"
                  />
                </motion.div>

                <h2
                  className="
                    text-[20px]
                    font-semibold

                    text-white
                  "
                >
                  Success!
                </h2>
              </div>

              {/* =================================================
                  SUCCESS DETAILS
              ================================================= */}

              <div
                className="
                  px-5
                  py-5

                  text-center
                "
              >
                <h3
                  className="
                    text-[16px]
                    font-semibold

                    text-[#1F2937]
                  "
                >
                  Request Submitted Successfully
                </h3>

                <p
                  className="
                    mx-auto

                    mt-2

                    max-w-[270px]

                    text-[11px]

                    leading-[1.6]

                    text-gray-600
                  "
                >
                  Thank you for contacting Phoenix Motors. Our team
                  will get in touch with you shortly.
                </p>

                {/* ENQUIRY TYPE */}

                {selectedEnquiry && (
                  <div
                    className="
                      mt-4

                      bg-[#F5F9FD]

                      px-3
                      py-2

                      text-left
                    "
                  >
                    <p className="text-[9px] text-gray-500">
                      Enquiry Type
                    </p>

                    <p
                      className="
                        mt-[2px]

                        text-[11px]
                        font-medium

                        text-[#1F2937]
                      "
                    >
                      {selectedEnquiry}
                    </p>
                  </div>
                )}

                {/* DONE */}

                <button
                  type="button"
                  onClick={closeAndGoHome}
                  className="
                    mt-4

                    flex

                    h-[36px]
                    w-full

                    items-center
                    justify-center

                    bg-[#075CA8]

                    text-[11px]
                    font-medium

                    text-white

                    transition-all
                    duration-300

                    hover:bg-[#064A8A]

                    active:scale-[0.99]
                  "
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 