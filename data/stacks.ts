import type { StackItem } from "@/types";

export const STACKS: StackItem[] = [
  // FRONTEND
  { name: "TypeScript", category: "Frontend", icon: "/icons/typescript.svg", highlight: true },
  { name: "React", category: "Frontend", icon: "/icons/react.svg", highlight: true },
  { name: "Next.js", category: "Frontend", icon: "/icons/nextjs.svg" },
  { name: "Tailwind CSS", category: "Frontend", icon: "/icons/tailwindcss.svg" },
  { name: "Framer Motion", category: "Frontend", icon: "/icons/framer.svg" },
  { name: "HTML5", category: "Frontend", icon: "/icons/html5.svg" },
  { name: "CSS3", category: "Frontend", icon: "/icons/css3.svg" },

  // BACKEND
  { name: "Node.js", category: "Backend", icon: "/icons/nodejs.svg", highlight: true },
  { name: "Express", category: "Backend", icon: "/icons/express.svg" },
  { name: "AWS Lambda", category: "Backend", icon: "/icons/aws-lambda.svg" },
  { name: "PostgreSQL", category: "Backend", icon: "/icons/postgresql.svg" },
  { name: "MySQL", category: "Backend", icon: "/icons/mysql.svg" },

  // DEVOPS
  { name: "AWS", category: "DevOps", icon: "/icons/aws.svg", highlight: true },
  { name: "Docker", category: "DevOps", icon: "/icons/docker.svg" },
  { name: "GitHub Actions", category: "DevOps", icon: "/icons/github-actions.svg" },
  { name: "CI/CD", category: "DevOps", icon: "/icons/cicd.svg" },

  // OTHERS
  { name: "Git", category: "Others", icon: "/icons/git.svg" },
  { name: "GitHub", category: "Others", icon: "/icons/github.svg" },
  { name: "Linux", category: "Others", icon: "/icons/linux.svg", highlight: true },
  { name: "Figma", category: "Others", icon: "/icons/figma.svg" },
  { name: "Postman", category: "Others", icon: "/icons/postman.svg" },
];
