"use client";
import { useItemsStore } from "@/lib/store/items";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import { GridBackground } from "../GridBackground";
import { NoItemsState } from "../items/NoItemsState";

function AdvancedItemsDisplay() {
  const { selectedItemIndex, items } = useItemsStore();

  return (
    <div className="flex h-full flex-1 flex-col border-r border-border">
      <GridBackground>
        {items.length > 0 && items[selectedItemIndex] ? (
          <Image
            src={getImageUrl(items[selectedItemIndex]?.files[0] ?? "")}
            alt={items[selectedItemIndex]?.name ?? ""}
            width={256}
            height={256}
            className="z-10 h-32 text-foreground"
          />
        ) : (
          <NoItemsState />
        )}
      </GridBackground>
    </div>
  );
}

export { AdvancedItemsDisplay };
