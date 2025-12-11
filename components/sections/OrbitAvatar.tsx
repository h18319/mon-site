"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, softSpring } from "@/lib/motion";

export function OrbitAvatar() {
  return (
    <motion.div
      variants={fadeInUp}
      transition={softSpring}
      className="orbit-avatar"
    >
      {/* Cercle principal avec ta photo */}
      <div className="orbit-avatar-inner">
        <Image
          src="/me.jpg"
          alt="Imane Hornain"
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>

      {/* Anneaux */}
      <div className="orbit-ring orbit-ring-1">
        <span className="orbit-dot" />
      </div>
      <div className="orbit-ring orbit-ring-2">
        <span className="orbit-dot" />
      </div>
      <div className="orbit-ring orbit-ring-3">
        <span className="orbit-dot" />
      </div>
    </motion.div>
  );
}
