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
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Bootstrap",
      "AWS",
      "DynamoDB",
      "Lambda",
      "API Gateway",
      "Node.js",
    ],
    links: [
      { label: "Case Study", href: "/projects/transpresto" },
      { label: "Live", href: "https://transpresto.com/" },
    ],
    highlights: [
      { label: "Focus", value: "KPIs transport" },
      { label: "Stack", value: "Full serverless AWS" },
    ],
    context:
      "Outil pensé pour aider les petits transporteurs à piloter leur rentabilité sans dépendre d’un cabinet comptable. Le produit se concentre sur la lecture des marges, des coûts et de la rentabilité par mois.",
    role: [
      "Conception produit & UX (structure du tableau de bord, indicateurs clés)",
      "Implémentation Front avec Next.js App Router",
      "Architecture backend serverless AWS (Lambda, API Gateway, DynamoDB)",
    ],
    impact: [
      "Centralisation des indicateurs mensuels dans une seule interface lisible",
      "Base solide pour l’import CSV, la consolidation des données et des analyses plus avancées",
      "Vision claire de la rentabilité transport / affrètement pour des dirigeants non techniques",
    ],
    year: 2025,
  },

  {
    slug: "guild",
    title: "Guild",
    tagline: "CRM gamifié avec système de points, grades et abonnements.",
    category: "SaaS",
    featured: true,
    cover: {
      src: "/projects/guild/cover.png",
      alt: "Aperçu Guild CRM",
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "AWS",
      "Stripe",
      "DynamoDB",
      "Lambda",
      "API Gateway",
      "Node.js",
      "OpenSearch",
    ],
    links: [
      { label: "Case Study", href: "/projects/guild" },
    ],
    highlights: [
      { label: "Positionnement", value: "CRM gamifié" },
      { label: "Monétisation", value: "Abonnements Stripe" },
    ],
    context:
      "Guild est un CRM pensé comme un jeu : les utilisateurs gagnent des points, des grades et des récompenses en fonction de leurs actions commerciales. L’objectif est de rendre le suivi des clients, devis et factures plus motivant et moins administratif.",
    role: [
      "Conception de la logique de gamification (points, niveaux, récompenses)",
      "Développement de l’interface Next.js (tableaux, fiches clients, fiches produits, devis, factures, vues de progression)",
      "Intégration des paiements et abonnements Stripe",
      "Conception de la partie data (DynamoDB / OpenSearch) pour les stats et la recherche",
    ],
    impact: [
      "Engagement utilisateur renforcé grâce à la gamification (système de shards, niveaux, etc.)",
      "Base CRM moderne qui peut évoluer vers un produit SaaS multi-tenant",
      "Architecture déjà pensée pour suivre l’activité et la performance commerciale",
    ],
    year: 2025,
  },

  {
    slug: "vlille-app",
    title: "V’Lille Explorer",
    tagline: "Carte et statistiques temps réel des stations V’Lille en open data.",
    category: "Open Data",
    cover: {
      src: "/projects/vlille/cover.png",
      alt: "Aperçu V’Lille Explorer",
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Node.js", "Docker"],
    links: [
      { label: "Case Study", href: "/projects/vlille-app" },
      { label: "GitHub", href: "https://github.com/h18319/vlille-app" },
      { label: "Live", href: "https://vlille.hornain.dev/" },
    ],
    highlights: [
      { label: "Focus", value: "Open data & UX" },
      { label: "UI", value: "Carte + stats animées" },
    ],
    context:
      "Application construite pour explorer les données open data du réseau V’Lille : visualiser les stations sur une carte, voir le nombre de vélos disponibles et obtenir quelques statistiques globales.",
    role: [
      "Mise en place de l’architecture Next.js côté front",
      "Intégration de l’API open data V’Lille et normalisation des données",
      "Design de la carte, des panneaux de stats et des animations (Framer Motion)",
    ],
    impact: [
      "Vue d’ensemble immédiate des stations disponibles autour de l’utilisateur",
      "Petite démo concrète d’utilisation d’open data dans une interface moderne",
      "Base réutilisable pour d’autres projets de mobilité / open data",
    ],
    year: 2025,
  },

  {
    slug: "portfolio",
    title: "Portfolio Imane Hornain",
    tagline: "Portfolio orienté produit pour présenter mes projets, mon stack et mon parcours.",
    category: "Web App",
    featured: true,
    cover: {
      src: "/projects/portfolio/cover.png",
      alt: "Aperçu du portfolio d’Imane",
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    links: [
      { label: "Case Study", href: "/projects/portfolio" },
      { label: "GitHub", href: "https://github.com/h18319/mon-site.git" },
      { label: "Live", href: "/" },
    ],
    highlights: [
      { label: "Focus", value: "DX & UX" },
      { label: "Design", value: "Hero animé + halos" },
    ],
    context:
      "Ce portfolio est pensé comme une démonstration de mon approche produit : structure claire, animations subtiles, fond dynamique et mise en avant de mes projets concrets.",
    role: [
      "Conception de l’architecture globale (sections, navigation, routing App Router)",
      "Design UI (hero, halos, stack visuelle, cards de projets, pages détaillées)",
      "Intégration Next.js + Tailwind + Framer Motion",
    ],
    impact: [
      "Support central pour présenter mon travail et mon profil à des recruteurs ou clients",
      "Base réutilisable pour de futurs case studies détaillés",
      "Mise en valeur de mon stack moderne (Next.js, AWS, etc.) dans un contexte réel",
    ],
    year: 2025,
  },

  {
    slug: "4spel-site",
    title: "4SPEL — Site vitrine",
    tagline: "Site vitrine de l’agence 4SPEL : services web, projets et contact.",
    category: "Client",
    cover: {
      src: "/projects/4spel/cover.png",
      alt: "Aperçu du site 4SPEL",
    },
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"],
    links: [
      { label: "Case Study", href: "/projects/4spel-site" },
      { label: "Live", href: "https://4spel.fr/" },
    ],
    highlights: [
      { label: "Focus", value: "Site agence" },
      { label: "Positionnement", value: "Multi-services (web, design, com’)" },
    ],
    context:
      "Site vitrine pour 4SPEL, structure multi-services (création de sites, identité visuelle, communication) avec mise en avant des projets phares comme Transpresto et Guild.",
    role: [
      "Conception de la structure des pages (accueil, services, projets, contact)",
      "Intégration en Next.js / Tailwind du design 4SPEL",
      "Mise en place des sections de mise en avant des projets et CTA de contact",
    ],
    impact: [
      "Support commercial pour présenter clairement l’offre 4SPEL",
      "Mise en cohérence de la marque (charte, ton, imagerie) avec les produits SaaS",
      "Base pour connecter peut-être plus tard des formulaires ou des intégrations (calendrier, CRM, etc.)",
    ],
    year: 2025,
  },
];