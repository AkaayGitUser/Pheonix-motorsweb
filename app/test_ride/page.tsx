"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

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
    <div className="relative w-full">
      <label
        className="
          mb-[2px]
          block
          text-[9px]
          font-medium
          text-gray-800

          min-[390px]:text-[10px]

          sm:mb-1
          sm:text-[11px]
        "
      >
        {label}
        <span className="ml-[2px] text-red-500">*</span>
      </label>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          h-[32px]
          w-full
          items-center
          justify-between

          rounded-[4px]

          border
          border-[#D7DCE2]

          bg-[#F6F7F8]

          px-2.5

          text-left
          text-[9px]
          font-medium
          text-gray-800

          outline-none
          transition

          hover:border-[#B9C1CC]

          focus:border-[#0052A5]
          focus:bg-white

          min-[390px]:h-[34px]
          min-[390px]:text-[10px]

          sm:h-[38px]
          sm:px-3
          sm:text-[11px]

          lg:h-[40px]
        "
      >
        <span
          className={
            selectedLabel
              ? "truncate text-gray-800"
              : "truncate text-[#7C8798]"
          }
        >
          {selectedLabel || placeholder}
        </span>

        <ChevronDown
          size={15}
          className={`
            ml-2
            shrink-0
            text-[#6B7280]
            transition-transform
            duration-200

            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {open && (
        <div
          className={`
            absolute
            left-0
            right-0
            z-[200]

            max-h-[125px]
            overflow-y-auto

            rounded-[4px]

            border
            border-[#D7DCE2]

            bg-white

            shadow-[0_8px_20px_rgba(0,0,0,0.14)]

            ${
              direction === "up"
                ? "bottom-[calc(100%+4px)]"
                : "top-[calc(100%+4px)]"
            }
          `}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                setSelected(option.value);
                setOpen(false);
              }}
              className="
                block
                w-full

                border-b
                border-[#EEF1F4]

                px-2.5
                py-[7px]

                text-left
                text-[9px]
                font-medium
                text-gray-800

                transition

                last:border-b-0

                hover:bg-[#F5F7FA]

                sm:px-3
                sm:text-[10px]
              "
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TestRidePage() {
  const router=useRouter();
  const vehicleOptions: DropdownOption[] = [
    {
      value: "splendor-plus",
      label: "Splendor Plus",
    },
    {
      value: "xtreme-160r",
      label: "Xtreme 160R",
    },
    {
      value: "karizma-xmr",
      label: "Karizma XMR",
    },
    {
      value: "destini-110",
      label: "Destini 110",
    },
  ];

  const showroomOptions: DropdownOption[] = [
    {
      value: "madhapur",
      label: "Phoenix Motors - Madhapur",
    },
    {
      value: "kukatpally",
      label: "Phoenix Motors - Kukatpally",
    },
    {
      value: "gachibowli",
      label: "Phoenix Motors - Gachibowli",
    },
    {
      value: "banjara-hills",
      label: "Phoenix Motors - Banjara Hills",
    },
  ];

  return (
    <main
      className="
        relative
        h-[100dvh]
        w-full

        overflow-hidden

        bg-[#111]

        text-black
      "
      style={{
        fontFamily:
          '"Land Rover Web Bold", Arial, Helvetica, sans-serif',
      }}
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          z-0
          overflow-hidden
          bg-black
        "
      >
        <Image
          src="/images/momentsinmotion/test.png"
          alt="Phoenix Motors test ride"
          fill
          priority
          sizes="100vw"
          className="
            object-cover

            object-[45%_center]

            sm:object-top

            md:object-top
          "
        />

        {/* DARK OVERLAY */}

        <div
          className="
            absolute
            inset-0

            bg-black/30

            md:bg-gradient-to-r
            md:from-black/40
            md:via-black/15
            md:to-black/10
          "
        />
      </div>

      {/* =====================================================
          LOGO
      ===================================================== */}

      <div
        className="
          absolute
          left-3
          top-3
          z-30

          sm:left-5
          sm:top-4

          md:left-7
          md:top-6

          lg:left-10
          lg:top-8
        "
      >
        <Image
          src="/images/momentsinmotion/logo.png"
          alt="Phoenix Motors"
          width={100}
          height={40}
          priority
          className="
            h-auto
            w-[58px]
            object-contain

            min-[390px]:w-[64px]

            sm:w-[76px]

            md:w-[88px]

            lg:w-[100px]
          "
        />
      </div>

      {/* =====================================================
          WHOLE SCREEN LAYOUT
      ===================================================== */}

      <div
        className="
          relative
          z-10

          grid

          h-full
          w-full

          grid-cols-1
          grid-rows-[34%_66%]

          overflow-hidden

          md:grid-cols-[48%_52%]
          md:grid-rows-1
        "
      >
        {/* =================================================
            LEFT TEXT SECTION
        ================================================= */}

        <section
          className="
            flex
            h-full
            min-h-0
            w-full

            flex-col
            justify-end

            overflow-hidden

            px-4
            pb-3
            pt-14

            text-white

            min-[390px]:px-5
            min-[390px]:pb-4

            sm:px-7
            sm:pb-5
            sm:pt-20

            md:px-8
            md:pb-8
            md:pt-24

            lg:px-10
            lg:pb-10

            xl:px-12
            xl:pb-12
          "
        >
          <div className="max-w-[380px]">
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white/90

                min-[390px]:text-[9px]

                sm:text-[10px]

                lg:text-[11px]
              "
            >
              Phoenix Motors
            </p>

            <h1
              className="
                mt-1

                max-w-[320px]

                text-[19px]
                font-medium
                leading-[1.05]

                min-[390px]:text-[21px]

                sm:mt-2
                sm:text-[25px]

                md:text-[28px]

                lg:text-[28px]
              "
            >
              Find Your Perfect Ride
            </h1>

            <p
              className="
                mt-1.5

                max-w-[350px]

                text-[8px]
                font-normal
                leading-[1.4]
                text-white/90

                min-[390px]:text-[9px]

                sm:mt-2
                sm:text-[10px]

                md:text-[11px]

                lg:text-[12px]
              "
            >
              Book your test ride and experience your preferred
              motorcycle before you decide.
            </p>
          </div>
        </section>

        {/* =================================================
            RIGHT FORM SECTION
        ================================================= */}

        <section
          className="
            flex
            h-full
            min-h-0
            w-full
            min-w-0

            items-center
            justify-center

            overflow-visible

            px-2
            pb-2

            min-[390px]:px-3

            sm:px-4
            sm:pb-3

            md:justify-end
            md:p-4

            lg:p-6

            xl:px-8
          "
        >
          {/* FORM CARD */}

          <div
  className="
    relative
    mx-auto
    flex
    max-h-full
    w-full
    max-w-[420px]
    flex-col
    justify-center
    overflow-visible
    rounded-[10px]
    bg-white
    px-3
    py-2.5
    shadow-[0_14px_45px_rgba(0,0,0,0.25)]

    min-[390px]:px-4
    min-[390px]:py-3

    sm:rounded-[14px]
    sm:px-5
    sm:py-4

    md:mx-0
    md:px-5
    md:py-4

    lg:max-w-[430px]
    lg:px-6
    lg:py-5
  "
>
  {/* =====================================================
      BACK BUTTON
  ===================================================== */}

  <button
    type="button"
    onClick={() => router.back()}
    className="
      mb-1.5
      flex
      w-fit
      items-center
      gap-1
      text-[9px]
      font-medium
      text-gray-600
      transition-colors
      duration-200

      hover:text-[#0052A5]

      min-[390px]:text-[10px]

      sm:mb-2
      sm:text-[11px]
    "
  >
    {/* BACK ARROW */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>

    <span>Back</span>
  </button>

  {/* =====================================================
      MAIN TITLE
  ===================================================== */}

  <h2
    className="
      mb-[2px]
      text-center
      text-[15px]
      font-bold
      leading-tight
      text-gray-900

      min-[390px]:text-[16px]

      sm:mb-1
      sm:text-[18px]

      md:text-[19px]

      lg:text-[20px]
    "
  >
    Start Your Journey
  </h2>

  {/* =====================================================
      SUB TITLE
  ===================================================== */}

  <h3
    className="
      mb-1.5
      text-left
      text-[11px]
      font-bold
      leading-tight
      text-gray-700

      min-[390px]:text-[12px]

      sm:mb-2
      sm:text-[13px]

      lg:text-[14px]
    "
  >
    Find Your Perfect Ride
  </h3>

  {/* =====================================================
      FORM
  ===================================================== */}

  <form
    onSubmit={(e) => e.preventDefault()}
    className="
      w-full
      space-y-[5px]

      min-[390px]:space-y-[6px]

      sm:space-y-[7px]

      lg:space-y-2
    "
  >
    {/* NAME */}

    <div>
      <label
        className="
          mb-[2px]
          block
          text-[9px]
          font-medium
          text-gray-800

          min-[390px]:text-[10px]

          sm:text-[11px]
        "
      >
        Name <span className="text-red-500">*</span>
      </label>

      <input
        type="text"
        placeholder="Enter your name"
        className="
          h-[30px]
          w-full
          rounded-[4px]
          border
          border-[#D7DCE2]
          bg-[#F6F7F8]
          px-2.5
          text-[9px]
          font-medium
          text-gray-800
          outline-none
          placeholder:text-[#98A2B3]
          transition
          focus:border-[#0052A5]
          focus:bg-white

          min-[390px]:h-[32px]
          min-[390px]:text-[10px]

          sm:h-[36px]
          sm:text-[11px]

          lg:h-[38px]
        "
      />
    </div>

    {/* PHONE */}

    <div>
      <label
        className="
          mb-[2px]
          block
          text-[9px]
          font-medium
          text-gray-800

          min-[390px]:text-[10px]

          sm:text-[11px]
        "
      >
        Phone Number
        <span className="ml-[2px] text-red-500">*</span>
      </label>

      <input
        type="tel"
        inputMode="numeric"
        maxLength={10}
        placeholder="Enter your number"
        className="
          h-[30px]
          w-full
          rounded-[4px]
          border
          border-[#D7DCE2]
          bg-[#F6F7F8]
          px-2.5
          text-[9px]
          font-medium
          text-gray-800
          outline-none
          placeholder:text-[#98A2B3]
          transition
          focus:border-[#0052A5]
          focus:bg-white

          min-[390px]:h-[32px]
          min-[390px]:text-[10px]

          sm:h-[36px]
          sm:text-[11px]

          lg:h-[38px]
        "
      />
    </div>

    {/* EMAIL */}

    <div>
      <label
        className="
          mb-[2px]
          block
          text-[9px]
          font-medium
          text-gray-800

          min-[390px]:text-[10px]

          sm:text-[11px]
        "
      >
        Email ID
        <span className="ml-[2px] text-red-500">*</span>
      </label>

      <input
        type="email"
        placeholder="Enter your email"
        className="
          h-[30px]
          w-full
          rounded-[4px]
          border
          border-[#D7DCE2]
          bg-[#F6F7F8]
          px-2.5
          text-[9px]
          font-medium
          text-gray-800
          outline-none
          placeholder:text-[#98A2B3]
          transition
          focus:border-[#0052A5]
          focus:bg-white

          min-[390px]:h-[32px]
          min-[390px]:text-[10px]

          sm:h-[36px]
          sm:text-[11px]

          lg:h-[38px]
        "
      />
    </div>

    {/* VEHICLE MODEL */}

    <CompactDropdown
      label="Vehicle Model"
      placeholder="Select vehicle model"
      options={vehicleOptions}
      direction="down"
    />

    {/* SHOWROOM */}

    <CompactDropdown
      label="Showroom"
      placeholder="Select showroom"
      options={showroomOptions}
      direction="up"
    />

    {/* SUBMIT */}

    <button
      type="submit"
      className="
        mt-1
        h-[30px]
        w-full
        rounded-[4px]
        bg-[#0052A5]
        text-[9px]
        font-semibold
        text-white
        transition-all
        duration-300

        hover:bg-[#003D7C]

        min-[390px]:h-[32px]
        min-[390px]:text-[10px]

        sm:h-[36px]
        sm:text-[11px]

        lg:h-[38px]
      "
    >
      Submit
    </button>
  </form>
</div>
        </section>
      </div>
    </main>
  );
}