"use client";
import { useItemsStore } from "@/lib/store/items";
import { getImageUrl } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { GridBackground } from "../GridBackground";
import { ItemsDropdown } from "./ItemsDropdown";
import { NoItemsState } from "./NoItemsState";

function ItemsDisplay() {
  const { selectedItemIndex, items } = useItemsStore();

  return (
    <div className="flex size-1/2 h-full flex-col border-r border-border">
      <ItemsDropdown />

      <GridBackground>
        {items.length > 0 && items[selectedItemIndex] ? (
          <motion.div>
            <Image
              src={getImageUrl(items[selectedItemIndex].files[0] ?? "")}
              alt={items[selectedItemIndex].name ?? ""}
              width={256}
              height={256}
              className="size-42"
            />
          </motion.div>
        ) : (
          <NoItemsState />
        )}
      </GridBackground>
    </div>
  );
}

export { ItemsDisplay };
