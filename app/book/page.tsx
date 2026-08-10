"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "./../../app/layout/header";

export default function Hero() {
  // =========================================================
  // FORM STATE
  // =========================================================

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  // =========================================================
  // POPUP STATE
  // =========================================================

  const [showForm, setShowForm] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // =========================================================
  // REFERENCE ID
  // =========================================================

  const [referenceId, setReferenceId] = useState("");

  // =========================================================
  // HANDLE INPUT CHANGE
  // =========================================================

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================================
  // HANDLE FORM SUBMIT
  // =========================================================

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Generate reference ID
    const randomNumber = Math.floor(10000 + Math.random() * 90000);

    setReferenceId(`PM-2026-${randomNumber}`);

    // Hide request form
    setShowForm(false);

    // Show confirmation popup
    setShowConfirmation(true);
  };

  // =========================================================
  // CLOSE FORM
  // =========================================================

  const handleCloseForm = () => {
    setShowForm(false);
  };

  // =========================================================
  // CLOSE CONFIRMATION
  // =========================================================

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Hero.png')",
      }}
    >
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <div className="absolute top-[-20px] left-0 right-0 z-20">
        <Header />
      </div>

      {/* ===================================================== */}
      {/* HERO CONTENT */}
      {/* ===================================================== */}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="text-gray-50 md:text-4xl text-center md:mt-[-220px] font-Neurial Grotesk font-regular font-thin">
          Your Next Adventure Starts in Style.
        </h1>
      </div>

      {/* ===================================================== */}
      {/* REQUEST A CALLBACK FORM */}
      {/* ===================================================== */}

      {showForm && !showConfirmation && (
        <div
          className="
            absolute
            inset-0
            z-50
            flex
            items-center
            justify-center
            sm:items-start
            sm:pt-20
            pt-10
            px-4
            bg-black/10
          "
        >
          <div
            className="
              bg-white
              w-full
              max-w-[500px]
              sm:max-w-xl
              md:w-[600px]
              h-auto
              md:h-[440px]
              flex
              flex-col
              md:flex-row
              max-h-[90vh]
              rounded-xl
              overflow-hidden
              shadow-2xl
            "
          >
            {/* ================================================= */}
            {/* LEFT SECTION */}
            {/* ================================================= */}

            <div
              className="
                hidden
                sm:flex
                md:w-[32%]
                bg-[#eef5fb]
                p-2
                md:py-6
                md:px-5
                flex-col
                justify-start
              "
            >
              {/* MESSAGE ICON */}

              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 overflow-hidden p-2">
                <Image
                  src="/msg.png"
                  alt="Contact Icon"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>

              <h2 className="text-xl font-normal text-gray-800 mb-2">
                Let{"'"}s Connect!!
              </h2>

              <p className="text-xs mb-6 text-[#343434] leading-relaxed">
                Share your details and our team will get in touch with
                <br />
                you shortly.
              </p>

              {/* FEATURES */}

              <div className="space-y-2 text-xs sm:text-sm text-[#606060]">
                {/* QUICK RESPONSE */}

                <div className="flex items-center gap-3">
                  <Image
                    src="/popupone.png"
                    alt="Quick response"
                    width={22}
                    height={22}
                    className="w-5 h-5 object-contain shrink-0"
                  />

                  <span className="text-[11px] sm:text-xs">
                    Quick response from our team
                  </span>
                </div>

                {/* SECURE */}

                <div className="flex items-center gap-3">
                  <Image
                    src="/task.png"
                    alt="Secure and spam free"
                    width={22}
                    height={22}
                    className="w-5 h-5 object-contain shrink-0"
                  />

                  <span className="text-[11px] sm:text-xs">
                    100% secure & spam free
                  </span>
                </div>

                {/* PERSONALIZED */}

                <div className="flex items-center gap-3">
                  <Image
                    src="/handshake.png"
                    alt="Personalised assistance"
                    width={22}
                    height={22}
                    className="w-5 h-5 object-contain shrink-0"
                  />

                  <span className="text-[11px] sm:text-xs">
                    Personalised assistance just for you
                  </span>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT FORM SECTION */}
            {/* ================================================= */}

            <div className="w-full md:w-[68%] p-6 sm:p-4 overflow-y-auto relative">
              {/* CLOSE BUTTON */}

              <button
                type="button"
                onClick={handleCloseForm}
                className="
                  absolute
                  top-3
                  right-3
                  z-30
                  w-8
                  h-8
                  flex
                  items-center
                  justify-center
                  p-1.5
                  rounded-full
                  hover:bg-gray-100
                  transition
                "
                aria-label="Close"
              >
                <Image
                  src="/cross.png"
                  alt="Close"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </button>

              {/* TITLE */}

              <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-5">
                Find Your Perfect Ride
              </h2>

              {/* ================================================= */}
              {/* FORM */}
              {/* ================================================= */}

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* NAME */}

                <div>
                  <label className="block text-xs sm:text-sm text-black mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="
                      w-full
                      border
                      border-gray-400
                      bg-[#F7f7f7]
                      placeholder:text-[#9CA3AF]
                      rounded-md
                      px-3
                      h-10
                      text-xs
                      sm:text-sm
                      outline-none
                      focus:border-[#004a99]
                    "
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label className="block text-xs sm:text-sm text-black mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your number"
                    required
                    className="
                      w-full
                      border
                      border-gray-400
                      bg-[#F7f7f7]
                      placeholder:text-[#9CA3AF]
                      rounded-md
                      px-3
                      h-10
                      text-xs
                      sm:text-sm
                      outline-none
                      focus:border-[#004a99]
                    "
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label className="block text-xs sm:text-sm text-black mb-1">
                    Email ID <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your mail"
                    required
                    className="
                      w-full
                      border
                      border-gray-400
                      bg-[#F7f7f7]
                      placeholder:text-[#9CA3AF]
                      rounded-md
                      px-3
                      h-10
                      text-xs
                      sm:text-sm
                      outline-none
                      focus:border-[#004a99]
                    "
                  />
                </div>

                {/* LOCATION */}

                <div>
                  <label className="block text-xs sm:text-sm text-black mb-1">
                    Location <span className="text-red-500">*</span>
                  </label>

                  <div className="relative flex items-center">
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Enter your pin code or area"
                      required
                      className="
                        w-full
                        border
                        border-gray-400
                        bg-[#F7f7f7]
                        placeholder:text-[#9CA3AF]
                        rounded-md
                        pl-3
                        pr-10
                        h-10
                        text-xs
                        sm:text-sm
                        outline-none
                        focus:border-[#004a99]
                      "
                    />

                    <div className="absolute right-3 flex items-center pointer-events-none">
                      <Image
                        src="/shoot.png"
                        alt="Location"
                        width={18}
                        height={18}
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="
                    w-full
                    bg-[#004a99]
                    text-white
                    py-2.5
                    rounded-md
                    text-sm
                    sm:text-base
                    font-medium
                    hover:bg-[#003b7a]
                    transition
                    mt-2
                  "
                >
                  Request a Callback
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================== */}
      {/* REQUEST CONFIRMED POPUP */}
      {/* ===================================================== */}

      {showConfirmation && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            px-4
            py-6
            bg-black/30
            overflow-y-auto
          "
        >
          <div
            className="

    relative

    bg-white

    w-full

    max-w-[850px]

    max-h-[90vh]

    overflow-y-auto

    rounded-[24px]

    border-2

    border-[#d8e5f5]

    shadow-[0_15px_40px_rgba(0,0,0,0.20)]

    px-5

    py-5

    sm:px-7

    sm:py-6

    md:px-8

    md:py-6

  "
          >
            {/* ================================================= */}
            {/* GREEN CHECK */}
            {/* ================================================= */}

            <div className="flex justify-center mb-4">
              <div
                className="
                  w-[65px]
h-[65px]
sm:w-[75px]
sm:h-[75px]
                  rounded-full
                  bg-[#20c94f]
                  border-[7px]
                  border-[#e3f7e7]
                  shadow-[0_0_0_4px_#d7f3dc]
                  flex
                  items-center
                  justify-center
                "
              >
                <span className="text-white text-[52px] sm:text-[65px] font-bold leading-none">
                  ✓
                </span>
              </div>
            </div>

            {/* ================================================= */}
            {/* HEADING */}
            {/* ================================================= */}

            <h1
              className="
                text-center
                text-[40px]
                sm:text-[46px]
                md:text-[52px]
                font-bold
                text-[#123b7a]
                leading-tight
              "
            >
              REQUEST CONFIRMED
            </h1>

            {/* BLUE LINE */}

            <div className="flex justify-center  mb-2">
              <div className="w-[135px] h-[4px] bg-[#0876dc] rounded-full" />
            </div>

            {/* ================================================= */}
            {/* MESSAGE */}
            {/* ================================================= */}

            <div
              className="
                text-center
                text-[#17264a]
                text-[25px]
                sm:text-[32px]
                md:text-[38px]
                leading-7
                sm:leading-8
                mb-4
              "
            >
              <p>
                Your request with Phoenix Motors has been successfully received.
              </p>

              <p>Our team will connect with you shortly to assist you.</p>

              <p>We look forward to welcoming you to Phoenix Motors.</p>
            </div>

            {/* ================================================= */}
            {/* USER DETAILS */}
            {/* ================================================= */}

            <div className="space-y-3">
              {/* NAME */}

              <ConfirmationRow
                icon="/msg.png"
                label="NAME"
                value={formData.name}
              />

              {/* PHONE */}

              <ConfirmationRow
                icon="/popupone.png"
                label="PHONE NUMBER"
                value={formData.phone}
              />

              {/* EMAIL */}

              <ConfirmationRow
                icon="/task.png"
                label="EMAIL ID"
                value={formData.email}
              />

              {/* LOCATION */}

              <ConfirmationRow
                icon="/shoot.png"
                label="LOCATION"
                value={formData.location}
              />

              {/* ================================================= */}
              {/* REFERENCE ID */}
              {/* ================================================= */}

              <div
                className="
                  relative
                  flex
                  items-center
                  min-h-[58px]
                  sm:min-h-[64px]
                  border-2
                  border-[#0876dc]
                  rounded-2xl
                  px-4
                  sm:px-7
                  bg-white
                "
              >
                {/* ICON */}

                <div
                  className="
                    w-9
                    h-9
                    sm:w-11
                    sm:h-11
                    rounded-full
                    bg-[#0868c9]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <span className="text-white text-xl sm:text-2xl font-bold">
                    #
                  </span>
                </div>

                {/* LABEL */}

                <div
                  className="
                    ml-4
                    sm:ml-6
                    text-[#123b7a]
                    text-sm
                    sm:text-lg
                    md:text-xl
                    font-normal
                    w-[35%]
                  "
                >
                  REFERENCE ID
                </div>

                {/* DIVIDER */}

                <div className="h-9 sm:h-10 w-px bg-[#cbd5e1] mx-3 sm:mx-5" />

                {/* REFERENCE */}

                <div
                  className="
                    flex-1
                    text-right
                    text-[#123b7a]
                    text-lg
                    sm:text-2xl
                    md:text-4xl
                    font-bold
                    break-all
                  "
                >
                  {referenceId}
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* DONE BUTTON */}
            {/* ================================================= */}

            <button
              type="button"
              onClick={handleCloseConfirmation}
              className="
                block
                mx-auto
                mt-4
bg-[#004a99]
hover:bg-[#003b7a]
text-white
px-8
py-2
                rounded-lg
                text-sm
                sm:text-base
                font-medium
                transition
              "
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ============================================================= */
/* CONFIRMATION ROW */
/* ============================================================= */

function ConfirmationRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        min-h-[60px]
sm:min-h-[66px]
        border
        border-[#dce6f2]
        rounded-2xl
        px-4
        sm:px-7
        bg-white
      "
    >
      {/* ICON */}

      <div
        className="
          w-9
          h-9
          sm:w-9
          sm:h-9
          rounded-full
          bg-[#0868c9]
          flex
          items-center
          justify-center
          shrink-0
          p-2
        "
      >
        <Image
          src={icon}
          alt={label}
          width={32}
          height={32}
          className="w-full h-full object-contain"
        />
      </div>

      {/* LABEL */}

      <div
        className="
          ml-4
          sm:ml-6
          text-[#123b7a]
          text-sm
          sm:text-lg
          md:text-xl
          font-normal
          w-[35%]
        "
      >
        {label}
      </div>

      {/* DIVIDER */}

      <div className="h-9 sm:h-10 w-px bg-[#cbd5e1] mx-3 sm:mx-5" />

      {/* VALUE */}

      <div
        className="
          flex-1
          text-right
          text-[#111827]
          text-sm
          sm:text-lg
          md:text-xl
          font-semibold
          break-words
        "
      >
        {value}
      </div>
    </div>
  );
}
