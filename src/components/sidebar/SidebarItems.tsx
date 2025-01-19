"use client";
import { type Item } from "@/actions/get-svgs";
import { removeItem, useItemsStore } from "@/lib/store/items";
import { setSelectedItem } from "@/lib/store/selected-items";
import { getImageUrl } from "@/lib/utils";
import autoAnimate from "@formkit/auto-animate";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { ScrollArea } from "../ui/scroll-area";

function SidebarItems() {
  const { items } = useItemsStore();
  const parent = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    parent.current &&
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      autoAnimate(parent.current, {
        duration: 125,
      });
  }, []);

  return (
    <ScrollArea className="motion-preset-fade-sm h-full">
      <div className="flex flex-1 flex-col gap-2 p-4" ref={parent}>
        {items.map((item) => (
          <SidebarItem key={item.data.name} item={item.data} />
        ))}
      </div>
    </ScrollArea>
  );
}

function SidebarItem({ item }: { item: Item }) {
  const imageUrl = item.files[0] ? getImageUrl(item.files[0]) : "";

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex items-center">
        <Button
          asChild
          className="flex w-full items-center justify-start rounded-r-none from-transparent from-20% to-muted-foreground/5 dark:bg-gradient-to-l"
          variant="outline"
          onClick={() => setSelectedItem(item)}
        >
          <Link href={`/items`} className="flex items-center gap-2">
            <Image
              src={imageUrl}
              alt={item.name + " logo"}
              width={20}
              height={20}
              className="size-4"
            />
            <p className="truncate">{item.name}</p>
          </Link>
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="rounded-l-none border-l-0 px-4"
          onClick={() => removeItem(item)}
        >
          <Trash className="size-4" />
        </Button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export { SidebarItems };
