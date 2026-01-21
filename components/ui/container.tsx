import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "small" | "large";
}

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  const sizeStyles = {
    small: "max-w-4xl",
    default: "max-w-6xl",
    large: "max-w-7xl",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        className
      )}
    >
      {children}
    </div>
  );
}
