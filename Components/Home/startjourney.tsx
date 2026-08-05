"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function StartJourney() {
  const [activeTab, setActiveTab] = useState("Test Ride");

  const tabs = [
    "Test Ride",
    "New Vehicle Enquiry",
    "Service Appointment",
    "Finance Assistance",
  ];

  const images: Record<string, string> = {
    "Test Ride": "/testride.png",
    "New Vehicle Enquiry": "/enq.png",
    "Service Appointment": "/serviceapp.webp",
    "Finance Assistance": "/bike.png",
  };

  const imageOnRight =
    activeTab === "Test Ride" || activeTab === "Service Appointment";

  return (
    <section className="bg-[#F1F1F1] py-16">
      <div className="max-w-7xl mx-auto px-6 text-black">
        {/* Heading */}
        <h2 className="text-2xl font-grotesk text-center mb-8">
          Start Your Journey
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-12 sm:gap-20 mb-10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-md transition ${
                activeTab === tab
                  ? "border-b-2 border-blue-700 font-semibold"
                  : "border-b-2 border-transparent text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Static White Card Container */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm max-w-5xl mx-auto perspective-1000 min-h-[480px]">
          <AnimatePresence mode="wait">
            {/* Animated Inner Content */}
            <motion.div
              key={activeTab}
              initial={{ rotateY: -70, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 70, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="grid md:grid-cols-2 items-center p-6 md:p-8"
              style={{ transformStyle: "preserve-3d" }}
            >
              {imageOnRight ? (
                <>
                  {/* Left: Form */}
                  <div className="p-6">
                    <h3 className="text-2xl font-grotesk mb-6">
                      Find Your Perfect Ride
                    </h3>

                    <form className="space-y-3 max-w-xs">
                      <div>
                        <label className="block text-xs mb-1.5 font-medium">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="placeholder:text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 placeholder:text-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs mb-1.5 font-medium">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your number"
                          className="placeholder:text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 placeholder:text-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs mb-1.5 font-medium">
                          Email ID <span className="text-red-500">*</span>
                        </label>
                        <select className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-400">
                          <option>Service name</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs mb-1.5 font-medium">
                          Vehicle Model <span className="text-red-500">*</span>
                        </label>
                        <select className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-400">
                          <option>Select vehicle model</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs mb-1.5 font-medium">
                          Showroom <span className="text-red-500">*</span>
                        </label>
                        <select
                          defaultValue=""
                          className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-400"
                        >
                          <option value="" disabled>
                            Select showroom
                          </option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full h-9 bg-[#0052A5] text-white rounded-lg font-medium"
                      >
                        Submit
                      </button>
                    </form>
                  </div>

                  {/* Right: Image */}
                  <div className="flex justify-center items-center h-full p-4">
                    <Image
                      src={images[activeTab]}
                      alt="Ride"
                      width={1200}
                      height={900}
                      className="w-full max-w-[700px] h-auto object-contain"
                      priority
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Left: Image */}
                  <div className="flex justify-center items-center h-full p-4">
                    <Image
                      src={images[activeTab]}
                      alt="Ride"
                      width={1200}
                      height={900}
                      className="w-full max-w-[600px] h-auto object-contain"
                      priority
                    />
                  </div>

                  {/* Right: Form */}
                  <div className="p-6 md:pl-10">
                    <h3 className="text-2xl font-grotesk mb-6 ml-15">
                      Find Your Perfect Ride
                    </h3>

                    <form className="space-y-3 max-w-xs ml-15">
                      <div>
                        <label className="block text-xs mb-1.5 font-medium">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="placeholder:text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 placeholder:text-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs mb-1.5 font-medium">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your number"
                          className="placeholder:text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 placeholder:text-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs mb-1.5 font-medium">
                          Email ID <span className="text-red-500">*</span>
                        </label>
                        <select className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-400">
                          <option>Service name</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs mb-1.5 font-medium">
                          Vehicle Model <span className="text-red-500">*</span>
                        </label>
                        <select className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-400">
                          <option>Select vehicle model</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs mb-1.5 font-medium">
                          Showroom <span className="text-red-500">*</span>
                        </label>
                        <select
                          defaultValue=""
                          className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-400"
                        >
                          <option value="" disabled>
                            Select showroom
                          </option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full h-9 bg-[#0052A5] text-white rounded-lg font-medium"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}