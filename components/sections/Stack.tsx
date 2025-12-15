"use client";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { STACKS } from "@/data/stacks";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, stagger, softSpring } from "@/lib/motion";

const CATEGORIES = [
  { key: "Frontend", label: "Frontend" },
  { key: "Backend", label: "Backend" },
  { key: "DevOps", label: "DevOps" },
  { key: "Others", label: "Autres" },
] as const;

export function Stack() {
  return (
    <section className="mt-20">
      <Container>
        <SectionTitle
          id="stack"
          eyebrow="Toolbox"
          title="Stack & outils"
          subtitle="Les technologies avec lesquelles je suis la plus à l’aise pour construire des interfaces modernes, des APIs solides et des déploiements fiables."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20% 0px" }}
          className="stack-grid"
        >
          {CATEGORIES.map((cat) => {
            const items = STACKS.filter((s) => s.category === cat.key);
            if (!items.length) return null;

            return (
              <motion.div
                key={cat.key}
                variants={fadeInUp}
                transition={softSpring}
                className="card p-4 sm:p-5"
              >
                <div className="stack-column-title">{cat.label}</div>

                <div className="stack-pills">
                  {items.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -2, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.16 }}
                      className={
                        "stack-pill" +
                        (item.highlight ? " stack-pill-highlight" : "")
                      }
                    >
                      {item.icon && (
                        <span className="stack-pill-icon">
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={18}
                            height={18}
                            className="object-contain"
                          />
                        </span>
                      )}
                      <span>{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
