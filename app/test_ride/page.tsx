"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function StartJourney() {
  const [activeTab, setActiveTab] = useState("Test Ride");

  const tabs = [
    { id: "Test Ride", label: "Test Ride", shortLabel: "Test Ride" },
    {
      id: "New Vehicle Enquiry",
      label: "New Vehicle Enquiry",
      shortLabel: "Enquiry",
    },
    {
      id: "Service Appointment",
      label: "Service Appointment",
      shortLabel: "Service",
    },
    {
      id: "Finance Assistance",
      label: "Finance Assistance",
      shortLabel: "Finance",
    },
  ];

  // Helper function to render the form content
  const renderForm = () => (
    <form className="space-y-4 w-full ">
      <div>
        <label className="block text-xs mb-1.5 font-medium ">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="placeholder:text-xs w-full h-10 bg-gray-100 border border-gray-300 rounded-lg px-4 placeholder:text-gray-400"
        />
      </div>

      <div>
        <label className="block text-xs mb-1.5 font-medium">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your number"
          className="placeholder:text-xs w-full h-10 bg-gray-100 border border-gray-300 rounded-lg px-4 placeholder:text-gray-400"
        />
      </div>

      <div>
        <label className="block text-xs mb-1.5 font-medium">
          Email ID <span className="text-red-500">*</span>
        </label>
        <select className="text-xs w-full h-10 bg-gray-100 border border-gray-300 rounded-lg pl-4 pr-10 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_20px_center] text-gray-400">
          <option>Service name</option>
        </select>
      </div>

      <div>
        <label className="block text-xs mb-1.5 font-medium">
          Vehicle Model <span className="text-red-500">*</span>
        </label>
        <select className="text-xs w-full h-10 bg-gray-100 border border-gray-300 rounded-lg pl-4 pr-10 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_20px_center] text-gray-400">
          <option>Select vehicle model</option>
        </select>
      </div>

      <div>
        <label className="block text-xs mb-1.5 font-medium">
          Showroom <span className="text-red-500">*</span>
        </label>
        <select
          defaultValue=""
          className="text-xs w-full h-10 bg-gray-100 border border-gray-300 rounded-lg pl-4 pr-10 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_20px_center] text-gray-400 mb-2"
        >
          <option value="" disabled>
            Select showroom
          </option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full h-10 bg-[#0052A5] text-white rounded-lg font-medium hover:bg-[#003d7c] transition"
      >
        Submit
      </button>
    </form>
  );

  // Layout specifically for sec.png (bottom-left corner flush)
  const renderSecImageLeftLayout = (src: string) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch p-8 md:p-14 relative">
      <div className="hidden md:flex w-full items-end justify-start relative min-h-[360px]">
        <div className="w-full h-full flex items-end justify-start absolute bottom-0 left-0">
          <Image
            src={src}
            alt="Ride"
            width={1250}
            height={1000}
            className="w-full max-w-[620px] h-auto object-contain object-left-bottom -mb-17 -ml-28"
            priority
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center">
  <div className="w-full max-w-sm mx-auto md:ml-auto md:mr-0 relative z-10">
    <h3 className="sm:text-2xl md:text-4xl font-Neurial Grotesk sm:mb-6 text-left ">
      Find Your Perfect Ride
    </h3>
    {renderForm()}
  </div>
</div>
    </div>
  );

  // Helper function to render a layout with image centered on the left
  const renderLeftImageLayout = (src: string) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch p-8 md:p-14 relative">
      <div className="hidden md:flex w-full items-end justify-center relative min-h-[360px]">
        <div className="w-full h-full flex items-end justify-center absolute bottom-0 left-0 right-0">
          <Image
            src={src}
            alt="Ride"
            width={1200}
            height={900}
            className="w-full max-w-[620px] h-auto object-contain object-bottom object-center mx-auto mb-6"
            priority
          />
        </div>
      </div>
     <div className="w-full flex flex-col justify-center">
  <div className="w-full max-w-sm mx-auto md:ml-auto md:mr-0 relative z-10">
    <h3 className="sm:text-2xl md:text-4xl font-Neurial Grotesk sm:mb-6 text-left">
      Find Your Perfect Ride
    </h3>
    {renderForm()}
  </div>
</div>
    </div>
  );

  // Helper function to render a layout with image centered on the right
  const renderRightImageLayout = (src: string) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch p-8 md:p-14 relative">
      <div className="w-full flex flex-col justify-center">
        <div className="w-full max-w-sm mx-auto md:mx-0 relative z-10">
          <h3 className="text-xl sm:text-2xl md:text-4xl font-Neurial Grotesk mb-4 sm:mb-6 text-left  ">
            Find Your Perfect Ride
          </h3>
          {renderForm()}
        </div>
      </div>
      <div className="hidden md:flex w-full items-end justify-center relative min-h-[360px]">
        <div className="w-full h-full flex items-end justify-center absolute bottom-0 left-0 right-0">
          <Image
            src={src}
            alt="Ride"
            width={1200}
            height={900}
            className="w-full max-w-[620px] h-auto object-contain object-bottom object-center mx-auto -mb-14"
            priority
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#F1F1F1] py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-black">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-Neurial Grotesk text-center mb-2 sm:mb-8">
          Start Your Journey
        </h2>

        {/* Tabs with content-width short underline */}

        <div className="flex w-full justify-center gap-3 sm:gap-10 mb-[-2]">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`pb-4 text-center transition relative group text-md sm:text-md px-2 font-Neurial Grotesk ${
        activeTab === tab.id ? "regular " : "text-gray-600"
      }`}
    >
      <span className="relative inline-block pb-1">
        <span className="sm:hidden">{tab.shortLabel}</span>
        <span className="hidden sm:inline">{tab.label}</span>
        {activeTab === tab.id && (
          <span className="absolute bottom-0 -left-1 -right-1 h-[2px] bg-[#003366] rounded-full" />
        )}
      </span>
    </button>
  ))}
</div>


        {/* Static Card Container - Enlarged */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm max-w-6xl mx-auto min-h-0 md:min-h-[600px] relative overflow-hidden flex items-stretch">
          <AnimatePresence mode="wait">
            {activeTab === "Test Ride" && (
              <motion.div
                key="test-ride"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full"
              >
                {renderRightImageLayout("/bikefirst.png")}
              </motion.div>
            )}
            {activeTab === "New Vehicle Enquiry" && (
              <motion.div
                key="new-vehicle-enquiry"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full"
              >
                {renderSecImageLeftLayout("/sec.png")}
              </motion.div>
            )}
            {activeTab === "Service Appointment" && (
              <motion.div
                key="service-appointment"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full"
              >
                {renderRightImageLayout("/serviceapp.webp")}
              </motion.div>
            )}
            {activeTab === "Finance Assistance" && (
              <motion.div
                key="finance-assistance"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full"
              >
                {renderLeftImageLayout("/bikefourone.png")}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
