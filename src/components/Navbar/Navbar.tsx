import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import ItemsButton from "./ItemsButton";

function Navbar() {
  return (
    <nav className="grid h-16 grid-cols-2 items-center border-b border-border px-8">
      <Link
        href="/"
        className="w-fit font-mono text-2xl font-bold underline-offset-2 hover:underline"
      >
        svgc
      </Link>
      <div className="flex justify-end gap-2">
        <ItemsButton />
        <ThemeToggle />
      </div>
    </nav>
  );
}

export { Navbar };
