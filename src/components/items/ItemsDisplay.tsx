"use client";
import { useSelectedItemsStore } from "@/lib/store/selected-items";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import { GridBackground } from "../GridBackground";

function ItemsDisplay() {
  const { selectedItems } = useSelectedItemsStore();
  const isMultipleSelected = selectedItems.length > 1;
  const imageUrl = selectedItems[0]?.files[0]
    ? getImageUrl(selectedItems[0]?.files[0])
    : "";

  return (
    <div className="grid h-1/3 place-items-center border-b border-border">
      <GridBackground>
        {isMultipleSelected ? (
          <div>Multiple selected</div>
        ) : (
          <Image
            src={imageUrl}
            alt={selectedItems[0]?.name ?? ""}
            width={175}
            height={175}
          />
        )}
      </GridBackground>
    </div>
  );
}

export { ItemsDisplay };
