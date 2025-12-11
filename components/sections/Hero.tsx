"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp, stagger, softSpring } from "@/lib/motion";
import { OrbitAvatar } from "@/components/sections/OrbitAvatar";

export function Hero() {
  return (
    <section className="relative">
      <Container className="pt-10 sm:pt-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-20 lg:flex-row lg:items-center"
        >
          <div className="w-full flex justify-center lg:w-auto lg:justify-start">
            <OrbitAvatar />
          </div>

          {/* Texte à droite */}
          <div className="max-w-3xl">
            <motion.div
              variants={fadeInUp}
              transition={softSpring}
              className="flex flex-wrap gap-2"
            >
              <Badge>Next.js</Badge>
              <Badge>Node.js</Badge>
              <Badge>Cloud</Badge>
              <Badge>Linux</Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              transition={softSpring}
              className="mt-5 text-4xl sm:text-5xl font-semibold leading-tight"
            >
              <span className="text-white/90">Hey,</span>{" "}
              <span className="bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
                je suis Imane Hornain, ingénieur logiciel
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={softSpring}
              className="mt-4 text-sm sm:text-base text-muted max-w-2xl"
            >
              Je suis passionnée par tout ce qui touche à la tech et je cherche
              activement à découvrir de nouvelles technologies et opportunités.
              Entrons en contact !
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={softSpring}
              className="mt-6 mb-6 flex flex-wrap gap-2"
            >
              <Button variant="accent" href="#projects">
                Voir mes projets
              </Button>
              <Button href="#experience">Mon parcours</Button>
              <Button href="#contact">Me contacter</Button>
            </motion.div>
          </div>
        </motion.div>

        {/* petit “hint” visuel optionnel */}
        {/* <div className="mt-10 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" /> */}
      </Container>
    </section>
  );
}
