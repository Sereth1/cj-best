import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "card";
}

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  const variantStyles = {
    default: "",
    muted: "bg-muted",
    card: "bg-card",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </section>
  );
}
