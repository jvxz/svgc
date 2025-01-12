"use client";
import { Input } from "@/components/ui/input";
import { useInputStore } from "@/lib/store/input";
import { useItemsStore } from "@/lib/store/items";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";

export function SidebarSearch() {
  const { itemInput, setItemInput } = useInputStore();
  const { clearItems } = useItemsStore();
  return (
    <div className="flex gap-2 border-b border-border p-4">
      <Input
        value={itemInput}
        onChange={(e) => setItemInput(e.target.value)}
        className="pe-11"
        placeholder="Search items..."
        type="search"
      />
      <Button
        onClick={clearItems}
        size="icon"
        variant="destructive"
        className="aspect-square"
      >
        <Trash size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
