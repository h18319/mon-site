import { Container } from "./Container";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/5">
      <Container className="py-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-white/50">
          © {year} Imane. Tous droits réservés.
        </div>
        <div className="flex items-center gap-3 text-xs">
          <Link className="text-white/50 hover:text-white transition" href="/#projects">
            Projets
          </Link>
          <Link className="text-white/50 hover:text-white transition" href="/#stack">
            Stack
          </Link>
          <Link className="text-white/50 hover:text-white transition" href="/#experience">
            Parcours
          </Link>
          <Link className="text-white/50 hover:text-white transition" href="/#contact">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
