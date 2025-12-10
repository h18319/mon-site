import { cn } from "@/lib/utils";

export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] leading-none",
        "border border-white/10 bg-white/5 text-white/80",
        className
      )}
    >
      {children}
    </span>
  );
}
