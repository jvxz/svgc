"use client";
import { Input } from "@/components/ui/input";
import { useInputStore } from "@/lib/store/input";

export function SidebarSearch() {
  const { categoryInput, setCategoryInput } = useInputStore();

  return (
    <div className="flex-1 space-y-2">
      <div className="relative">
        <Input
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
          className="pe-11"
          placeholder="Search categories..."
          type="search"
        />
      </div>
    </div>
  );
}
