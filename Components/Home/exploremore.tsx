"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Exploremore() {
  const items = [
    {
      heading: "Every Journey Begins Here.",
      subHeading: "",
      image: "/design-images/journey.jpg",
      description1:
        "Certified technicians, genuine spare parts, and modern service facilities keep your vehicle performing at its best. Every service is delivered with precision, ensuring reliability, safety, and long-lasting performance for every journey.",
      description2:
        "Certified technicians, genuine spare parts, and modern service facilities keep your vehicle performing at its best.",
    },
    {
      heading: "Sales",
      subHeading: "Find the Ride That Fits Your Journey",
      image: "/design-images/sale.jpg",
      description1:
        "Explore the latest Hero motorcycles and scooters with expert guidance tailored to your needs. From your first enquiry to final delivery, we make every step simple and enjoyable.",
      description2:
        "Discover the right model, explore offers and enjoy a seamless buying experience backed by trusted service.",
    },
    {
      heading: "Service",
      subHeading: "Expert Care for Every Ride",
      image: "/design-images/service.jpg",
      description1:
        "Keep your Hero performing at its best with certified technicians, genuine parts and modern service facilities designed for reliability and peace of mind.",
      description2:
        "From routine maintenance to major repairs, every service is completed with precision and attention to detail.",
    },
    {
      heading: "Finance & Insurance",
      subHeading: "Ownership Made Easy",
      image: "/design-images/finance.jpg",
      description1:
        "Flexible finance solutions and comprehensive insurance options make owning your Hero more accessible than ever.",
      description2:
        "Our team helps you choose the right plan with a simple, transparent process tailored to your needs.",
    },
    {
      heading: "Member Engagement",
      subHeading: "Beyond the Ride",
      image: "/design-images/member.jpg",
      description1:
        "Join a growing community of Hero riders through exclusive events, customer experiences, merchandise, and dealership activities.",
      description2:
        "Celebrate every milestone with a dealership that values every rider long after the purchase.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  // Duplicate items array so sliding past the 5th item flows continuously
  const extendedItems = [...items, ...items, ...items];

  // Thumbnail width (150px) + Gap (12px) = 162px step per slide
  const THUMBNAIL_STEP = 162;

  return (
    <section className="w-full bg-[#FAFAFA] py-16 overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-[32px] font-medium leading-tight text-[#1E1E1E]">
          Everything you need.
          <br />
          All in one place
        </h2>

        {/* Content Layout */}
        <div className="mt-12 flex items-start justify-between gap-10">
          {/* Main Left Image (Slides synchronized) */}
          <div className="relative w-[480px] h-[450px] rounded-lg overflow-hidden flex-shrink-0">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{
                width: `${items.length * 100}%`,
                transform: `translateX(-${
                  currentIndex * (100 / items.length)
                }%)`,
              }}
            >
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="relative h-full flex-shrink-0"
                  style={{ width: `${100 / items.length}%` }}
                >
                  <Image
                    src={item.image}
                    alt={item.heading}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Column */}
          <div className="flex-1 max-w-[720px] flex flex-col justify-between h-[450px]">
            {/* Text Area */}
            <div>
              <h3 className="text-[32px] font-medium font-['Neurial_Grotesk'] text-[#1F1F1F]">
                {items[currentIndex].heading}
              </h3>

              {items[currentIndex].subHeading && (
                <h4 className="mt-2 text-[20px] font-medium font-['Neurial_Grotesk'] text-[#303030]">
                  {items[currentIndex].subHeading}
                </h4>
              )}

              <p className="mt-4 text-[13px] leading-[22px] text-[#555555]">
                {items[currentIndex].description1}
              </p>

              <p className="mt-3 text-[13px] leading-[22px] text-[#555555] whitespace-pre-line">
                {items[currentIndex].description2}
              </p>

              <button className="mt-5 px-6 py-2.5 bg-[#0056A6] text-white text-[14px] font-medium hover:bg-[#00407C] transition rounded-sm">
                Explore More
              </button>
            </div>

            {/* Bottom Controls Row */}
            <div className="flex items-center justify-between mt-4">
              {/* Exactly 4 Uniform Small Images Window (4 * 150px + 3 * 12px gap = 636px) */}
              <div className="w-[636px] overflow-hidden">
                <div
                  className="flex gap-3 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * THUMBNAIL_STEP}px)`,
                  }}
                >
                  {extendedItems.map((item, idx) => {
                    const originalIdx = idx % items.length;
                    return (
                      <div
                        key={idx}
                        onClick={() => setCurrentIndex(originalIdx)}
                        className="relative w-[150px] h-[110px] rounded-md overflow-hidden cursor-pointer flex-shrink-0"
                      >
                        <Image
                          src={item.image}
                          alt={item.heading}
                          fill
                          className="object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="w-[40px] h-[40px] border border-[#CCCCCC] bg-white rounded flex items-center justify-center text-[#1E1E1E] hover:bg-gray-100 transition shadow-sm"
                >
                  <ChevronLeft size={20} strokeWidth={2.2} />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next"
                  className="w-[40px] h-[40px] border border-[#CCCCCC] bg-white rounded flex items-center justify-center text-[#1E1E1E] hover:bg-gray-100 transition shadow-sm"
                >
                  <ChevronRight size={20} strokeWidth={2.2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}