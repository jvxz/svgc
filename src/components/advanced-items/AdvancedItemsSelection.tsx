"use client";
import { useItemsStore } from "@/lib/store/items";

function AdvancedItemsSelection() {
  const { items, selectedItemIndex } = useItemsStore();

  const selectedItem = items[selectedItemIndex];

  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <h2 className="text-3xl">{selectedItem?.name}</h2>
    </div>
  );
}

export { AdvancedItemsSelection };
