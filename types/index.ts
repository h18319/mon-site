export type TechTag =
  | "Next.js"
  | "React"
  | "TypeScript"
  | "Tailwind"
  | "Framer Motion"
  | "Node.js"
  | "AWS"
  | "DynamoDB"
  | "OpenSearch"
  | "Stripe"
  | "PostgreSQL"
  | "Prisma"
  | "Docker"
  | "n8n";

export type ProjectCategory =
  | "SaaS"
  | "Dashboard"
  | "Web App"
  | "Experiment"
  | "Client"
  | "Open Data";

export type ProjectLink = {
  label: "Live" | "GitHub" | "Case Study" | "Demo";
  href: string;
};

export type ProjectHighlight = {
  label: string;         // ex: "Perf"
  value: string;         // ex: "+32 Lighthouse"
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  featured?: boolean;

  cover: {
    src: string;
    alt: string;
  };

  tech: TechTag[];

  links?: ProjectLink[];

  highlights?: ProjectHighlight[];

  context?: string;      // 2-4 lignes
  problem?: string;      // optionnel
  solution?: string;     // optionnel
  impact?: string[];     // bullets
  role?: string[];       // bullets

  year?: number;
};

export type StackItem = {
  name: TechTag | string;
  level?: 1 | 2 | 3 | 4 | 5; // auto-évaluation légère
  category: "Frontend" | "Backend" | "Cloud" | "Tooling" | "Data" | "Design";
  description?: string;
  highlight?: boolean;
};

export type ExperienceItem = {
  title: string;         // ex: "Développeuse Full-Stack"
  org: string;           // ex: "4SPEL"
  location?: string;
  start: string;         // "2023-01" ou "2023"
  end?: string;          // undefined => en cours
  summary: string;       // 1-2 lignes
  bullets?: string[];
  tech?: TechTag[];
};

export type ContactItem = {
  label: "LinkedIn" | "WhatsApp" | "Email" | "GitHub";
  href: string;
  handle?: string;       // texte affiché
};
