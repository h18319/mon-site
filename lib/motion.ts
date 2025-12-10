import type { Transition } from "framer-motion";

export const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

export const softSpring: Transition = {
  type: "spring",
  stiffness: 140,
  damping: 18,
  mass: 0.6,
};