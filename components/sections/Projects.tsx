// src/components/sections/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { stagger } from "@/lib/motion";

export function Projects() {
  return (
    <section className="mt-20">
      <Container>
        <SectionTitle
          id="projects"
          eyebrow="Sélection"
          title="Projets"
          subtitle="Une sélection de produits et expériences où j’ai travaillé la structure, l’UX et la qualité d’implémentation."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20% 0px" }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
