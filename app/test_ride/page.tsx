"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type DropdownOption = {
  value: string;
  label: string;
};

function CompactDropdown({
  label,
  placeholder,
  options,
}: {
  label: string;
  placeholder: string;
  options: DropdownOption[];
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const selectedLabel =
    options.find((option) => option.value === selected)?.label ?? "";

  return (
    <div className="relative w-full">
      <label className="mb-1 block text-[11px] font-medium text-gray-800 sm:text-[12px]">
        {label} <span className="text-red-500">*</span>
      </label>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          h-10
          w-full
          items-center
          justify-between
          rounded-[5px]
          border
          border-[#D7DCE2]
          bg-[#F6F7F8]
          px-3
          text-left
          text-[11px]
          font-medium
          text-gray-800
          outline-none
          transition
          hover:border-[#B9C1CC]
          focus:border-[#0052A5]
          focus:bg-white
          sm:h-11
          sm:text-[12px]
        "
      >
        <span className={selectedLabel ? "text-gray-800" : "text-[#7C8798]"}>
          {selectedLabel || placeholder}
        </span>

        <ChevronDown
          size={16}
          className={`shrink-0 text-[#6B7280] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="
            absolute
            left-0
            right-0
            top-[calc(100%+6px)]
            z-[100]
            max-h-[180px]
            overflow-y-auto
            rounded-[6px]
            border
            border-[#D7DCE2]
            bg-white
            shadow-[0_10px_25px_rgba(0,0,0,0.14)]
          "
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
                px-3
                py-2.5
                text-left
                text-[11px]
                font-medium
                text-gray-800
                transition
                last:border-b-0
                hover:bg-[#F5F7FA]
                sm:text-[12px]
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
  const vehicleOptions: DropdownOption[] = [
    { value: "splendor-plus", label: "Splendor Plus" },
    { value: "xtreme-160r", label: "Xtreme 160R" },
    { value: "karizma-xmr", label: "Karizma XMR" },
    { value: "destini-110", label: "Destini 110" },
  ];

  const showroomOptions: DropdownOption[] = [
    { value: "madhapur", label: "Phoenix Motors - Madhapur" },
    { value: "kukatpally", label: "Phoenix Motors - Kukatpally" },
    { value: "gachibowli", label: "Phoenix Motors - Gachibowli" },
    { value: "banjara-hills", label: "Phoenix Motors - Banjara Hills" },
  ];

  return (
    <main
      className="
        relative
        min-h-[100dvh]
        w-full
        overflow-x-hidden
        bg-[#111]
        text-black
      "
      style={{
        fontFamily:
          '"Land Rover Web Bold", Arial, Helvetica, sans-serif',
      }}
    >
      {/* FULL PAGE BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/momentsinmotion/test.png"
          alt="Book a test ride background"
          fill
          priority
          sizes="100vw"
          className="
            object-top
            object-cover
            object-[42%_center]
            sm:object-[44%_center]
            md:object-cover
            md:object-top
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/30
            md:bg-gradient-to-r
            md:from-black/45
            md:via-black/15
            md:to-black/10
          "
        />
      </div>

      {/* LOGO */}
      <div
        className="
          absolute
          left-4
          top-4
          z-30
          sm:left-6
          sm:top-5
          md:left-8
          md:top-7
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
            w-[72px]
            object-contain
            sm:w-[82px]
            md:w-[92px]
            lg:w-[100px]
          "
        />
      </div>

      {/* PAGE CONTENT */}
      <div
        className="
          relative
          z-10
          grid
          min-h-[100dvh]
          w-full
          grid-cols-1
          overflow-x-hidden
          md:grid-cols-[minmax(0,48%)_minmax(0,52%)]
        "
      >
        {/* LEFT CONTENT */}
        <section
          className="
            flex
            min-h-[260px]
            w-full
            flex-col
            justify-end
            px-5
            pb-6
            pt-24
            text-white
            sm:min-h-[300px]
            sm:px-7
            sm:pb-8
            sm:pt-28
            md:min-h-[100dvh]
            md:px-8
            md:pb-10
            md:pt-28
            lg:px-10
            lg:pb-12
          "
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/85 sm:text-[11px]">
            Phoenix Motors
          </p>

          <h1
            className="
              mt-2
              max-w-[320px]
              text-[22px]
              font-medium
              leading-[1.12]
              sm:text-[26px]
              md:text-[30px]
              lg:text-[28px]
            "
          >
            Find Your Perfect Ride
          </h1>

          <p
            className="
              mt-3
              max-w-[360px]
              text-[11px]
              font-normal
              leading-[1.5]
              text-white/90
              sm:text-[12px]
              md:text-[13px]
            "
          >
            Book your test ride and experience your preferred motorcycle
            before you decide.
          </p>
        </section>

        {/* RIGHT FORM */}
        <section
  className="
    flex
    h-full
    w-full
    min-w-0
    items-center
    justify-center
    p-2
    sm:p-4
    md:justify-end
    md:p-6
    lg:p-8
  "
>
  <div
    className="
      relative
      mx-auto
      flex
      w-full
      max-w-[420px]
      flex-col
      justify-center
      rounded-[14px]
      bg-white
      p-3.5
      shadow-[0_14px_45px_rgba(0,0,0,0.25)]
      sm:rounded-[16px]
      sm:p-5
      md:mx-0
      md:p-6
    "
  >
    <h2
      className="
        mb-0.5
        text-center
        text-base
        font-bold
        leading-tight
        text-gray-900
        sm:mb-1
        sm:text-lg
        md:text-xl
      "
    >
      Start Your Journey
    </h2>

    <h3
      className="
        mb-2
        text-left
        text-xs
        font-bold
        leading-tight
        text-gray-700
        sm:mb-3
        sm:text-sm
      "
    >
      Find Your Perfect Ride
    </h3>

    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full space-y-1.5 sm:space-y-2.5"
    >
      <div>
        <label className="mb-0.5 block text-[11px] font-medium text-gray-800 sm:text-xs">
          Name <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          className="
            h-8
            w-full
            rounded-[5px]
            border
            border-[#D7DCE2]
            bg-[#F6F7F8]
            px-2.5
            text-xs
            font-medium
            text-gray-800
            outline-none
            transition
            placeholder:text-[#98A2B3]
            focus:border-[#0052A5]
            focus:bg-white
            sm:h-9
          "
        />
      </div>

      <div>
        <label className="mb-0.5 block text-[11px] font-medium text-gray-800 sm:text-xs">
          Phone Number <span className="text-red-500">*</span>
        </label>

        <input
          type="tel"
          inputMode="numeric"
          maxLength={10}
          placeholder="Enter your number"
          className="
            h-8
            w-full
            rounded-[5px]
            border
            border-[#D7DCE2]
            bg-[#F6F7F8]
            px-2.5
            text-xs
            font-medium
            text-gray-800
            outline-none
            transition
            placeholder:text-[#98A2B3]
            focus:border-[#0052A5]
            focus:bg-white
            sm:h-9
          "
        />
      </div>

      <div>
        <label className="mb-0.5 block text-[11px] font-medium text-gray-800 sm:text-xs">
          Email ID <span className="text-red-500">*</span>
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="
            h-8
            w-full
            rounded-[5px]
            border
            border-[#D7DCE2]
            bg-[#F6F7F8]
            px-2.5
            text-xs
            font-medium
            text-gray-800
            outline-none
            transition
            placeholder:text-[#98A2B3]
            focus:border-[#0052A5]
            focus:bg-white
            sm:h-9
          "
        />
      </div>

      <CompactDropdown
        label="Vehicle Model"
        placeholder="Select vehicle model"
        options={vehicleOptions}
      />

      <CompactDropdown
        label="Showroom"
        placeholder="Select showroom"
        options={showroomOptions}
      />

      <button
        type="submit"
        className="
          mt-1.5
          h-8
          w-full
          rounded-[5px]
          bg-[#0052A5]
          text-xs
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-[#003D7C]
          hover:shadow-[0_5px_16px_rgba(0,82,165,0.25)]
          sm:mt-2
          sm:h-9
        "
      >
        Submit
      </button>
    </form>
  </div>
</section>
      </div>v
    </main>
  );
}