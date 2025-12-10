import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Stack() {
  return (
    <section className="mt-16">
      <Container>
        <SectionTitle
          id="stack"
          eyebrow="Toolbox"
          title="Stack & outils"
          subtitle="Un set technique moderne orienté DX, design system léger et déploiements fiables."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card p-5">
            <div className="text-sm font-medium">Frontend</div>
            <div className="mt-2 text-xs text-muted">
              Next.js, React, TypeScript, Tailwind, Framer Motion
            </div>
          </div>
          <div className="card p-5">
            <div className="text-sm font-medium">Cloud</div>
            <div className="mt-2 text-xs text-muted">
              AWS serverless (Lambda, API Gateway, DynamoDB…)
            </div>
          </div>
          <div className="card p-5">
            <div className="text-sm font-medium">Tooling</div>
            <div className="mt-2 text-xs text-muted">
              Docker, GitHub, CI/CD
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
