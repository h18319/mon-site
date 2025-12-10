import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Projects />
      <Stack />
      <Experience />
      <Contact />
    </PageShell>
  );
}
