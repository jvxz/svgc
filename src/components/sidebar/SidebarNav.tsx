"use client";
import { Input } from "@/components/ui/input";
import { useInputStore } from "@/lib/store/input";
import { clearItems, useIsItemsEmpty, useItemsStore } from "@/lib/store/items";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";

export function SidebarNav() {
  const { itemInput, setItemInput } = useInputStore();
  const { items } = useItemsStore();

  return (
    <div className="h-navbar flex items-center gap-2 border-b border-border p-4">
      <Input
        value={itemInput}
        onChange={(e) => setItemInput(e.target.value)}
        className="pe-11"
        placeholder={
          useIsItemsEmpty()
            ? "Search items..."
            : `Search ${items.length} items...`
        }
        type="search"
        disabled={useIsItemsEmpty()}
      />
      <Button
        size="icon"
        variant="destructive"
        className="aspect-square"
        aria-label="Clear items"
        onClick={() => clearItems()}
        disabled={useIsItemsEmpty()}
      >
        <Trash size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
