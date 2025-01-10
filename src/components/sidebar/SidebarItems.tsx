"use client";
import { useInputStore } from "@/lib/store/input";
import { useItemsStore } from "@/lib/store/items";
import { getImageUrl } from "@/lib/utils";
import autoAnimate from "@formkit/auto-animate";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

function SidebarItems() {
  const parent = useRef(null);
  const { items } = useItemsStore();
  const { itemInput } = useInputStore();

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(itemInput.toLowerCase()),
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    parent.current &&
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      autoAnimate(parent.current, {
        duration: 125,
      });
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-1 flex-col gap-2 p-4" ref={parent}>
        {filteredItems.map((item) => (
          <Button
            className="flex w-full items-center justify-between"
            variant="outline"
            key={item.name}
          >
            {item.name}
            <Image
              src={getImageUrl(item.files[0]!)}
              alt={item.name}
              width={20}
              height={20}
              className="size-4"
            />
          </Button>
        ))}
      </div>
    </div>
  );
}

export { SidebarItems };
