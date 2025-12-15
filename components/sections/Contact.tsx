"use client";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { CONTACTS } from "@/data/contact";

export function Contact() {
  return (
    <section className="mt-20 pb-10">
      <Container>
        <SectionTitle
          id="contact"
          eyebrow="Discutons"
          title="Contact"
          subtitle="Disponible pour CDI, missions freelance ou collaborations produit."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="card p-6">
            <div className="text-sm font-medium">Me joindre rapidement</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {CONTACTS.map((c) => (
                <Button key={c.label} href={c.href} variant={c.label === "LinkedIn" ? "accent" : "ghost"}>
                  {c.label}
                </Button>
              ))}
            </div>
            <div className="mt-3 text-xs text-muted">
              Réponse rapide via WhatsApp. Contact pro via LinkedIn.
            </div>
          </div>

          <div className="card p-6">
            <div className="text-sm font-medium">Ce que je recherche</div>
            <ul className="mt-3 grid gap-1 text-xs text-white/70">
              <li>• Produits avec vision long terme et vraie culture UX</li>
              <li>• Contextes où je peux monter en compétence sur des stacks modernes</li>
              <li>• Équipes bienveillantes et exigeantes</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
