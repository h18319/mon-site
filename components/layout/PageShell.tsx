import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col bg-grid bg-halos min-h-screen">
      <Navbar />
      <main className="pt-24 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
