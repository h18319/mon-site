import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "transpresto",
    title: "Transpresto",
    tagline: "Dashboard de rentabilité pour transporteurs.",
    category: "Dashboard",
    featured: true,
    cover: {
      src: "/projects/transpresto/dashboard.png",
      alt: "Aperçu Transpresto",
    },
    tech: ["Next.js", "React", "TypeScript", "Bootstrap", "AWS", "DynamoDB", "Lambda", "Node.js", "API Gateway"],
    links: [
      { label: "Case Study", href: "/" },
      { label: "GitHub", href: "/#projects" },
    ],
    highlights: [
      { label: "Focus", value: "KPIs transport" },
      { label: "Stack", value: "Full serverless" },
    ],
    context:
      "Outil pensé pour aider les petits transporteurs à piloter leur rentabilité sans dépendre d’un cabinet comptable.",
    role: [
      "Conception produit & UX",
      "Front Next.js App Router",
      "Backend AWS serverless",
    ],
    impact: [
      "Centralisation des indicateurs mensuels",
      "Base solide pour import CSV et analyses avancées",
    ],
    year: 2025,
  },
  {
    slug: "guild",
    title: "Guild",
    tagline: "CRM gamifié avec système de points et abonnements.",
    category: "SaaS",
    featured: true,
    cover: {
      src: "/projects/guild/cover.png",
      alt: "Aperçu Guild CRM",
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "AWS", "Stripe", "DynamoDB", "Lambda", "Node.js", "API Gateway", "OpenSearch"],
    links: [
      { label: "Case Study", href: "/#projects" },
    ],
    year: 2025,
  },
  {
    slug: "vlille-app",
    title: "V’Lille Explorer",
    tagline: "Carte et stats des stations en open data.",
    category: "Open Data",
    cover: {
      src: "/projects/vlille/cover.png",
      alt: "Aperçu V’Lille",
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    links: [
      { label: "GitHub", href: "https://github.com/h18319/vlille-app" },
      { label: "Live", href: "https://vlille.hornain.dev/" },
    ],
    year: 2025,
  },
];
