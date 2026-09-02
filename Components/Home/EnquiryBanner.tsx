"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowLeft,
  MessageCircleMore,
  CircleUserRound,
  ShieldCheck,
  Handshake,
  ChevronDown,
  Check,
} from "lucide-react";

/* =========================================================
   ENQUIRY OPTIONS & STYLES
========================================================= */

const enquiryOptions = [
  "New Vehicle Enquiry",
  "Service Appointment",
  "Finance Assistance",
];

const labelClass =
  "mb-[3px] block text-[11px] font-medium text-[#222222] sm:text-[11.5px]";

const inputClass =
  "h-[34px] w-full border border-[#AEB7C2] bg-[#FAFAFA] " +
  "px-[10px] text-[12px] font-normal text-gray-800 " +
  "outline-none placeholder:text-[#94A0AE] " +
  "transition-all duration-200 " +
  "focus:border-[#075AA8] focus:bg-white " +
  "sm:h-[36px]";

/* =========================================================
   FORM FIELD COMPONENT
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
   MAIN ENQUIRY BANNER COMPONENT
========================================================= */

export default function EnquiryBanner() {
  const pathname = usePathname();

  /* =========================================================
     STATES
  ========================================================= */

  const [showEnquiryButton, setShowEnquiryButton] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState("");

  const handleClose = () => {
    setShowPopup(false);
    setShowSuccess(false);
    setEnquiryOpen(false);
  };

  /* =========================================================
     SHOW ENQUIRY BUTTON EVERYWHERE EXCEPT HERO SECTION
  ========================================================= */

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const timer = window.setTimeout(() => {
      const heroSection = document.getElementById("hero-section");

      if (!heroSection) {
        setShowEnquiryButton(true);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          setShowEnquiryButton(!entry.isIntersecting);
        },
        { threshold: 0.05 }
      );

      observer.observe(heroSection);
    }, 0);

    return () => {
      window.clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  /* =========================================================
     STOP BODY SCROLL & ESCAPE KEY HANDLING
  ========================================================= */

  useEffect(() => {
    if (!showPopup && !showSuccess) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showPopup, showSuccess]);

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
      label: "Personalised assistance just for you",
      icon: Handshake,
    },
  ];

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
          ENQUIRY NOW SIDE BUTTON
      ===================================================== */}

      <AnimatePresence>
        {showEnquiryButton && !showPopup && !showSuccess && (
          <motion.button
            type="button"
            onClick={() => setShowPopup(true)}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Enquiry Now"
            className="fixed left-0 top-1/2 z-[999] flex h-[108px] w-[34px] -translate-y-1/2 items-center justify-center bg-[#075AA8] text-white shadow-[4px_0_15px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-[#064B8E] sm:h-[120px] sm:w-[38px] md:h-[132px] md:w-[40px]"
          >
            <span
              className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.12em] sm:text-[10px]"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
            >
              ENQUIRY NOW
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* =====================================================
          MAIN FORM POPUP
      ===================================================== */}

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99999] flex min-h-[100dvh] w-full items-center justify-center overflow-y-auto p-[12px] sm:p-[16px] md:p-[20px]"
          >
            {/* BACKDROP BLUR */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-[3px]"
              onMouseDown={handleClose}
            />

            {/* POPUP CONTAINER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onMouseDown={(e) => e.stopPropagation()}
              className="relative z-20 max-h-[90dvh] w-full max-w-[620px] overflow-y-auto bg-white shadow-[0_18px_50px_rgba(0,0,0,0.28)] md:h-[440px] md:max-h-none md:overflow-visible"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              {/* BACK BUTTON */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Go back"
                className="absolute left-[10px] top-[10px] z-[100] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/80 text-[#303030] transition-all duration-200 hover:scale-110 hover:bg-white"
              >
                <ArrowLeft size={18} strokeWidth={1.8} />
              </button>

              <div className="grid w-full grid-cols-1 md:h-full md:grid-cols-[210px_minmax(0,410px)]">
                {/* LEFT SECTION (INCREASED TOP PADDING TO PUSH ICON DOWN) */}
                <div className="relative flex flex-col justify-start min-h-[210px] bg-[url('/hero/bg.png')] bg-cover bg-center px-[20px] pb-[20px] pt-[52px] sm:px-[22px] sm:pt-[56px] md:h-full md:min-h-0 md:px-[20px] md:pb-[24px] md:pt-[52px]">
                  {/* MESSAGE ICON */}
                  <div className="mb-[10px] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#CDEBFF] text-[#0075C9]">
                    <MessageCircleMore size={20} strokeWidth={1.7} />
                  </div>

                  <h2 className="text-[18px] font-semibold leading-[1.2] text-[#191919] sm:text-[20px]">
                    Lets Connect!!
                  </h2>

                  <p className="mt-[10px] max-w-[170px] text-[10px] leading-[1.45] text-[#333333] sm:text-[11px]">
                    Share your details and our team will get in touch with you shortly.
                  </p>

                  <div className="mt-[20px] flex flex-col gap-[14px]">
                    {features.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.id} className="flex items-center gap-[9px]">
                          <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#D4EFFF] text-[#0875C7]">
                            <Icon size={12} strokeWidth={1.7} />
                          </div>
                          <span className="max-w-[140px] text-[9.5px] leading-[1.35] text-[#333333] sm:text-[10.5px]">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* RIGHT FORM SECTION */}
                <div className="relative min-w-0 bg-white px-[20px] py-[20px] sm:px-[24px] md:h-full md:px-[24px] md:py-[22px]">
                  <h3 className="mb-[14px] text-[18px] font-semibold leading-tight text-[#222222] sm:text-[19px]">
                    Find Your Perfect Ride
                  </h3>

                  <form onSubmit={handleSubmit} className="flex w-full flex-col gap-[8px]">
                    <Field label="Name" placeholder="Enter your name" />
                    <Field label="Phone Number" type="tel" placeholder="Enter your number" />
                    <Field label="Email ID" type="email" placeholder="Enter your mail" />
                    <Field label="Location" placeholder="Enter your pin code or area" />

                    <div className="relative w-full">
                      <label className={labelClass}>
                        Enquiry Type
                        <span className="ml-[2px] text-red-500">*</span>
                      </label>

                      <button
                        type="button"
                        onClick={() => setEnquiryOpen((prev) => !prev)}
                        className="flex h-[34px] sm:h-[36px] w-full items-center justify-between border border-[#AEB7C2] bg-[#FAFAFA] px-[10px] text-left text-[12px] outline-none transition-all duration-200 focus:border-[#075AA8]"
                      >
                        <span className={selectedEnquiry ? "text-gray-800" : "text-[#94A0AE]"}>
                          {selectedEnquiry || "Select enquiry type"}
                        </span>
                        <ChevronDown
                          size={15}
                          strokeWidth={2}
                          className={`shrink-0 transition-transform duration-200 ${
                            enquiryOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {enquiryOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -3 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -3 }}
                            transition={{ duration: 0.14 }}
                            className="absolute left-0 top-full z-[999] mt-[2px] w-full overflow-hidden border border-[#AEB7C2] bg-white shadow-[0_6px_16px_rgba(0,0,0,0.13)]"
                          >
                            {enquiryOptions.map((item) => (
                              <button
                                key={item}
                                type="button"
                                onClick={() => {
                                  setSelectedEnquiry(item);
                                  setEnquiryOpen(false);
                                }}
                                className="flex h-[30px] w-full items-center px-[10px] text-left text-[11px] text-gray-800 transition-colors hover:bg-[#E8F6FF]"
                              >
                                {item}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      type="submit"
                      className="mt-[6px] flex h-[36px] sm:h-[38px] w-full items-center justify-center bg-[#075CA8] px-4 font-semibold text-[12px] text-white transition-all duration-300 hover:bg-[#064A8A] active:scale-[0.99]"
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

      {/* =====================================================
          SUCCESS POPUP
      ===================================================== */}

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999999] flex min-h-[100dvh] w-full items-center justify-center px-4"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-[3px]"
              onMouseDown={handleClose}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.82, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onMouseDown={(e) => e.stopPropagation()}
              className="relative z-20 w-full max-w-[360px] overflow-hidden bg-white shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
            >
              <div className="bg-gradient-to-r from-[#075CA8] to-[#0878CC] px-6 pb-6 pt-7 text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, duration: 0.35 }}
                  className="mx-auto mb-3 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white shadow-md"
                >
                  <Check size={30} strokeWidth={3} className="text-green-500" />
                </motion.div>
                <h2 className="font-semibold text-[22px] text-white">Success!</h2>
              </div>

              <div className="px-6 py-6 text-center">
                <h3 className="font-semibold text-[17px] text-[#1F2937]">
                  Request Submitted Successfully
                </h3>
                <p className="mx-auto mt-2 max-w-[290px] text-[12px] leading-[1.6] text-gray-600">
                  Thank you for contacting Phoenix Motors. Our team will get in touch with you shortly.
                </p>

                {selectedEnquiry && (
                  <div className="mt-4 bg-[#F5F9FD] px-3.5 py-2.5 text-left">
                    <p className="text-[10px] text-gray-500">Enquiry Type</p>
                    <p className="mt-[2px] font-medium text-[12px] text-[#1F2937]">
                      {selectedEnquiry}
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-5 flex h-[38px] w-full items-center justify-center bg-[#075CA8] font-medium text-[12px] text-white transition-all duration-300 hover:bg-[#064A8A] active:scale-[0.99]"
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