"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "./../../app/layout/header";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircleMore,
  CircleUserRound,
  ShieldCheck,
  Handshake,
  ChevronDown,
  Check,
} from "lucide-react";

/* =========================================================
   ENQUIRY OPTIONS & STYLES FOR REQUEST CALLBACK POPUP
========================================================= */

const enquiryOptions = [
  "New Vehicle Enquiry",
  "Service Appointment",
  "Finance Assistance",
];

const labelClass =
  "mb-[3px] block text-[11px] font-medium text-[#222222] sm:text-[11.5px]";

const inputClass =
  "h-[32px] w-full border border-[#AEB7C2] bg-[#FAFAFA] " +
  "px-[10px] text-[12px] font-normal text-gray-800 " +
  "outline-none placeholder:text-[#94A0AE] " +
  "transition-all duration-200 " +
  "focus:border-[#075AA8] focus:bg-white " +
  "sm:h-[34px]";

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
   COMPACT DROPDOWN COMPONENT (FOR TEST RIDE MODAL)
========================================================= */

type DropdownOption = {
  value: string;
  label: string;
};

function CompactDropdown({
  label,
  placeholder,
  options,
  direction = "down",
}: {
  label: string;
  placeholder: string;
  options: DropdownOption[];
  direction?: "up" | "down";
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const selectedLabel =
    options.find((option) => option.value === selected)?.label ?? "";

  return (
    <div className="relative">
      <label className="mb-1 block text-[11px] font-medium text-gray-800 sm:text-[12px]">
        {label} <span className="text-red-500">*</span>
      </label>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-8 w-full items-center justify-between rounded-[5px] border border-[#D7DCE2] bg-[#F6F7F8] px-3 text-left text-[11px] font-medium text-gray-800 outline-none transition hover:border-[#B9C1CC] focus:border-[#0052A5] focus:bg-white sm:h-9 sm:text-[12px]"
      >
        <span className={selectedLabel ? "text-gray-800" : "text-[#7C8798]"}>
          {selectedLabel || placeholder}
        </span>

        <ChevronDown
          size={15}
          className={`shrink-0 text-[#6B7280] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className={`absolute left-0 right-0 z-[250] overflow-hidden rounded-[6px] border border-[#D7DCE2] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.14)] ${
            direction === "up"
              ? "bottom-[calc(100%+6px)]"
              : "top-[calc(100%+6px)]"
          }`}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                setSelected(option.value);
                setOpen(false);
              }}
              className="block w-full border-b border-[#EEF1F4] px-3 py-2 text-left text-[11px] font-medium text-gray-800 transition last:border-b-0 hover:bg-[#F5F7FA] sm:text-[12px]"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   TEST RIDE POPUP CONTENT & MODAL COMPONENT
========================================================= */

function TestRidePopupContent({ onClose }: { onClose: () => void }) {
  const vehicleOptions = [
    { value: "splendor-plus", label: "Splendor Plus" },
    { value: "xtreme-160r", label: "Xtreme 160R" },
    { value: "karizma-xmr", label: "Karizma XMR" },
    { value: "destini-110", label: "Destini 110" },
  ];

  const showroomOptions = [
    { value: "madhapur", label: "Phoenix Motors - Madhapur" },
    { value: "kukatpally", label: "Phoenix Motors - Kukatpally" },
    { value: "gachibowli", label: "Phoenix Motors - Gachibowli" },
    { value: "banjara-hills", label: "Phoenix Motors - Banjara Hills" },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#111] text-black"
      style={{
        fontFamily: '"Land Rover Web Bold", Arial, Helvetica, sans-serif',
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/momentsinmotion/test.png"
          alt="Book a test ride"
          fill
          unoptimized
          className="h-full w-full object-cover object-[40%_center] sm:object-[42%_center] md:object-[45%_center] lg:object-[47%_center]"
        />

        <div className="absolute inset-0 bg-black/20 md:bg-gradient-to-r md:from-black/35 md:via-black/10 md:to-black/5" />
      </div>

      {/* PHOENIX LOGO */}
      <div className="absolute left-4 top-4 z-30 sm:left-6 sm:top-5 md:left-8 md:top-7 lg:left-10 lg:top-8">
        <Image
          src="/images/momentsinmotion/logo.png"
          alt="Phoenix Motors"
          width={110}
          height={44}
          unoptimized
          className="h-auto w-[80px] object-contain sm:w-[92px] md:w-[102px] lg:w-[110px]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-full flex-col overflow-y-auto max-h-[90vh] md:max-h-[94vh] md:flex-row md:items-stretch md:justify-between md:overflow-visible">
        {/* LEFT SIDE */}
        <div className="flex w-full flex-col justify-end p-6 pt-14 text-white sm:p-8 sm:pt-18 md:w-[45%] md:p-10 md:pt-24 lg:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/85 sm:text-sm">
            Phoenix Motors
          </p>

          <h4 className="mt-2 max-w-[340px] text-xl font-medium leading-tight sm:mt-2.5 sm:text-3xl md:text-4xl">
            Find Your Perfect Ride
          </h4>

          <p className="mt-2 max-w-[380px] text-sm font-normal leading-relaxed text-white/90 sm:mt-2.5 sm:text-base">
            Book your test ride and experience your preferred motorcycle before you decide.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="flex w-full items-center justify-center p-4 sm:p-5 md:w-[55%] md:justify-end md:p-8 lg:p-10">
          <div className="relative mx-auto w-full max-w-[460px] rounded-xl bg-white p-5 shadow-[0_14px_45px_rgba(0,0,0,0.22)] sm:rounded-2xl sm:p-6 md:mx-0">
            {/* HEADER WITH LEFT ARROW CLOSE BUTTON */}
            <div className="relative mb-4 flex items-center justify-center">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close test ride popup"
                className="absolute left-0 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200 hover:text-black sm:h-9 sm:w-9"
              >
                <ArrowLeft size={18} strokeWidth={2} />
              </button>

              <h2 className="text-center text-lg font-bold leading-tight text-gray-900 sm:text-xl md:text-2xl">
                Start Your Journey
              </h2>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full space-y-2 sm:space-y-2.5"
            >
              <div>
                <label className="mb-1 block text-[11px] font-medium text-gray-800 sm:text-[12px]">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="h-8 w-full rounded-md border border-[#D7DCE2] bg-[#F6F7F8] px-3 text-xs font-medium text-gray-800 outline-none transition placeholder:text-[#98A2B3] focus:border-[#0052A5] focus:bg-white sm:h-9 sm:text-xs"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-medium text-gray-800 sm:text-[12px]">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="Enter your number"
                  className="h-8 w-full rounded-md border border-[#D7DCE2] bg-[#F6F7F8] px-3 text-xs font-medium text-gray-800 outline-none transition placeholder:text-[#98A2B3] focus:border-[#0052A5] focus:bg-white sm:h-9 sm:text-xs"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-medium text-gray-800 sm:text-[12px]">
                  Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-8 w-full rounded-md border border-[#D7DCE2] bg-[#F6F7F8] px-3 text-xs font-medium text-gray-800 outline-none transition placeholder:text-[#98A2B3] focus:border-[#0052A5] focus:bg-white sm:h-9 sm:text-xs"
                />
              </div>

              <CompactDropdown
                label="Vehicle Model"
                placeholder="Select vehicle model"
                options={vehicleOptions}
                direction="down"
              />

              <CompactDropdown
                label="Showroom"
                placeholder="Select showroom"
                options={showroomOptions}
                direction="up"
              />

              <button
                type="submit"
                className="mt-3 h-9 w-full rounded-md bg-[#0052A5] text-xs font-semibold text-white transition-all duration-300 hover:bg-[#003D7C] hover:shadow-[0_5px_16px_rgba(0,82,165,0.25)] sm:h-10 sm:text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestRideModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-3 sm:p-5"
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book a test ride"
    >
      <div
        className="relative w-full max-w-[1080px] max-h-[95vh] overflow-hidden rounded-[16px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.30)] sm:rounded-[20px]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div>
          <TestRidePopupContent onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   REQUEST CALLBACK POPUP COMPONENT
========================================================= */

type RequestCallBackProps = {
  onClose: () => void;
};

export function RequestCallBack({ onClose }: RequestCallBackProps) {
  const [showPopup, setShowPopup] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState("");

  const handleClose = () => {
    setShowPopup(false);
    setShowSuccess(false);
    setEnquiryOpen(false);
    onClose();
  };

  useEffect(() => {
    if (!showPopup && !showSuccess) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showPopup, showSuccess]);

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
      {/* MAIN FORM POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99999] flex min-h-[100dvh] w-full items-center justify-center overflow-y-auto p-[12px] sm:p-[16px] md:p-[20px]"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-[3px]"
              onMouseDown={handleClose}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onMouseDown={(e) => e.stopPropagation()}
              className="relative z-20 max-h-[90dvh] w-full max-w-[620px] overflow-y-auto bg-white shadow-[0_18px_50px_rgba(0,0,0,0.28)] md:h-[440px] md:max-h-none md:overflow-visible"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              <button
                type="button"
                onClick={handleClose}
                aria-label="Go back"
                className="absolute left-[12px] top-[12px] z-[100] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/80 text-[#303030] transition-all duration-200 hover:scale-110 hover:bg-white"
              >
                <ArrowLeft size={18} strokeWidth={1.8} />
              </button>

              <div className="grid w-full grid-cols-1 md:h-full md:grid-cols-[210px_minmax(0,410px)]">
                {/* LEFT SECTION (UPDATED CLEARANCE & PADDING) */}
                <div className="relative flex flex-col justify-start min-h-[210px] bg-[url('/hero/bg.png')] bg-cover bg-center px-[20px] pb-[20px] pt-[48px] sm:px-[22px] sm:pt-[52px] md:h-full md:min-h-0 md:px-[20px] md:pt-[54px] md:pb-[24px]">
                  <div className="mb-[12px] flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#CDEBFF] text-[#0075C9]">
                    <MessageCircleMore size={20} strokeWidth={1.7} />
                  </div>

                  <h2 className="text-[18px] font-semibold leading-[1.2] text-[#191919] sm:text-[20px]">
                    Lets Connect!!
                  </h2>

                  <p className="mt-[10px] max-w-[170px] text-[10px] leading-[1.45] text-[#333333] sm:text-[11px]">
                    Share your details and our team will get in touch with you shortly.
                  </p>

                  <div className="mt-[22px] flex flex-col gap-[16px]">
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
                        className="flex h-[32px] sm:h-[34px] w-full items-center justify-between border border-[#AEB7C2] bg-[#FAFAFA] px-[10px] text-left text-[12px] outline-none transition-all duration-200 focus:border-[#075AA8]"
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
                      className="mt-[6px] flex h-[34px] sm:h-[36px] w-full items-center justify-center bg-[#075CA8] px-4 font-semibold text-[12px] text-white transition-all duration-300 hover:bg-[#064A8A] active:scale-[0.99]"
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

      {/* SUCCESS POPUP */}
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
              animate={{ opacity: 1, scale: 1 }}
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

/* =========================================================
   MAIN HERO COMPONENT
========================================================= */

type Slide = {
  type: "video" | "image";
  src: string;
  alt: string;
  link: string;
  position?: string;
  title?: string;
  description?: string;
  tagline?: string;
  titleOffset?: string;
  buttonText?: string;
  buttonTitle?: string;
  buttonLink?: string;
};

export default function Hero() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isTestRideOpen, setIsTestRideOpen] = useState(false);

  const slides: Slide[] = [
    {
      type: "video",
      src: "/hero/hero.mp4",
      alt: "Hero Adventure Journey",
      link: "/book",
      position: "object-center",
    },
  ];

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full">
      <Header />

      <section
        id="hero-section"
        className="relative flex h-[calc(100dvh-48px)] min-h-[550px] w-full select-none flex-col justify-between overflow-hidden bg-black md:h-[calc(100dvh-56px)]"
      >
        <div className="absolute inset-0 z-0 h-full w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full"
            >
              {slides[activeIndex].type === "video" ? (
                <video
                  src={slides[activeIndex].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={slides[activeIndex].src}
                  alt={slides[activeIndex].alt}
                  fill
                  priority
                  className={`object-cover ${slides[activeIndex].position || "object-center"}`}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/55" />
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {slides[activeIndex].type === "video" && (
            <div className="pointer-events-none z-10 mt-20 flex absolute inset-0 flex-col items-center justify-center px-6 pb-24 pt-24 text-center md:pb-40 md:pt-28">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="max-w-3xl font-sans text-2xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] md:text-4xl lg:text-6xl leading-tight"
              >
                Your Next Adventure Starts in Style
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="pointer-events-auto mt-8 sm:mt-14 md:mt-13 lg:mt-4"
              >
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCallbackOpen(true);
                    }}
                    className="
                      flex h-[44px] w-[180px] cursor-pointer items-center justify-center
                      border border-white/10 bg-[#0056A6] font-medium text-xs
                      uppercase tracking-widest text-white shadow-2xl transition-all duration-300
                      hover:bg-[#00407C] sm:w-[190px] md:h-[46px] md:w-[200px] md:text-sm
                    "
                  >
                    Request Call Back
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsTestRideOpen(true);
                    }}
                    className="
                      flex h-[44px] w-[180px] cursor-pointer items-center justify-center
                      border border-white/10 bg-black font-medium text-xs
                      uppercase tracking-widest text-white shadow-2xl transition-all duration-300
                      hover:bg-black/80 sm:w-[190px] md:h-[46px] md:w-[195px] md:text-sm
                    "
                  >
                    Book A Testride
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {slides[activeIndex].type !== "video" && slides[activeIndex].title && (
            <div className={`pointer-events-none z-10 flex absolute inset-y-0 right-16 w-[calc(100%-48px)] flex-col items-start justify-center pt-24 text-left md:right-44 md:w-[614px] md:pt-28 ${slides[activeIndex].titleOffset || "pb-48 md:pb-56"}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-start"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-sans text-2xl font-bold uppercase tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:text-4xl md:whitespace-nowrap lg:text-5xl leading-tight"
                >
                  {slides[activeIndex].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-4 max-w-sm font-sans text-sm text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:max-w-md md:text-xl leading-snug"
                >
                  {slides[activeIndex].description}
                </motion.p>

                {slides[activeIndex].tagline && (
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-1 max-w-sm font-sans text-xs text-white/80 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:max-w-md md:text-base leading-normal"
                  >
                    {slides[activeIndex].tagline}
                  </motion.p>
                )}

                {slides[activeIndex].title !== "Ride Into The Future" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="pointer-events-auto mt-4 self-center"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(slides[activeIndex].link);
                      }}
                      className="group flex cursor-pointer items-center gap-2 rounded-sm border border-white/10 bg-[#0056A6] px-8 py-3 font-medium text-xs uppercase tracking-widest text-white shadow-2xl transition-all duration-300 hover:bg-[#00407C] md:text-sm"
                    >
                      Book Now
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {slides[activeIndex].buttonText && (
            <div className="pointer-events-none z-10 flex absolute inset-y-0 right-6 w-[calc(100%-48px)] flex-col items-start justify-center pb-32 pt-24 text-left md:right-16 md:w-[614px] md:pb-36 md:pt-28">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="pointer-events-auto mt-8 flex flex-col items-center gap-4 self-center"
              >
                {slides[activeIndex].buttonTitle && (
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="text-center font-sans text-2xl font-bold uppercase tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:text-4xl lg:text-5xl leading-tight"
                  >
                    {slides[activeIndex].buttonTitle}
                  </motion.h1>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(slides[activeIndex].buttonLink || slides[activeIndex].link);
                  }}
                  className="group flex cursor-pointer items-center gap-2 rounded-sm border border-white/10 bg-[#0056A6] px-8 py-3 font-medium text-xs uppercase tracking-widest text-white shadow-2xl transition-all duration-300 hover:bg-[#00407C] md:text-sm"
                >
                  {slides[activeIndex].buttonText}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* RENDER REQUEST CALLBACK MODAL */}
      {isCallbackOpen && (
        <RequestCallBack onClose={() => setIsCallbackOpen(false)} />
      )}

      {/* RENDER TEST RIDE MODAL */}
      {isTestRideOpen && (
        <TestRideModal onClose={() => setIsTestRideOpen(false)} />
      )}
    </div>
  );
}