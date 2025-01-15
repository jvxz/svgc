"use client";
import { useItemsStore } from "@/lib/store/items";
import Link from "next/link";
import { Button } from "../ui/button";

function AdvancedItemsSelection() {
  const { items, selectedItemIndex, selectedItemIndexes } = useItemsStore();

  const selectedItem = items[selectedItemIndex];

  return (
    <div className="flex h-full w-2/3 gap-2">
      <div className="flex h-16 w-full items-center justify-between border-b border-border px-4">
        <Link
          href={selectedItem?.url ?? ""}
          className="text-3xl underline-offset-4 hover:underline"
          target="_blank"
        >
          {selectedItemIndexes ? (
            <p>{selectedItemIndexes.length} items selected</p>
          ) : (
            selectedItem?.name
          )}
        </Link>
        <Button variant="destructive" className="aspect-square">
          Delete
        </Button>
      </div>
    </div>
  );
}

export { AdvancedItemsSelection };
