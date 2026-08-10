"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "./../../app/layout/header";

export default function Hero() {
  const router = useRouter();

  const [showForm, setShowForm] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  const [referenceId, setReferenceId] = useState("");

  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =====================================================
  // REQUEST CALLBACK
  // =====================================================

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const randomNumber = Math.floor(10000 + Math.random() * 90000);

    setReferenceId(`PM-2026-${randomNumber}`);

    setShowForm(false);
    setShowConfirmation(true);
  };

  // =====================================================
  // DONE BUTTON
  // Redirect to Hero page
  // =====================================================

  const handleDone = () => {
    router.push("/");
  };

  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/Hero.png')",
      }}
    >
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="relative z-20">
        <Header />
      </div>

      {/* ================================================= */}
      {/* HERO TEXT */}
      {/* ================================================= */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          px-5
          pointer-events-none
        "
      >
        <h1
          className="
            text-white
            text-center
            text-xl
            sm:text-2xl
            md:text-4xl
            lg:text-5xl
          "
        >
          Your Next Adventure Starts in Style.
        </h1>
      </div>

      {/* ================================================= */}
      {/* REQUEST CALLBACK FORM */}
      {/* ================================================= */}

      {showForm && !showConfirmation && (
        <div
          className="
            fixed
            inset-0
            z-[999]

            flex
            items-center
            justify-center

            px-3
            sm:px-5

            bg-black/10
          "
        >
          <div
            className="
              w-full
              max-w-[680px]

              max-h-[92vh]

              bg-white

              rounded-xl
              sm:rounded-2xl

              overflow-hidden

              shadow-2xl

              flex
              flex-col
              sm:flex-row
            "
          >
            {/* ================================================= */}
            {/* LEFT SIDE */}
            {/* ================================================= */}

            <div
              className="
                hidden
                sm:flex

                w-[34%]

                bg-[#eef5fb]

                p-4
                md:p-5

                flex-col
              "
            >
              {/* CONTACT ICON */}

              <div
                className="
                  w-10
                  h-10
                  md:w-11
                  md:h-11

                  rounded-full
                  bg-blue-100

                  flex
                  items-center
                  justify-center

                  p-2
                  mb-3
                "
              >
                <Image
                  src="/msg.png"
                  alt="Contact"
                  width={30}
                  height={30}
                  className="w-full h-full object-contain"
                />
              </div>

              <h2 className="text-base md:text-lg text-gray-800 mb-1">
                Let's Connect!!
              </h2>

              <p
                className="
                  text-[10px]
                  md:text-[11px]
                  text-[#343434]
                  leading-4
                  mb-4
                "
              >
                Share your details and our team will get in touch with you
                shortly.
              </p>

              {/* FEATURES */}

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Image
                    src="/m.png"
                    alt="Quick response"
                    width={20}
                    height={20}
                    className="w-4 h-4 object-contain shrink-0"
                  />

                  <span className="text-[9px] md:text-[11px] text-[#606060]">
                    Quick response from our team
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/task.png"
                    alt="Secure"
                    width={20}
                    height={20}
                    className="w-4 h-4 object-contain shrink-0"
                  />

                  <span className="text-[9px] md:text-[11px] text-[#606060]">
                    100% secure & spam free
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/handshake.png"
                    alt="Personalised"
                    width={20}
                    height={20}
                    className="w-4 h-4 object-contain shrink-0"
                  />

                  <span className="text-[9px] md:text-[11px] text-[#606060]">
                    Personalised assistance just for you
                  </span>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT FORM */}
            {/* ================================================= */}

            <div
              className="
                relative

                w-full
                sm:w-[66%]

                p-4
                sm:p-4
                md:p-5
              "
            >
              {/* CLOSE */}

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="
                  absolute
                  top-2.5
                  right-2.5

                  w-7
                  h-7

                  flex
                  items-center
                  justify-center

                  rounded-full

                  hover:bg-gray-100
                "
              >
                <Image
                  src="/cross.png"
                  alt="Close"
                  width={18}
                  height={18}
                  className="w-4 h-4 object-contain"
                />
              </button>

              <h2
                className="
                  text-base
                  sm:text-lg
                  text-gray-800
                  mb-3
                  pr-8
                "
              >
                Find Your Perfect Ride
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-2.5"
              >
                {/* NAME */}

                <div>
                  <label
                    className="
                      block
                      text-[11px]
                      sm:text-xs
                      text-black
                      mb-1
                    "
                  >
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
                      h-9

                      border
                      border-gray-400

                      bg-[#F7F7F7]

                      rounded-md

                      px-3

                      text-xs

                      outline-none

                      focus:border-[#004a99]
                    "
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label
                    className="
                      block
                      text-[11px]
                      sm:text-xs
                      text-black
                      mb-1
                    "
                  >
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
                      h-9

                      border
                      border-gray-400

                      bg-[#F7F7F7]

                      rounded-md

                      px-3

                      text-xs

                      outline-none

                      focus:border-[#004a99]
                    "
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    className="
                      block
                      text-[11px]
                      sm:text-xs
                      text-black
                      mb-1
                    "
                  >
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
                      h-9

                      border
                      border-gray-400

                      bg-[#F7F7F7]

                      rounded-md

                      px-3

                      text-xs

                      outline-none

                      focus:border-[#004a99]
                    "
                  />
                </div>

                {/* LOCATION */}

                <div>
                  <label
                    className="
                      block
                      text-[11px]
                      sm:text-xs
                      text-black
                      mb-1
                    "
                  >
                    Location <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Enter your pin code or area"
                      required
                      className="
                        w-full
                        h-9

                        border
                        border-gray-400

                        bg-[#F7F7F7]

                        rounded-md

                        pl-3
                        pr-9

                        text-xs

                        outline-none

                        focus:border-[#004a99]
                      "
                    />

                    <Image
                      src="/shoot.png"
                      alt="Location"
                      width={16}
                      height={16}
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2

                        w-4
                        h-4
                      "
                    />
                  </div>
                </div>

                {/* REQUEST BUTTON */}

                <button
                  type="submit"
                  className="
                    w-full
                    h-9

                    bg-[#004a99]
                    hover:bg-[#003b7a]

                    text-white

                    rounded-md

                    text-xs
                    sm:text-sm

                    font-medium

                    transition
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

            px-3
            sm:px-5

            bg-black/25
          "
        >
          {/* ================================================= */}
          {/* CONFIRMATION CARD */}
          {/* ================================================= */}

          <div
            className="
              relative

              w-full

              max-w-[760px]

              bg-white

              rounded-[18px]
              sm:rounded-[22px]

              border
              border-[#d5e3f4]

              shadow-[0_15px_40px_rgba(0,0,0,0.22)]

              px-4
              sm:px-6
              md:px-8

              py-5
              sm:py-6
            "
          >
            {/* ================================================= */}
            {/* GREEN CHECK */}
            {/* ================================================= */}

            <div className="flex justify-center">
              <div
                className="
                  w-12
                  h-12

                  sm:w-14
                  sm:h-14

                  rounded-full

                  bg-[#20c94f]

                  border-4
                  border-[#dcf7e3]

                  flex
                  items-center
                  justify-center
                "
              >
                <span
                  className="
                    text-white
                    text-[28px]
                    sm:text-[34px]
                    font-bold
                    leading-none
                  "
                >
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

                text-[23px]
                sm:text-[28px]
                md:text-[32px]

                font-bold

                text-[#123b7a]

                leading-tight

                mt-2
              "
            >
              REQUEST CONFIRMED
            </h1>

            {/* BLUE LINE */}

            <div className="flex justify-center mt-2 mb-3">
              <div
                className="
                  w-16
                  sm:w-20

                  h-[2px]

                  bg-[#0876dc]

                  rounded-full
                "
              />
            </div>

            {/* ================================================= */}
            {/* MESSAGE */}
            {/* ================================================= */}

            <div
              className="
                text-center

                text-[#17264a]

                text-[10px]
                sm:text-[11px]
                md:text-[13px]

                leading-4
                sm:leading-5

                mb-4
              "
            >
              <p>
                Your request with Phoenix Motors has been successfully
                received.
              </p>

              <p>
                Our team will connect with you shortly to assist you.
              </p>

              <p>
                We look forward to welcoming you to Phoenix Motors.
              </p>
            </div>

            {/* ================================================= */}
            {/* DETAILS - NO ICONS */}
            {/* ================================================= */}

            <div className="space-y-2">
              <ConfirmationRow
                label="NAME"
                value={formData.name}
              />

              <ConfirmationRow
                label="PHONE NUMBER"
                value={formData.phone}
              />

              <ConfirmationRow
                label="EMAIL ID"
                value={formData.email}
              />

              <ConfirmationRow
                label="LOCATION"
                value={formData.location}
              />

              {/* REFERENCE ID */}

              <div
                className="
                  flex
                  items-center

                  min-h-[48px]
                  sm:min-h-[52px]

                  border-2
                  border-[#0876dc]

                  rounded-xl

                  px-3
                  sm:px-4
                  md:px-5

                  py-2
                "
              >
                {/* LABEL */}

                <div
                  className="
                    w-[36%]

                    text-[#123b7a]

                    text-[10px]
                    sm:text-xs
                    md:text-sm

                    font-medium

                    leading-tight
                  "
                >
                  REFERENCE ID
                </div>

                {/* DIVIDER */}

                <div
                  className="
                    h-7
                    sm:h-8

                    w-px

                    bg-[#cbd5e1]

                    mx-3
                    sm:mx-4

                    shrink-0
                  "
                />

                {/* REFERENCE VALUE */}

                <div
                  className="
                    flex-1

                    text-right

                    text-[#123b7a]

                    text-sm
                    sm:text-base
                    md:text-xl

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

            <div className="flex justify-center mt-5">
              <button
                type="button"
                onClick={handleDone}
                className="
                  w-[120px]
                  sm:w-[140px]

                  h-10
                  sm:h-11

                  bg-[#004a99]
                  hover:bg-[#003b7a]

                  text-white

                  rounded-md

                  text-sm
                  sm:text-base

                  font-semibold

                  transition

                  shadow-sm
                "
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ============================================================= */
/* CONFIRMATION ROW - NO ICON */
/* ============================================================= */

function ConfirmationRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        flex
        items-center

        min-h-[45px]
        sm:min-h-[48px]

        border
        border-[#dce6f2]

        rounded-xl

        px-3
        sm:px-4
        md:px-5

        py-2
      "
    >
      {/* LABEL */}

      <div
        className="
          w-[36%]

          text-[#123b7a]

          text-[10px]
          sm:text-xs
          md:text-sm

          font-medium

          leading-tight
        "
      >
        {label}
      </div>

      {/* DIVIDER */}

      <div
        className="
          h-6
          sm:h-7

          w-px

          bg-[#cbd5e1]

          mx-3
          sm:mx-4

          shrink-0
        "
      />

      {/* VALUE */}

      <div
        className="
          flex-1

          text-right

          text-[#111827]

          text-[10px]
          sm:text-xs
          md:text-sm

          font-semibold

          break-words

          leading-tight
        "
      >
        {value}
      </div>
    </div>
  );
}