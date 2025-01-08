import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function NavbarSearch() {
  return (
    <div className="space-y-2">
      <div className="relative">
        <Input
          className="peer pe-9 ps-9"
          placeholder="Search logos"
          type="search"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Search size={16} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
