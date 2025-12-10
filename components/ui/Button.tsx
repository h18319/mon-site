"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "ghost" | "accent";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  className,
  variant = "ghost",
  onClick,
}: Props) {
  const base = cn("btn-base", variant === "accent" && "btn-accent", className);

  const Comp = (
    <motion.span
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={base}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {Comp}
      </Link>
    );
  }

  return Comp;
}
