"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function EnquiryBanner() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("section");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // Show when hero bottom is in the lower portion of the viewport (hero ending)
        setVisible(rect.bottom <= window.innerHeight * 0.5);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnquiry = () => {
    router.push("/book");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={handleEnquiry}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.95 }}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 px-3 py-4 bg-[#0056A6] hover:bg-[#00407C] text-white rounded-r-xl shadow-[4px_0px_18px_rgba(0,86,166,0.4)] transition-colors duration-300 cursor-pointer border-y border-r border-white/20 select-none group"
          aria-label="Enquiry Now"
        >
          <MessageSquare className="w-4 h-4 shrink-0 group-hover:rotate-12 transition-transform duration-300" />
          <span
            className="text-[11px] font-bold tracking-widest uppercase font-sans"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
          >
            Enquiry Now
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
