import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:shadow-xl transition-shadow">
        MB
      </div>
      <span className="font-bold text-lg text-foreground hidden sm:block">
        مهدی برزگر
      </span>
    </Link>
  );
}
