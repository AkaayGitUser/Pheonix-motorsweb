"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Exploremore() {
  const items = [
    {
      id: "every-journey",
      tabLabel: "Every Journey Begins Here",
      image: "/design-images/journey.jpg",
       description:
        "Say goodbye to service booking woes. Enjoy the convenience of booking a service from anywhere through WhatsApp and get live status updates on the go.",
    },


    {
      id: "sales",
      tabLabel: "Sale",
      image: "/design-images/sale.jpg",
      description:
        "Looking for stress-free vehicle maintenance? Enjoy discounts on labour and parts during your service journey with our Annual Maintenance Contract (AMC).",

    },
    {
      id: "service",
      tabLabel: "Service",
      image: "/design-images/service.jpg",
      description:
        "Love to ride but worried about breakdown? Simply dial our 24X7 toll-free number: 1800 258 7111 and help will be on its way. Choose the convenience of RSA with benefits.",
      
    },
    {
      id: "finance",
      tabLabel: "Finance & Service",
      image: "/design-images/finance.jpg",
     description:
        "Because you deserve only the best, TVS Genuine Parts & TRU4 Oil ensure longer product lifespans, perfect compatibility, and higher resistance to wear and tear.",
    },
    {
      id: "member",
      tabLabel: "Member Engagement",
      image: "/design-images/member.jpg",
       description:
        "Our Proactive Inspection service prevents issues before they arise. This service identifies potential problems early, enabling timely maintenance.",
    },

  ];

  const [activeTab, setActiveTab] = useState(0);

  // Auto-scroll every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeTab, items.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveTab((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveTab((prev) => (prev + 1) % items.length);
  };

  return (
    <section className="w-full bg-[#F4F4F4] pt-8 sm:pt-12 pb-12 sm:pb-16 select-none">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Title */}
        <h2 className="text-center text-[22px] sm:text-[28px] font-regular font-Neurial_Grotesk leading-tight text-[#1E1E1E] mb-4">
          Everything you need. All in one place
        </h2>

        {/* Header Navigation Tabs */}
        <div className="bg-[#F4F4F4]/95 pt-2 my-4 sm:my-6 border-b border-[#D3D3D3]">
          <div className="w-full flex items-center justify-between gap-4 overflow-x-auto scrollbar-none whitespace-nowrap px-1">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`text-[14px] sm:text-[16px] lg:text-[18px] font-Neurial_Grotesk transition-all duration-200 pb-3 relative shrink-0 cursor-pointer ${
                  activeTab === idx
                    ? "font-regular text-[#0056A6]"
                    : "font-regular text-[#555555] hover:text-[#1E1E1E]"
                }`}
              >
                {item.tabLabel}
                {activeTab === idx && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#0056A6] z-10" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Slider Layout with Outer Arrows */}
        <div className="relative w-full mt-4 sm:mt-6">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-[-16px] sm:left-[-32px] lg:left-[-48px] top-1/2 -translate-y-1/2 z-30 flex items-center justify-center p-1 text-[#1E1E1E] hover:text-[#0056A6] transition-colors duration-200 cursor-pointer select-none hover:scale-110 active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9 stroke-[1.5]" />
          </button>

          {/* Full Image Slider Container */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[300px] max-h-[500px] rounded-2xl overflow-hidden shadow-sm bg-[#EAEAEA] group">
            {items.map((item, idx) => (
              <div
                key={item.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  activeTab === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.tabLabel}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
                {/* Gradient Overlay applied directly on top of the image for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 pointer-events-none" />
                
                {/* Centered Content Overlay (Description + Button) */}
                <div className="absolute bottom-6 inset-x-6 z-30 flex flex-col items-center gap-3 sm:gap-4 text-center">
                  {item.description && (
                    <p className="text-white text-[14px] sm:text-[15px] lg:text-[16px] font-Neurial_Grotesk max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  <button className="px-8 h-[46px] sm:h-[48px] bg-[#0056A6] hover:bg-[#00407C] text-white text-[15px] sm:text-[16px] font-medium font-Neurial_Grotesk rounded-none transition-all duration-300 shadow-md cursor-pointer tracking-wider hover:scale-[1.03] active:scale-95">
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-[-16px] sm:right-[-32px] lg:right-[-48px] top-1/2 -translate-y-1/2 z-30 flex items-center justify-center p-1 text-[#1E1E1E] hover:text-[#0056A6] transition-colors duration-200 cursor-pointer select-none hover:scale-110 active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
