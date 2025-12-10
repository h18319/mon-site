import type { StackItem } from "@/types";

export const STACKS: StackItem[] = [
  {
    name: "Next.js",
    category: "Frontend",
    level: 4,
    highlight: true,
    description: "App Router, routing propre, perf & SEO.",
  },
  {
    name: "React",
    category: "Frontend",
    level: 4,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: 4,
    highlight: true,
    description: "Types solides, DX, code maintainable.",
  },
  {
    name: "Tailwind",
    category: "Frontend",
    level: 4,
    description: "Design system léger et cohérent.",
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    level: 3,
    highlight: true,
    description: "Micro-interactions, transitions, reveal au scroll.",
  },
  {
    name: "AWS",
    category: "Cloud",
    level: 3,
    description: "Lambda, API Gateway, Cognito, DynamoDB, S3.",
  },
  {
    name: "Docker",
    category: "Tooling",
    level: 2,
  },
];
