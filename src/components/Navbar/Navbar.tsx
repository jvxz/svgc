import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { NavbarSearch } from "./NavbarSearch";

function Navbar() {
  return (
    <nav className="grid h-16 grid-cols-3 items-center border-b border-border px-8">
      <Link
        href="/"
        className="w-fit font-mono text-2xl font-bold underline-offset-2 hover:underline"
      >
        svgc
      </Link>
      <NavbarSearch />
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export { Navbar };
