"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const NAV = [
  { label: "Projets", href: "/#projects" },
  { label: "Stack", href: "/#stack" },
  { label: "Parcours", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      <div className="container-pad">
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "flex items-center justify-between gap-3",
            "rounded-2xl px-3 py-2",
            "border border-white/8",
            "backdrop-blur-xl",
            scrolled ? "bg-white/6" : "bg-white/3"
          )}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 px-2">
            <span className="h-2 w-2 rounded-full bg-white/60" />
            <span className="text-sm font-semibold tracking-wide">
              Imane
            </span>
            <span className="text-xs text-white/40 hidden sm:inline">
              Portfolio
            </span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-xs text-white/70 hover:text-white
                           hover:bg-white/5 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <Button href="/#projects" className="hidden sm:inline-flex">
              Explorer
            </Button>
            <Button variant="accent" href="/#contact">
              Me contacter
            </Button>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}
