"use client";

import { motion } from "framer-motion";
import { fadeInUp, softSpring } from "@/lib/motion";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  id,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div id={id} className="mb-8">
      {eyebrow && (
        <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/50">
          {eyebrow}
        </div>
      )}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={softSpring}
        className="text-2xl sm:text-3xl font-semibold"
      >
        <span className="bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm sm:text-base text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
