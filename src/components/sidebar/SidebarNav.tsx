"use client";
import { Input } from "@/components/ui/input";
import { NAVBARS_HEIGHT } from "@/lib/config";
import { useInputStore } from "@/lib/store/input";
import { clearItems, useIsItemsEmpty } from "@/lib/store/items";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";

export function SidebarNav() {
  const { itemInput, setItemInput } = useInputStore();
  const itemsEmpty = useIsItemsEmpty();
  return (
    <div
      className={`flex items-center gap-2 border-b border-border p-4 ${NAVBARS_HEIGHT}`}
    >
      <Input
        value={itemInput}
        onChange={(e) => setItemInput(e.target.value)}
        className="pe-11"
        placeholder="Search items..."
        type="search"
      />
      <Button
        size="icon"
        variant="destructive"
        className="aspect-square"
        aria-label="Clear items"
        onClick={() => clearItems()}
        disabled={itemsEmpty}
      >
        <Trash size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
