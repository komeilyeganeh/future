"use client";

import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Back to top"
          className="
            fixed
            bottom-6
            right-6
            z-50
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#082f3a]
            text-white
            shadow-[0_15px_40px_rgba(8,47,58,0.22)]
            backdrop-blur-md
            transition-shadow
            duration-300
            hover:shadow-[0_20px_50px_rgba(8,47,58,0.3)]
            md:bottom-8
            md:right-8
          "
        >
          <ArrowUp
            size={17}
            strokeWidth={1.8}
            className="transition-transform duration-300"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}