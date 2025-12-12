// src/components/cards/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Project } from "@/types";
import { fadeInUp, softSpring } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const router = useRouter();
  const techList = project.tech.slice(0, 3);
  const extraCount = project.tech.length - techList.length;

  const handleCardClick = () => {
    router.push(`/projects/${project.slug}`);
  };

  return (
    <motion.article
      variants={fadeInUp}
      transition={softSpring}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleCardClick}
      className={cn(
        "card group flex h-full cursor-pointer flex-col overflow-hidden",
        "border border-white/8"
      )}
    >
      {/* Cover */}
      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/40">
        <div className="relative aspect-video">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.04] group-hover:brightness-[1.05]"
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div className="pointer-events-n bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-80" />

        <div className="pointer-events-none absolute bottom-3 left-3 flex flex-wrap gap-2 text-[11px] font-medium">
          {project.category && (
            <span className="rounded-full bg-black/60 px-2 py-1 text-white/70 backdrop-blur">
              {project.category}
            </span>
          )}
          {project.year && (
            <span className="rounded-full bg-black/50 px-2 py-1 text-white/60 backdrop-blur">
              {project.year}
            </span>
          )}
          {project.featured && (
            <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-200">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Title + tagline */}
        <div>
          <h3 className="text-sm font-semibold text-white sm:text-base">
            {project.title}
          </h3>
          {project.tagline && (
            <p className="mt-1 text-[11px] text-white/60 sm:text-xs">
              {project.tagline}
            </p>
          )}
        </div>

        {/* Tech pills */}
        {project.tech?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {techList.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/70"
              >
                {tech}
              </span>
            ))}
            {extraCount > 0 && (
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/0 px-2 py-1 text-[10px] text-white/50">
                +{extraCount}
              </span>
            )}
          </div>
        )}

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 text-[11px] text-white/60">
            {project.highlights.map((h) => (
              <div
                key={h.label}
                className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1"
              >
                <span className="h-1 w-1 rounded-full bg-emerald-300" />
                <span className="uppercase tracking-[0.16em] text-[9px] text-white/50">
                  {h.label}
                </span>
                <span>{h.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Liens externes (Live / GitHub / Demo...) */}
        {project.links && project.links.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
            {project.links.map((link) => (
              <Link
                key={link.label + link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                onClick={(e) => e.stopPropagation()} // n'empêche pas l'ouverture externe
                className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/5 px-2 py-1 text-white/70 hover:border-emerald-400/60 hover:text-white"
              >
                <span>
                  {link.label === "Live"
                    ? "Site"
                    : link.label === "GitHub"
                    ? "GitHub"
                    : link.label}
                </span>
                <span aria-hidden>↗</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
