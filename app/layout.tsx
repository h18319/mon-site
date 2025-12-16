// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Imane Hornain",
  description: "Ingénieur logiciel - Next.js, TypeScript, Tailwind, AWS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <PageShell>{children}</PageShell>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
