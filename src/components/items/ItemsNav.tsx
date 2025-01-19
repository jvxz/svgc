"use client";
import { useIsItemsEmpty, useItemsStore } from "@/lib/store/items";
import {
  setSelectedItem,
  useSelectedItemsStore,
} from "@/lib/store/selected-items";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "../ui/button";

function ItemsNav() {
  const { selectedItems } = useSelectedItemsStore();
  const { items } = useItemsStore();
  const isEmpty = useIsItemsEmpty();
  const multipleSelected = selectedItems.length > 1;

  useEffect(() => {
    if (items.length === 0 || items[0] === undefined) return;
    if (selectedItems.length === 0) setSelectedItem(items[0]?.data);
  }, [isEmpty, items, selectedItems.length]);

  return (
    <div className="h-navbar flex items-center justify-between border-b border-border bg-background/70 p-4 backdrop-blur-lg">
      {isEmpty && <p className="text-2xl">No items found</p>}

      {!isEmpty && !multipleSelected && (
        <Link
          href={selectedItems[0]?.url ?? ""}
          target="_blank"
          className="flex items-center gap-2 text-2xl hover:underline"
        >
          {selectedItems[0]?.name ?? items[0]?.data.name}
          <ExternalLink size={20} />
        </Link>
      )}

      {!isEmpty && multipleSelected && (
        <p className="text-2xl">{selectedItems.length} items selected</p>
      )}

      <ItemsNavButtons />
    </div>
  );
}

function ItemsNavButtons() {
  const { selectedItems } = useSelectedItemsStore();
  const { items } = useItemsStore();
  const isEmpty = useIsItemsEmpty();
  const multipleSelected = selectedItems.length > 1;

  const handleNextItem = (dir: "next" | "prev") => {
    const currentIndex = items.findIndex(
      (item) => item.data.name === selectedItems[0]?.name,
    );

    const nextItem =
      dir === "next" ? items[currentIndex + 1] : items[currentIndex - 1];

    if (nextItem) setSelectedItem(nextItem.data);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        disabled={isEmpty || multipleSelected}
        variant="outline"
        size="icon"
        onClick={() => handleNextItem("prev")}
      >
        <ArrowLeft />
      </Button>
      <Button
        disabled={isEmpty || multipleSelected}
        variant="outline"
        size="icon"
        onClick={() => handleNextItem("next")}
      >
        <ArrowRight />
      </Button>
      <Button>Export</Button>
    </div>
  );
}

export { ItemsNav };
