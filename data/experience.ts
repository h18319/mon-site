import type { ExperienceItem } from "@/types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Ingénieur logiciel",
    org: "4SPEL",
    location: "Violaines / Remote",
    start: "Juil. 2024",
    end: "Nov. 2025",
    summary:
      "Développement et mise en ligne de produits SaaS (4spel.fr, Guild, Transpresto) avec un focus UX, performance et cloud AWS.",
    bullets: [
      "Création de 3 produits : site vitrine 4spel.fr, Guild (CRM gamifié) et Transpresto (SaaS finance transport).",
      "Front-end en Next.js, TypeScript & Tailwind avec UI animées, accessibilité et SEO.",
      "Back-end sur AWS : API Gateway, Lambda (Node.js), Cognito, DynamoDB, OpenSearch, S3, EC2, SES.",
      "Mise en place de pipelines CI/CD GitHub Actions : lint, tests, build et déploiement.",
      "Organisation du travail en mode Agile : backlog produit, sprints, revues régulières.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "AWS",
      "DynamoDB",
      "OpenSearch",
      "Stripe",
      "Docker",
    ],
  },
  {
    title: "Développeuse Full Stack",
    org: "APRESTA",
    location: "Sainghin-en-Weppes",
    start: "Mai 2023",
    end: "Juin 2024",
    summary:
      "Développement sur mesure d’outils web et mobile dans la restauration et l’emploi.",
    bullets: [
      "Développement d’un site de commande de repas sur mesure en PHP et JavaScript.",
      "Développement de l’application mobile Workeez Connect en Flutter.",
      "Conception et développement d’une API sur mesure en PHP pour l’app Workeez.",
    ],
    tech: ["PHP", "JavaScript", "Node.js"],
  },
  {
    title: "Diplôme d’ingénieur en Informatique",
    org: "HEI JUNIA",
    location: "Lille",
    start: "2020",
    end: "2023",
    summary:
      "Formation d’ingénieur avec spécialisation en informatique et projets orientés Java et architecture applicative.",
    bullets: [
      "Projets académiques réalisés principalement en Java (programmation orientée objet).",
      "Travaux autour de l’architecture applicative et de la conception logicielle.",
    ],
  },
  {
    title: "CPGE – Spécialité PCSI",
    org: "La Salle Lille",
    location: "Lille",
    start: "2018",
    end: "2020",
    summary:
      "Classe préparatoire scientifique (physique, chimie et sciences de l’ingénieur).",
  },
];
