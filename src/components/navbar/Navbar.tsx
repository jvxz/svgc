import { Globe, Info, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";
import { Icon } from "../ui/logos";
import { BreadcrumbsNav } from "./BreadcrumbsNav";

function Navbar() {
  return (
    <nav className="border-b border-border">
      <div className="container mx-auto grid min-h-16 grid-cols-3 items-center px-8">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="w-fit -translate-y-0.5 font-mono text-2xl font-bold underline-offset-2 hover:underline"
          >
            svgc
          </Link>
          <Button asChild className="py-0 pe-0" variant="link">
            <Link href="/">
              <Globe className="opacity-60" aria-hidden="true" />
              Browse
            </Link>
          </Button>
          <Button asChild className="py-0 pe-0" variant="link">
            <Link href="/items">
              <ShoppingBag className="opacity-60" aria-hidden="true" />
              Items
            </Link>
          </Button>
          <Button asChild className="py-0 pe-0" variant="link">
            <Link href="/about">
              <Info className="opacity-60" aria-hidden="true" />
              About
            </Link>
          </Button>
        </div>
        <BreadcrumbsNav />
        <div className="flex justify-end gap-2">
          <Button asChild variant="link">
            <Link href="https://github.com/jvxz/svgc" target="_blank">
              <Icon.Github />
              Source code
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
