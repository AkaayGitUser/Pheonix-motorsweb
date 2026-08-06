"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Exploremore() {
  const items = [
    {
      id: "every-journey",
      tabLabel: "Every Journey Begins Here",
      heading: "Every Journey Begins Here.",
      image: "/design-images/journey.jpg",
      description:
        "Say goodbye to service booking woes. Enjoy the convenience of booking a service from anywhere through WhatsApp and get live status updates on the go.",
    },
    {
      id: "sales",
      tabLabel: "Sale",
      heading: "Sales",
      image: "/design-images/sale.jpg",
      description:
        "Looking for stress-free vehicle maintenance? Enjoy discounts on labour and parts during your service journey with our Annual Maintenance Contract (AMC). Choose peace of mind by choosing a package that suits your needs and offers you better savings.",
    },
    {
      id: "service",
      tabLabel: "Service",
      heading: "Service",
      image: "/design-images/service.jpg",
      description:
        "Love to ride but worried about breakdown? Simply dial our 24X7 toll-free number: 1800 258 7111 and help will be on its way. Choose the convenience of RSA with benefits, such as water and refreshment services, helmet, and document assistance, and more.",
    },
    {
      id: "finance",
      tabLabel: "Finance & Service",
      heading: "Finance & Insurance",
      image: "/design-images/finance.jpg",
      description:
        "Because you deserve only the best, TVS Genuine Parts & TRU4 Oil ensure longer product lifespans, perfect compatibility, and higher resistance to wear and tear. Sign up for our Annual Maintenance Contracts and avail an additional discount on genuine parts.",
    },
    {
      id: "member",
      tabLabel: "Member Engagement",
      heading: "Member Engagement",
      image: "/design-images/member.jpg",
      description:
        "Our Proactive Inspection service prevents issues before they arise. This service identifies potential problems early, enabling timely maintenance. This approach ensures optimal performance, enhances safety, and extends the lifespan of your vehicles.",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const top = ref.offsetTop;
          const height = ref.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    setActiveTab(index);
    const targetRef = sectionRefs.current[index];
    if (targetRef) {
      const targetPosition = targetRef.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[#F4F4F4] pt-6 sm:pt-8 pb-12 sm:pb-16">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Title */}
        <h2 className="text-center text-[22px] sm:text-[28px] font-regular font-Neurial_Grotesk leading-tight text-[#1E1E1E]">
          Everything you need. All in one place
        </h2>

        {/* Sticky Header Navigation Tabs */}
        <div className="sticky top-0 z-30 bg-[#F4F4F4]/95 backdrop-blur-md pt-4 my-4 sm:my-6 border-b border-[#D3D3D3]">
          <div className="w-full flex items-center justify-between gap-4 overflow-x-auto scrollbar-none whitespace-nowrap px-1">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(idx)}
                className={`text-[14px] sm:text-[16px] lg:text-[18px] font-Neurial_Grotesk transition-all duration-200 pb-3 relative shrink-0 ${
                  activeTab === idx
                    ? "font-regular text-[#1E1E1E]"
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

        {/* Vertical List of Alternating Feature Cards */}
        <div className="space-y-8 sm:space-y-10 mt-3 sm:mt-4">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.id}
                ref={(el) => {
                  sectionRefs.current[idx] = el;
                }}
                className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8 scroll-mt-32"
              >
                {/* Image Box */}
                <div
                  className={`w-full lg:w-[47%] h-[200px] sm:h-[260px] lg:h-[300px] relative rounded-xl overflow-hidden shadow-sm shrink-0 ${
                    isEven ? "order-1 lg:order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.heading}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>

                {/* Text Box */}
                <div
                  className={`w-full lg:w-[48%] flex flex-col justify-start pt-1 sm:pt-2 items-start ${
                    isEven ? "order-2 lg:order-2" : "order-2 lg:order-1"
                  }`}
                >
                  <h3 className="text-[24px] sm:text-[30px] font-normal font-Neurial_Grotesk text-[#1F1F1F]">
                    {item.heading}
                  </h3>

                  <p className="mt-2 text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] font-Neurial_Grotesk text-[#555555]">
                    {item.description}
                  </p>

                  <button className="mt-4 w-[180px] sm:w-[200px] h-[44px] sm:h-[48px] flex items-center justify-center bg-[#0056A6] hover:bg-[#00407C] text-white text-[15px] sm:text-[16px] font-medium font-Neurial_Grotesk rounded-sm transition-colors shadow-sm">
                    Know More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
