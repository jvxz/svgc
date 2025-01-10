"use client";
import { Input } from "@/components/ui/input";
import { useInputStore } from "@/lib/store/input";

export function SidebarSearch() {
  const { itemInput, setItemInput } = useInputStore();

  return (
    <div className="flex-1 space-y-2">
      <div className="relative">
        <Input
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
          className="pe-11"
          placeholder="Search items..."
          type="search"
        />
      </div>
    </div>
  );
}
