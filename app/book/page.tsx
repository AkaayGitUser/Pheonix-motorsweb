"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BookPage() {
  const router = useRouter();

  // =========================================================
  // FORM STATE
  // =========================================================

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  // =========================================================
  // POPUP STATE
  // =========================================================

  const [showForm, setShowForm] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  // =========================================================
  // REFERENCE ID
  // =========================================================

  const [referenceId, setReferenceId] = useState("");

  // =========================================================
  // SUBMIT FORM
  // =========================================================

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !phone.trim() || !email.trim() || !location.trim()) {
      alert("Please fill all the required fields.");
      return;
    }

    // Generate reference ID
    const randomNumber = Math.floor(10000 + Math.random() * 90000);

    const generatedReferenceId = `PM-2026-${randomNumber}`;

    setReferenceId(generatedReferenceId);

    // Hide form
    setShowForm(false);

    // Show success popup
    setShowSuccess(true);
  };

  // =========================================================
  // CLOSE FORM
  // =========================================================

  const handleCloseForm = () => {
    setShowForm(false);

    // Go back to Hero/Home page
    router.push("/");
  };

  // =========================================================
  // DONE BUTTON
  // =========================================================

  const handleDone = () => {
    setShowSuccess(false);

    // Go back to Hero/Home page
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
      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-black/10" />

      {/* =====================================================
          REQUEST CALLBACK FORM
      ===================================================== */}

      {showForm && !showSuccess && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/20
            px-3
            py-4
            sm:px-5
          "
        >
          {/* =================================================
              FORM CONTAINER
          ================================================= */}

          <div
            className="
              relative
              flex
              w-full
              max-w-[760px]
              max-h-[94vh]
              overflow-hidden
              rounded-xl
              bg-white
              shadow-2xl

              flex-col

              sm:flex-row
            "
          >
            {/* =================================================
                LEFT SECTION
            ================================================= */}

            <div
              className="
                hidden
                w-full
                shrink-0
                bg-[#eef6fc]
                p-5

                sm:flex
                sm:w-[34%]
                sm:flex-col

                md:p-6
              "
            >
              {/* CONTACT ICON */}

              <div
                className="
                  mb-3
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#dceeff]
                  p-2
                "
              >
                <Image
                  src="/msg.png"
                  alt="Contact"
                  width={30}
                  height={30}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* TITLE */}

              <h2
                className="
                  mb-2
                  text-[18px]
                  font-normal
                  text-[#171717]
                  md:text-[20px]
                "
              >
                Let's Connect!!
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mb-5
                  text-[10px]
                  leading-[1.45]
                  text-[#343434]
                  md:text-[11px]
                "
              >
                Share your details and our team will get in touch with you
                shortly.
              </p>

              {/* =================================================
                  FEATURES
              ================================================= */}

              <div className="space-y-4">

                {/* QUICK RESPONSE */}

                <div className="flex items-center gap-2">
                  <div
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#b9d9f7]
                      bg-[#dbeeff]
                    "
                  >
                    <Image
                      src="/m.png"
                      alt="Quick response"
                      width={17}
                      height={17}
                      className="h-[17px] w-[17px] object-contain"
                    />
                  </div>

                  <span
                    className="
                      text-[9px]
                      leading-tight
                      text-[#606060]
                      md:text-[10px]
                    "
                  >
                    Quick response from our team
                  </span>
                </div>

                {/* SECURE */}

                <div className="flex items-center gap-2">
                  <div
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                    "
                  >
                    <Image
                      src="/task.png"
                      alt="Secure"
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px] object-contain"
                    />
                  </div>

                  <span
                    className="
                      text-[9px]
                      leading-tight
                      text-[#606060]
                      md:text-[10px]
                    "
                  >
                    100% secure & spam free
                  </span>
                </div>

                {/* PERSONALIZED ASSISTANCE */}

                <div className="flex items-start gap-2">
                  <div
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                    "
                  >
                    <Image
                      src="/handshake.png"
                      alt="Personalised assistance"
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px] object-contain"
                    />
                  </div>

                  <span
                    className="
                      text-[9px]
                      leading-tight
                      text-[#606060]
                      md:text-[10px]
                    "
                  >
                    Personalised assistance just for you
                  </span>
                </div>

              </div>
            </div>

            {/* =================================================
                RIGHT FORM SECTION
            ================================================= */}

            <div
              className="
                relative
                w-full
                overflow-y-auto
                p-5

                sm:w-[66%]
                sm:p-5

                md:p-6
              "
            >
              {/* =================================================
                  CLOSE BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={handleCloseForm}
                className="
                  absolute
                  right-3
                  top-3
                  z-20
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  transition
                  hover:bg-gray-100
                "
                aria-label="Close"
              >
                <Image
                  src="/cross.png"
                  alt="Close"
                  width={18}
                  height={18}
                  className="h-4 w-4 object-contain"
                />
              </button>

              {/* TITLE */}

              <h2
                className="
                  mb-5
                  pr-8
                  text-[18px]
                  font-normal
                  text-[#171717]

                  sm:text-[19px]

                  md:text-[20px]
                "
              >
                Find Your Perfect Ride
              </h2>

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                {/* NAME */}

                <div>
                  <label
                    className="
                      mb-1
                      block
                      text-[11px]
                      text-black
                      sm:text-[12px]
                    "
                  >
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="
                      h-10
                      w-full
                      rounded-md
                      border
                      border-[#9ca3af]
                      bg-[#f7f7f7]
                      px-3
                      text-[12px]
                      text-black
                      outline-none
                      placeholder:text-[#9ca3af]
                      focus:border-[#004a99]
                      focus:ring-1
                      focus:ring-[#004a99]

                      sm:text-[13px]
                    "
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label
                    className="
                      mb-1
                      block
                      text-[11px]
                      text-black
                      sm:text-[12px]
                    "
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your number"
                    className="
                      h-10
                      w-full
                      rounded-md
                      border
                      border-[#9ca3af]
                      bg-[#f7f7f7]
                      px-3
                      text-[12px]
                      text-black
                      outline-none
                      placeholder:text-[#9ca3af]
                      focus:border-[#004a99]
                      focus:ring-1
                      focus:ring-[#004a99]

                      sm:text-[13px]
                    "
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    className="
                      mb-1
                      block
                      text-[11px]
                      text-black
                      sm:text-[12px]
                    "
                  >
                    Email ID <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your mail"
                    className="
                      h-10
                      w-full
                      rounded-md
                      border
                      border-[#9ca3af]
                      bg-[#f7f7f7]
                      px-3
                      text-[12px]
                      text-black
                      outline-none
                      placeholder:text-[#9ca3af]
                      focus:border-[#004a99]
                      focus:ring-1
                      focus:ring-[#004a99]

                      sm:text-[13px]
                    "
                  />
                </div>

                {/* LOCATION */}

                <div>
                  <label
                    className="
                      mb-1
                      block
                      text-[11px]
                      text-black
                      sm:text-[12px]
                    "
                  >
                    Location <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter your pin code or area"
                      className="
                        h-10
                        w-full
                        rounded-md
                        border
                        border-[#9ca3af]
                        bg-[#f7f7f7]
                        pl-3
                        pr-10
                        text-[12px]
                        text-black
                        outline-none
                        placeholder:text-[#9ca3af]
                        focus:border-[#004a99]
                        focus:ring-1
                        focus:ring-[#004a99]

                        sm:text-[13px]
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                      "
                    >
                      <Image
                        src="/shoot.png"
                        alt="Location"
                        width={18}
                        height={18}
                        className="h-4 w-4 object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  className="
                    mt-2
                    h-10
                    w-full
                    rounded-md
                    bg-[#004a99]
                    px-4
                    text-[13px]
                    font-medium
                    text-white
                    transition
                    hover:bg-[#003b7a]
                    active:scale-[0.99]

                    sm:text-[14px]
                  "
                >
                  Request a Callback
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          SUCCESS / REQUEST CONFIRMED POPUP
      ===================================================== */}

      {showSuccess && (
        <div
          className="
            fixed
            inset-0
            z-[60]
            flex
            items-center
            justify-center
            bg-black/25
            px-3
            py-4
            sm:px-5
          "
        >
          {/* =================================================
              SUCCESS CONTAINER
          ================================================= */}

          <div
            className="
              relative
              w-full
              max-w-[760px]
              overflow-hidden
              rounded-[20px]
              border
              border-[#d5e3f4]
              bg-white
              px-4
              py-5
              shadow-2xl

              sm:px-7
              sm:py-6

              md:px-8
              md:py-6
            "
          >
            {/* =================================================
                SUCCESS ICON
            ================================================= */}

            <div
              className="
                mx-auto
                mb-2
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border-[4px]
                border-[#d9f7e7]
                bg-[#00c853]
                shadow-sm

                sm:h-14
                sm:w-14
              "
            >
              <span
                className="
                  text-[30px]
                  font-bold
                  leading-none
                  text-white

                  sm:text-[34px]
                "
              >
                ✓
              </span>
            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <h1
              className="
                text-center
                text-[24px]
                font-semibold
                leading-tight
                text-[#003b7a]

                sm:text-[28px]

                md:text-[32px]
              "
            >
              REQUEST CONFIRMED
            </h1>

            {/* BLUE LINE */}

            <div
              className="
                mx-auto
                my-2
                h-[3px]
                w-16
                rounded-full
                bg-[#0878dc]
              "
            />

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <div
              className="
                mx-auto
                mb-4
                max-w-[600px]
                text-center
                text-[10px]
                leading-[1.5]
                text-[#172b4d]

                sm:text-[11px]

                md:text-[12px]
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

            {/* =================================================
                DETAILS
            ================================================= */}

            <div className="space-y-2">

              {/* NAME */}

              <div
                className="
                  flex
                  min-h-[48px]
                  items-center
                  rounded-xl
                  border
                  border-[#d7e4f3]
                  bg-white
                  px-3

                  sm:min-h-[50px]
                  sm:px-4
                "
              >
                <div
                  className="
                    w-[35%]
                    shrink-0
                    border-r
                    border-[#d1d9e3]
                    pr-2
                    text-[10px]
                    font-medium
                    text-[#003b7a]

                    sm:text-[12px]
                  "
                >
                  NAME
                </div>

                <div
                  className="
                    w-[65%]
                    pl-3
                    text-right
                    text-[11px]
                    font-semibold
                    text-[#171717]
                    break-words

                    sm:text-[12px]
                  "
                >
                  {name}
                </div>
              </div>

              {/* PHONE */}

              <div
                className="
                  flex
                  min-h-[48px]
                  items-center
                  rounded-xl
                  border
                  border-[#d7e4f3]
                  bg-white
                  px-3

                  sm:min-h-[50px]
                  sm:px-4
                "
              >
                <div
                  className="
                    w-[35%]
                    shrink-0
                    border-r
                    border-[#d1d9e3]
                    pr-2
                    text-[10px]
                    font-medium
                    text-[#003b7a]

                    sm:text-[12px]
                  "
                >
                  PHONE NUMBER
                </div>

                <div
                  className="
                    w-[65%]
                    pl-3
                    text-right
                    text-[11px]
                    font-semibold
                    text-[#171717]
                    break-words

                    sm:text-[12px]
                  "
                >
                  {phone}
                </div>
              </div>

              {/* EMAIL */}

              <div
                className="
                  flex
                  min-h-[48px]
                  items-center
                  rounded-xl
                  border
                  border-[#d7e4f3]
                  bg-white
                  px-3

                  sm:min-h-[50px]
                  sm:px-4
                "
              >
                <div
                  className="
                    w-[35%]
                    shrink-0
                    border-r
                    border-[#d1d9e3]
                    pr-2
                    text-[10px]
                    font-medium
                    text-[#003b7a]

                    sm:text-[12px]
                  "
                >
                  EMAIL ID
                </div>

                <div
                  className="
                    w-[65%]
                    pl-3
                    text-right
                    text-[10px]
                    font-semibold
                    text-[#171717]
                    break-all

                    sm:text-[12px]
                  "
                >
                  {email}
                </div>
              </div>

              {/* LOCATION */}

              <div
                className="
                  flex
                  min-h-[48px]
                  items-center
                  rounded-xl
                  border
                  border-[#d7e4f3]
                  bg-white
                  px-3

                  sm:min-h-[50px]
                  sm:px-4
                "
              >
                <div
                  className="
                    w-[35%]
                    shrink-0
                    border-r
                    border-[#d1d9e3]
                    pr-2
                    text-[10px]
                    font-medium
                    text-[#003b7a]

                    sm:text-[12px]
                  "
                >
                  LOCATION
                </div>

                <div
                  className="
                    w-[65%]
                    pl-3
                    text-right
                    text-[11px]
                    font-semibold
                    text-[#171717]
                    break-words

                    sm:text-[12px]
                  "
                >
                  {location}
                </div>
              </div>

              {/* REFERENCE ID */}

              <div
                className="
                  flex
                  min-h-[50px]
                  items-center
                  rounded-xl
                  border-2
                  border-[#0878dc]
                  bg-white
                  px-3

                  sm:min-h-[54px]
                  sm:px-4
                "
              >
                <div
                  className="
                    w-[35%]
                    shrink-0
                    border-r
                    border-[#d1d9e3]
                    pr-2
                    text-[10px]
                    font-medium
                    text-[#003b7a]

                    sm:text-[12px]
                  "
                >
                  REFERENCE ID
                </div>

                <div
                  className="
                    w-[65%]
                    pl-3
                    text-right
                    text-[15px]
                    font-bold
                    text-[#003b7a]
                    break-words

                    sm:text-[17px]

                    md:text-[19px]
                  "
                >
                  {referenceId}
                </div>
              </div>

            </div>

            {/* =================================================
                DONE BUTTON
            ================================================= */}

            <div className="mt-3 flex justify-center">
              <button
                type="button"
                onClick={handleDone}
                className="
                  h-9
                  min-w-[110px]
                  rounded-md
                  bg-[#004a99]
                  px-8
                  text-[12px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#003b7a]
                  active:scale-95

                  sm:h-10
                  sm:min-w-[130px]
                  sm:text-[13px]
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