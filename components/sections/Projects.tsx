import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Projects() {
  return (
    <section className="mt-16">
      <Container>
        <SectionTitle
          id="projects"
          eyebrow="Sélection"
          title="Projets"
          subtitle="Une sélection de produits et expériences où j’ai travaillé la structure, l’UX et la qualité d’implémentation."
        />

        {/* On branchera les ProjectCard + data juste après */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card p-5">
            <div className="text-sm font-medium">Projet #1</div>
            <div className="mt-1 text-xs text-muted">Bientôt</div>
          </div>
          <div className="card p-5">
            <div className="text-sm font-medium">Projet #2</div>
            <div className="mt-1 text-xs text-muted">Bientôt</div>
          </div>
          <div className="card p-5">
            <div className="text-sm font-medium">Projet #3</div>
            <div className="mt-1 text-xs text-muted">Bientôt</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
