export type TechTag =
  | "Next.js"
  | "React"
  | "TypeScript"
  | "Tailwind"
  | "Bootstrap"
  | "Framer Motion"
  | "Node.js"
  | "AWS"
  | "DynamoDB"
  | "OpenSearch"
  | "Stripe"
  | "PostgreSQL"
  | "Prisma"
  | "Docker"
  | "Lambda"
  | "API Gateway"
  | "PHP"
  | "JavaScript"
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

export type StackCategory = "Frontend" | "Backend" | "DevOps" | "Others";

export type StackItem = {
  name: string;
  category: StackCategory;
  icon?: string;     // chemin vers l’icône dans /public
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
