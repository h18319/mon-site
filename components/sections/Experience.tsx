"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { EXPERIENCE } from "@/data/experience";
import { fadeInUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section className="mt-20">
      <Container>
        <SectionTitle
          id="experience"
          eyebrow="Parcours"
          title="Expériences & formation"
          subtitle="Une timeline claire, orientée impact, compétences et progression."
        />

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20% 0px" }}
          className="relative mx-auto mt-8 max-w-4xl space-y-10 lg:space-y-12"
        >
          {/* Ligne centrale (desktop only pour éviter les collisions sur mobile) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-linear-to-b from-emerald-400/50 via-white/10 to-transparent lg:block"
          />

          {EXPERIENCE.map((item, index) => {
            const isLeft = index % 2 === 0; // alterne gauche / droite

            return (
              <motion.li
                key={`${item.org}-${item.start}-${item.title}`}
                variants={fadeInUp}
                transition={{
                  type: "spring",
                  stiffness: 130,
                  damping: 18,
                  mass: 0.7,
                  delay: index * 0.05,
                }}
                className="relative"
              >
                {/* Dot centrale (desktop) */}
                <span
                  aria-hidden
                  className="absolute left-1/2 top-5 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-emerald-400/70 bg-emerald-400/40 shadow-[0_0_0_4px_rgba(16,185,129,0.18)] lg:block"
                />

                <div
                  className={cn(
                    "lg:flex lg:items-stretch",
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  )}
                >
                  <div
                    className={cn(
                      "mt-2 w-full lg:w-1/2",
                      isLeft ? "lg:pr-10" : "lg:pl-10"
                    )}
                  >
                    <ExperienceCard item={item} />
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </Container>
    </section>
  );
}

type ExperienceCardProps = {
  item: (typeof EXPERIENCE)[number];
};

function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <div className="card border border-white/8 bg-black/40 p-4 sm:p-5">
      {/* Titre + dates */}
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <div className="text-sm font-semibold text-white">
            {item.title}
          </div>
          <div className="text-xs text-white/60">
            {item.org}
            {item.location && <> · {item.location}</>}
          </div>
        </div>

        <div className="text-[11px] uppercase tracking-[0.16em] text-white/40">
          {item.start}
          {item.end ? (
            <>
              {" "}
              — <span>{item.end}</span>
            </>
          ) : (
            " — Aujourd’hui"
          )}
        </div>
      </div>

      {/* Résumé */}
      <p className="mt-3 text-xs text-white/75">{item.summary}</p>

      {/* Bullets */}
      {item.bullets && item.bullets.length > 0 && (
        <ul className="mt-3 space-y-1.5 text-xs text-white/80">
          {item.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1.5 h-[3px] w-[3px] shrink-0 rounded-full bg-emerald-300" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tags tech */}
      {item.tech && item.tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
