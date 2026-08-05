// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export default function StartJourney() {
//   const [activeTab, setActiveTab] = useState("Test Ride");

//   const tabs = [
//     "Test Ride",
//     "New Vehicle Enquiry",
//     "Service Appointment",
//     "Finance Assistance",
//   ];

//   const images: Record<string, string> = {
//     "Test Ride": "/bikefirst.png",
//     "New Vehicle Enquiry": "/sec.png",
//     "Service Appointment": "/serviceapp.webp",
//     "Finance Assistance": "/bikefour.png",
//   };

//   const imageOnRight =
//     activeTab === "Test Ride" || activeTab === "Service Appointment";

//   return (
//     <section className="bg-[#F1F1F1] py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 text-black">
//         {/* Heading */}
//         <h2 className="text-2xl font-grotesk text-center mb-8">
//           Start Your Journey
//         </h2>

//         {/* Tabs */}
//         <div className="flex justify-center gap-12 sm:gap-20 mb-10 overflow-x-auto">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-3 text-md transition shrink-0 ${
//                 activeTab === tab
//                   ? "border-b-2 border-blue-700 font-semibold"
//                   : "border-b-2 border-transparent text-gray-600"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Static Card Container */}
//         <div className="bg-white rounded-3xl shadow-sm max-w-5xl mx-auto min-h-[520px] relative overflow-hidden flex items-stretch">
//           {/* Side-by-Side Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch p-6 md:p-10 relative">
//             {/* FORM BLOCK */}
//             <motion.div
//               layout
//               transition={{
//                 layout: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
//               }}
//               className={`w-full flex flex-col justify-center ${
//                 imageOnRight ? "md:order-1" : "md:order-2"
//               }`}
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`form-text-${activeTab}`}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.25 }}
//                   className="w-full max-w-xs mx-auto md:mx-0 relative z-10"
//                 >
//                   <h3 className="text-2xl font-grotesk mb-6 text-left">
//                     Find Your Perfect Ride
//                   </h3>

//                   {/* <form className="space-y-3 w-full">
//                     <div>
//                       <label className="block text-xs mb-1.5 font-medium">
//                         Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter your name"
//                         className="placeholder:text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 placeholder:text-gray-400"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-xs mb-1.5 font-medium">
//                         Phone Number <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter your number"
//                         className="placeholder:text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 placeholder:text-gray-400"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-xs mb-1.5 font-medium">
//                         Email ID <span className="text-red-500">*</span>
//                       </label>
//                       <select className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 pr-8 text-gray-400">
//                         <option>Service name</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-xs mb-1.5 font-medium">
//                         Vehicle Model <span className="text-red-500">*</span>
//                       </label>
//                       <select className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-400">
//                         <option>Select vehicle model</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-xs mb-1.5 font-medium">
//                         Showroom <span className="text-red-500">*</span>
//                       </label>
//                       <select
//                         defaultValue=""
//                         className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-400 mb-2"
//                       >
//                         <option value="" disabled>
//                           Select showroom
//                         </option>
//                       </select>
//                     </div>

//                     <button
//                       type="submit"
//                       className="w-full h-9 bg-[#0052A5] text-white rounded-lg font-medium"
//                     >
//                       Submit
//                     </button>
//                   </form> */}

//                   {/* Form with left-shifted dropdown arrows */}
//                   <form className="space-y-3 w-full">
//                     <div>
//                       <label className="block text-xs mb-1.5 font-medium">
//                         Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter your name"
//                         className="placeholder:text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 placeholder:text-gray-400"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-xs mb-1.5 font-medium">
//                         Phone Number <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter your number"
//                         className="placeholder:text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg px-4 placeholder:text-gray-400"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-xs mb-1.5 font-medium">
//                         Email ID <span className="text-red-500">*</span>
//                       </label>
//                       <select className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg pl-4 pr-10 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_20px_center] text-gray-400">
//                         <option>Service name</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-xs mb-1.5 font-medium">
//                         Vehicle Model <span className="text-red-500">*</span>
//                       </label>
//                       <select className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg pl-4 pr-10 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_20px_center] text-gray-400">
//                         <option>Select vehicle model</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-xs mb-1.5 font-medium">
//                         Showroom <span className="text-red-500">*</span>
//                       </label>
//                       <select
//                         defaultValue=""
//                         className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg pl-4 pr-10 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_20px_center] text-gray-400 mb-2"
//                       >
//                         <option value="" disabled>
//                           Select showroom
//                         </option>
//                       </select>
//                     </div>

//                     <button
//                       type="submit"
//                       className="w-full h-9 bg-[#0052A5] text-white rounded-lg font-medium"
//                     >
//                       Submit
//                     </button>
//                   </form>
//                 </motion.div>
//               </AnimatePresence>
//             </motion.div>

//             {/* IMAGE BLOCK (Anchored to Card Bottom) */}
//             {/* IMAGE BLOCK (Centered horizontally and anchored to card bottom) */}
//             {/* IMAGE BLOCK */}
//             <motion.div
//               layout
//               transition={{
//                 layout: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
//               }}
//               className={`w-full flex items-end justify-center relative min-h-[300px] ${
//                 imageOnRight ? "md:order-2" : "md:order-1"
//               }`}
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`img-${activeTab}`}
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   transition={{ duration: 0.25 }}
//                   className="w-full h-full flex items-end justify-center absolute bottom-0 left-0 right-0"
//                 >
//                   <Image
//                     src={images[activeTab]}
//                     alt="Ride"
//                     width={1200}
//                     height={900}
//                     className="w-full max-w-[580px] h-auto object-contain object-bottom object-center mx-auto -mb-6 md:-mb-10"
//                     priority
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


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

  // Helper function to render the form content
  const renderForm = () => (
    <form className="space-y-3 w-full">
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
        <select className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg pl-4 pr-10 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_20px_center] text-gray-400">
          <option>Service name</option>
        </select>
      </div>

      <div>
        <label className="block text-xs mb-1.5 font-medium">
          Vehicle Model <span className="text-red-500">*</span>
        </label>
        <select className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg pl-4 pr-10 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_20px_center] text-gray-400">
          <option>Select vehicle model</option>
        </select>
      </div>

      <div>
        <label className="block text-xs mb-1.5 font-medium">
          Showroom <span className="text-red-500">*</span>
        </label>
        <select
          defaultValue=""
          className="text-xs w-full h-9 bg-gray-100 border border-gray-300 rounded-lg pl-4 pr-10 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_20px_center] text-gray-400 mb-2"
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
  );

  // Layout specifically for sec.png (bottom-left corner flush)
  const renderSecImageLeftLayout = (src) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch p-6 md:p-10 relative">
      <div className="w-full flex items-end justify-start relative min-h-[300px]">
        <div className="w-full h-full flex items-end justify-start absolute bottom-0 left-0">
          <Image
            src={src}
            alt="Ride"
            width={1250}
            height={1000}
            className="w-full max-w-[580px] h-auto object-contain object-left-bottom -mb-6 md:-mb-15 -ml-6 md:-ml-23"
            priority
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center">
        <div className="w-full max-w-xs mx-auto md:mx-0 relative z-10">
          <h3 className="text-2xl font-grotesk mb-6 text-left">
            Find Your Perfect Ride
          </h3>
          {renderForm()}
        </div>
      </div>
    </div>
  );

  // Helper function to render a layout with image centered on the left
  const renderLeftImageLayout = (src) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch p-6 md:p-10 relative">
      <div className="w-full flex items-end justify-center relative min-h-[300px]">
        <div className="w-full h-full flex items-end justify-center absolute bottom-0 left-0 right-0">
          <Image
            src={src}
            alt="Ride"
            width={1200}
            height={900}
            className="w-full max-w-[580px] h-auto object-contain object-bottom object-center mx-auto mb-6 "
            priority
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center">
        <div className="w-full max-w-xs mx-auto md:mx-0 relative z-10">
          <h3 className="text-2xl font-grotesk mb-6 text-left">
            Find Your Perfect Ride
          </h3>
          {renderForm()}
        </div>
      </div>
    </div>
  );

  // Helper function to render a layout with image centered on the right
  const renderRightImageLayout = (src) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch p-6 md:p-10 relative">
      <div className="w-full flex flex-col justify-center">
        <div className="w-full max-w-xs mx-auto md:mx-0 relative z-10">
          <h3 className="text-2xl font-grotesk mb-6 text-left">
            Find Your Perfect Ride
          </h3>
          {renderForm()}
        </div>
      </div>
      <div className="w-full flex items-end justify-center relative min-h-[300px]">
        <div className="w-full h-full flex items-end justify-center absolute bottom-0 left-0 right-0">
          <Image
            src={src}
            alt="Ride"
            width={1200}
            height={900}
            className="w-full max-w-[580px] h-auto object-contain object-bottom object-center mx-auto -mb-6 md:-mb-10"
            priority
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#F1F1F1] py-16 overflow-hidden">
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
              className={`pb-3 text-md transition shrink-0 ${
                activeTab === tab
                  ? "border-b-2 border-blue-700 font-semibold"
                  : "border-b-2 border-transparent text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Static Card Container */}
        <div className="bg-white rounded-3xl shadow-sm max-w-5xl mx-auto min-h-[520px] relative overflow-hidden flex items-stretch">
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
