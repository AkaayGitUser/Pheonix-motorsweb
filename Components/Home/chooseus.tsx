'use client';

import { useState, useRef, useEffect } from 'react';
import { StaticImageData } from 'next/image';

import img1 from '@/public/images/1.jpg';
import img2 from '@/public/images/2.jpg';
import img3 from '@/public/images/3.jpg';
import img4 from '@/public/images/4.jpg';
import img5 from '@/public/images/5.jpg';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: StaticImageData | string;
  comment: string;
  rating: number;
  objectPosition?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Stephen Brekke',
    role: 'Legacy Integration Producer',
    image: img4,
    objectPosition: 'center 15%',
    comment:
      "If you want real marketing that works and effective implementation mobile app's got you covered. If you want real marketing that works and effective implementation mobile app's got you covered.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Stephen Brekke',
    role: 'Legacy Integration Producer',
    image: img5,
    objectPosition: 'center 15%',
    comment:
      "If you want real marketing that works and effective implementation mobile app's got you covered. If you want real marketing that works and effective implementation mobile app's got you covered.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Stephen Brekke',
    role: 'Legacy Integration Producer',
    image: img1,
    objectPosition: '70% 30%',
    comment:
      "If you want real marketing that works and effective implementation mobile app's got you covered. If you want real marketing that works and effective implementation mobile app's got you covered.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Stephen Brekke',
    role: 'Legacy Integration Producer',
    image: img2,
    objectPosition: '78% 20%',
    comment:
      "If you want real marketing that works and effective implementation mobile app's got you covered. If you want real marketing that works and effective implementation mobile app's got you covered.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Stephen Brekke',
    role: 'Legacy Integration Producer',
    image: img3,
    objectPosition: 'center 15%',
    comment:
      "If you want real marketing that works and effective implementation mobile app's got you covered. If you want real marketing that works and effective implementation mobile app's got you covered.",
    rating: 5,
  },
  {
    id: 6,
    name: 'Stephen Brekke',
    role: 'Legacy Integration Producer',
    image: img4,
    objectPosition: 'center 15%',
    comment:
      "If you want real marketing that works and effective implementation mobile app's got you covered. If you want real marketing that works and effective implementation mobile app's got you covered.",
    rating: 5,
  },
];

export default function Chooseus() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Continuous smooth auto scroll towards the left side only
  useEffect(() => {
    let animationFrameId: number;

    const step = () => {
      if (isAutoScrolling && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const halfScroll = container.scrollWidth / 2;
        const speed = 2.0;

        if (halfScroll > 0) {
          if (container.scrollLeft >= halfScroll) {
            container.scrollLeft -= halfScroll;
          } else {
            container.scrollLeft += speed;
          }
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isAutoScrolling]);

  return (
    <section
      className="bg-[#F1F1F1] pt-14 md:pt-5 pb-16 md:pb-24 overflow-hidden relative select-none"
      style={{ fontFamily: "'Neurial Grotesk', sans-serif" }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-11 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#303030] tracking-tight">
          Why Riders Choose Us
        </h2>
      </div>

      {/* Carousel Container - Full Bleed Width */}
      <div
        className="w-full relative"
        onMouseEnter={() => setIsAutoScrolling(false)}
        onMouseLeave={() => setIsAutoScrolling(true)}
      >
        {/* Cards Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar pt-12 sm:pt-14 pb-8 px-6 sm:px-12 md:px-20 lg:px-28 cursor-grab active:cursor-grabbing"
        >
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="relative bg-[#FFFFFF] rounded-[28px] sm:rounded-[32px] px-7 sm:px-9 pt-8 pb-6 shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.09)] transition-all duration-300 flex-shrink-0 w-[85vw] max-w-[630px] sm:w-[630px] h-[260px] flex flex-col justify-between"
            >
              {/* Avatar Image overlapping top border */}
              <div className="absolute -top-8 sm:-top-10 left-6 sm:left-9 z-20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src={typeof item.image === 'string' ? item.image : item.image.src}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: item.objectPosition || 'center' }}
                  />
                </div>
              </div>

              {/* Top Right Stars */}
              <div className="flex justify-end items-center gap-1.5 -mt-3 sm:-mt-4 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-[#014C98] text-[#014C98]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#45443F] text-sm sm:text-base leading-relaxed my-auto font-normal overflow-hidden">
                {item.comment}
              </p>

              {/* Author Info */}
              <div className="mt-auto">
                <h4 className="font-medium text-[#303030] text-xl sm:text-xl tracking-tight">
                  {item.name}
                </h4>
                <p className="text-[#343434] text-sm sm:text-base mt-0.5 font-regular">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}