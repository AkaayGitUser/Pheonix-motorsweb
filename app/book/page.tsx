"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "./../../app/layout/header";
import Link from "next/link";

export default function Hero() {
  const [showForm, setShowForm] = useState(true);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/Hero.png')",
      }}
    >
      {/* Header */}
      <div className="absolute top-[-20] left-0 right-0 z-20">
        <Header />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="text-grey-50  md:text-4xl  text-center md:mt-[-220] font-Neurial Grotesk font-regular font-thin ">
          Your Next Adventure Starts in Style.
        </h1>
      </div>

      {/* <div className="flex justify-center  ">
        <button
          onClick={() => setShowForm(true)}
          className="  border border-white text-sm  mb-10 font-grotesk text-white w-55 h-10 "
        >
          Start Your Adventure
        </button>
      </div> */}

      {/* Popup Form Modal */}
      {showForm && (
        <div className="absolute inset-0 z-50 flex items-center justify-center sm:items-start sm:pt-20 pt-10 px-4">
          <div className="bg-white w-full max-w-73 sm:max-w-xl md:w-150 h-auto md:h-110 flex flex-col md:flex-row max-h-[90vh]">
            {/* Modal Content */}
            {/* Left Section (Hidden on small mobile) */}
            <div className="hidden sm:flex md:w-5/14 bg-[#eef5fb] p-2 md:py-6  md:px-5 flex-col justify-start">
              {/* Custom Image Icon */}
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 overflow-hidden p-2">
                <Image
                  src="/msg.png" // Replace with your image path inside the /public folder
                  alt="Contact Icon"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>

              <h2 className="text-xl  font-regular text-gray-800 mb-2 ">
                Let{"'"}s Connect!!
              </h2>

              <p className="text-xs sm:text-xs  mb-6 text-[#343434]">
                Share your details and our team will get in touch with<br/> you
                shortly.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[#606060]">
                <div className="flex items-center gap-3">
                  <Image
                    src="/m.png"
                    alt="Quick response"
                    width={22}
                    height={22}
                    className="w-5 h-5 object-contain shrink-0"
                  />
                  <span className="text-[11px] sm:text-xs">
                    Quick response from our team
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[#606060]">
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

                <div className="flex items-center gap-3 text-[#606060]">
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

            {/* Right Form Section */}
            <div className="w-full md:w-7/11 p-6 sm:p-4 overflow-y-auto relative">
              {/* Close Button positioned inside the form section */}
              <Link
                href="/Form" // Change to your main page or hero route path
                className="absolute top-3 right-3 z-30 w-8 h-8 flex items-center justify-center p-1.5 rounded-full  hover:bg-gray-100 transition duration-200 "
                aria-label="Close"
              >
                <Image
                  src="/cross.png"
                  alt="Close"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </Link>

              <h2 className="sm:text-lg font-md text-gray-800 mb-5 ">
                Find Your Perfect Ride
              </h2>

              <form className="space-y-3">{/* Form inputs go here */}</form>

              <form className="space-y-3">
                <div>
                  <label className="block text-xs sm:text-sm text-black mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className=" w-full border bg-[#F7f7f7]  placeholder:text-[#9CA3AF] rounded-md px-3 h-10 text-xs sm:text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-black mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your number"
                    className="w-full border bg-[#F7f7f7]  placeholder:text-[#9CA3AF]  rounded-md px-3 h-10 text-xs sm:text-sm outline-none "
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-black mb-1">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your mail"
                    className="w-full border bg-[#F7f7f7]  placeholder:text-[#9CA3AF] rounded-md px-3 h-10 text-xs sm:text-sm outline-none "
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-black mb-1">
                    Location <span className="text-red-500">*</span>
                  </label>

                  {/* Relative Container */}
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Enter your pin code or area"
                      className="w-full border bg-[#F7f7f7] placeholder:text-[#9CA3AF] rounded-md pl-3 pr-10 h-10 text-xs sm:text-sm outline-none"
                    />

                    {/* Right-aligned Location Image */}
                    <div className="absolute right-3 flex items-center pointer-events-none">
                      <Image
                        src="/shoot.png" // Replace with your image path in the /public folder
                        alt="Location"
                        width={18}
                        height={18}
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#004a99] text-white py-2.5 rounded-md text-sm sm:text-base font-medium hover:bg-[#003b7a] transition mt-2"
                >
                  Request a Callback
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
