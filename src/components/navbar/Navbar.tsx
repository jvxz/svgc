import { Info } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";
import { Icon } from "../ui/logos";
import ItemsButton from "./ItemsButton";

function Navbar() {
  return (
    <nav className="grid min-h-16 grid-cols-2 items-center border-b border-border px-8">
      <Link
        href="/"
        className="w-fit font-mono text-2xl font-bold underline-offset-2 hover:underline"
      >
        svgc
      </Link>

      <div className="flex justify-end gap-2">
        <ItemsButton />
        <Button size="icon" variant="outline">
          <Link href="https://github.com/jvxz/svgc">
            <Icon.Github />
          </Link>
        </Button>
        <Button size="icon" variant="outline">
          <Link href="/info">
            <Info />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export { Navbar };
