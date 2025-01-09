"use client";
import { Input } from "@/components/ui/input";

export function SidebarSearch() {
  return (
    <div className="flex-1 space-y-2">
      <div className="relative">
        <Input
          className="pe-11"
          placeholder="Search categories..."
          type="search"
        />
      </div>
    </div>
  );
}
