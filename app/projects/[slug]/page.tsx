import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { PROJECTS } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="pt-28 pb-16">
      {/* Back link */}
      <div className="mb-6 text-xs text-white/60">
        <Link href="/" className="hover:text-white">
          ← Retour à l’accueil
        </Link>
      </div>

      {/* HERO projet */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        {/* gauche : visuel */}
        <div className="card overflow-hidden border border-white/10">
          <div className="relative aspect-video">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 700px, 100vw"
            />
          </div>
        </div>

        {/* droite : infos rapides */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.category && <Badge>{project.category}</Badge>}
            {project.year && <Badge>{project.year}</Badge>}
            {project.featured && <Badge>Featured</Badge>}
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold text-white">
            {project.title}
          </h1>
          {project.tagline && (
            <p className="text-sm text-white/70">{project.tagline}</p>
          )}

          {project.links &&
            (() => {
              // on enlève les "Case Study"
              const visibleLinks = project.links.filter(
                (link) => link.label !== "Case Study"
              );

              if (visibleLinks.length === 0) return null;

              return (
                <div className="flex flex-wrap gap-2 pt-2">
                  {visibleLinks.map((link) => (
                    <Link
                      key={link.label + link.href}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="btn-base text-xs"
                    >
                      {link.label === "Live"
                        ? "Voir le site"
                        : link.label === "GitHub"
                        ? "Voir le code"
                        : link.label}
                      <span aria-hidden>↗</span>
                    </Link>
                  ))}
                </div>
              );
            })()}

          {(project.role || project.impact) && (
            <div className="card p-4 text-xs text-white/75">
              {project.role && project.role.length > 0 && (
                <>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.18em] text-white/40">
                    Rôle
                  </div>
                  <ul className="mb-3 space-y-1">
                    {project.role.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </>
              )}
              {project.impact && project.impact.length > 0 && (
                <>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.18em] text-white/40">
                    Impact
                  </div>
                  <ul className="space-y-1">
                    {project.impact.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* À propos + Tech stack */}
      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">À propos</h2>
          {project.context && (
            <p className="text-sm text-white/75">{project.context}</p>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Tech stack</h2>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
