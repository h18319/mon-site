import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/5">
      <Container className="py-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-white/50">
          © {year} Imane. Tous droits réservés.
        </div>
        <div className="flex items-center gap-3 text-xs">
          <a className="text-white/50 hover:text-white transition" href="#projects">
            Projets
          </a>
          <a className="text-white/50 hover:text-white transition" href="#stack">
            Stack
          </a>
          <a className="text-white/50 hover:text-white transition" href="#experience">
            Parcours
          </a>
          <a className="text-white/50 hover:text-white transition" href="#contact">
            Contact
          </a>
        </div>
      </Container>
    </footer>
  );
}
