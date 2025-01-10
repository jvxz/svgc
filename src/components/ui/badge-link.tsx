import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import Link from "next/link";

function BadgeLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: ClassValue;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        badgeVariants({ variant: "outline" }),
        "hover:bg-muted",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export { BadgeLink };
