"use client";
import { useItemsStore } from "@/lib/store/items";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import { GridBackground } from "../GridBackground";
import { ItemsNavbar } from "./ItemsNavbar";
import { NoItemsState } from "./NoItemsState";

function ItemsDisplay() {
  const { selectedItemIndex, items } = useItemsStore();

  return (
    <div className="flex h-full flex-1 flex-col border-r border-border">
      <ItemsNavbar />
      <GridBackground>
        {items.length > 0 && items[selectedItemIndex] ? (
          <Image
            src={getImageUrl(items[selectedItemIndex]?.files[0] ?? "")}
            alt={items[selectedItemIndex]?.name ?? ""}
            width={256}
            height={256}
            className="size-42 z-10 text-foreground"
          />
        ) : (
          <NoItemsState />
        )}
      </GridBackground>
    </div>
  );
}

export { ItemsDisplay };
