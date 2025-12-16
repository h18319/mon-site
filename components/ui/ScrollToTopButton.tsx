"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // apparaît après un peu de scroll
    };

    handleScroll(); // état correct dès le début
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="
            fixed cursor-pointer bottom-5 right-4 sm:bottom-8 sm:right-8
            z-40 inline-flex h-10 w-10 items-center justify-center
            rounded-full border border-white/15
            bg-black/60 text-white/80
            shadow-[0_12px_30px_rgba(0,0,0,0.6)] backdrop-blur
            hover:border-emerald-400/60 hover:text-white hover:bg-black/80
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-emerald-400 focus-visible:ring-offset-2
            focus-visible:ring-offset-black
          "
          aria-label="Revenir en haut de la page"
        >
          {/* petite flèche vers le haut en SVG pour éviter une nouvelle dépendance */}
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
            <path d="M12 4l-6 6h4v6h4v-6h4z" fill="currentColor" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
