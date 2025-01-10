"use client";
import { useItemsStore } from "@/lib/store/items";
import { useState } from "react";
import { GridBackground } from "../GridBackground";
import { ItemsDropdown } from "./ItemsDropdown";

function ItemsDisplay() {
  const { items } = useItemsStore();
  const [selectedItem, setSelectedItem] = useState(items[0]?.title);

  return (
    <div className="relative grid size-1/2 h-full place-items-center border-r border-border">
      <GridBackground>
        {items.length > 0 ? (
          <>
            <ItemsDropdown setSelectedItem={setSelectedItem} />
            <p>{selectedItem}</p>
          </>
        ) : (
          <h1 className="motion-preset-focus text-2xl font-bold shadow">
            No items selected
          </h1>
        )}
      </GridBackground>
    </div>
  );
}

export { ItemsDisplay };
