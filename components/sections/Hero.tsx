"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp, stagger, softSpring } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative">
      <Container className="pt-10 sm:pt-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeInUp} transition={softSpring} className="flex flex-wrap gap-2">
            <Badge>Next.js App Router</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Tailwind v4</Badge>
            <Badge>Framer Motion</Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            transition={softSpring}
            className="mt-5 text-4xl sm:text-5xl font-semibold leading-tight"
          >
            <span className="text-white/90">Imane,</span>{" "}
            <span className="bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
              je construis des expériences web modernes.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={softSpring}
            className="mt-4 text-sm sm:text-base text-muted max-w-2xl"
          >
            Développeuse orientée produit, attentive au détail UI, à la performance
            et à la maintenabilité. J’aime transformer des besoins métier en interfaces
            claires et fiables.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={softSpring}
            className="mt-6 flex flex-wrap gap-2"
          >
            <Button variant="accent" href="#projects">
              Voir mes projets
            </Button>
            <Button href="#experience">
              Mon parcours
            </Button>
            <Button href="#contact">
              LinkedIn / WhatsApp
            </Button>
          </motion.div>
        </motion.div>

        {/* petit “hint” visuel optionnel */}
        <div className="mt-10 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </Container>
    </section>
  );
}
