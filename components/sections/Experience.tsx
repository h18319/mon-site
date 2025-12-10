import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Experience() {
  return (
    <section className="mt-16">
      <Container>
        <SectionTitle
          id="experience"
          eyebrow="Parcours"
          title="Expériences & formation"
          subtitle="Une timeline claire, orientée impact et compétences concrètes."
        />

        {/* On branchera la vraie timeline avec data ensuite */}
        <div className="card p-6">
          <div className="text-sm font-medium">4SPEL — Développement produits</div>
          <div className="mt-1 text-xs text-muted">2023 → aujourd’hui</div>
          <ul className="mt-3 grid gap-1 text-xs text-white/70">
            <li>• Conception de dashboards métier</li>
            <li>• Architectures serverless AWS</li>
            <li>• UI modernes et maintenables</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
