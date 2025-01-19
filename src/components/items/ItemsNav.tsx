"use client";
import { useIsItemsEmpty } from "@/lib/store/items";
import { useSelectedItemsStore } from "@/lib/store/selected-items";

function ItemsNav() {
  const { selectedItems } = useSelectedItemsStore();
  const isEmpty = useIsItemsEmpty();

  const multipleSelected = selectedItems.length > 1;

  return (
    <div className="h-navbar flex items-center justify-between border-b border-border bg-background/70 p-4 backdrop-blur-lg">
      {isEmpty && (
        <p className="text-2xl text-muted-foreground">No items found</p>
      )}

      {!isEmpty && (
        <p className="text-2xl text-muted-foreground">
          {multipleSelected
            ? `${selectedItems.length} items selected`
            : `${selectedItems[0]?.name}`}
        </p>
      )}
    </div>
  );
}

export { ItemsNav };
