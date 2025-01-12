"use client";
import { Input } from "@/components/ui/input";
import { NAVBARS_HEIGHT } from "@/lib/config";
import { useInputStore } from "@/lib/store/input";
import { useItemsStore } from "@/lib/store/items";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";

export function SidebarNav() {
  const { itemInput, setItemInput } = useInputStore();
  const { items, clearItems } = useItemsStore();

  return (
    <div
      className={`flex items-center gap-2 border-b border-border p-4 ${NAVBARS_HEIGHT}`}
    >
      <Input
        value={itemInput}
        onChange={(e) => setItemInput(e.target.value)}
        className="pe-11"
        placeholder="Search items..."
        disabled={items.length === 0}
        type="search"
      />
      <Button
        onClick={clearItems}
        disabled={items.length === 0}
        size="icon"
        variant="destructive"
        className="aspect-square"
        aria-label="Clear items"
      >
        <Trash size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
