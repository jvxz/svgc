"use client";
import { useIsItemsEmpty } from "@/lib/store/items";

function ItemsNav() {
  const isEmpty = useIsItemsEmpty();

  return (
    <div className="h-navbar flex items-center justify-between border-b border-border bg-background/70 p-4 backdrop-blur-lg">
      {isEmpty && (
        <p className="text-2xl text-muted-foreground">No items found</p>
      )}
      {!isEmpty && <p className="text-2xl text-muted-foreground">Items</p>}
    </div>
  );
}

export { ItemsNav };
