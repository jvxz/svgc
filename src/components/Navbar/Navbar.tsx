import { ThemeToggle } from "../ThemeToggle";
import { Input } from "../ui/input";

function Navbar() {
  return (
    <nav className="grid h-16 grid-cols-3 items-center border-b border-border px-8">
      <p className="font-mono text-2xl font-bold">svgc</p>
      <Input placeholder="Search..." />
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export { Navbar };
