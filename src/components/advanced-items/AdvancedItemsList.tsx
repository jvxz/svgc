"use client";
import { useInputStore } from "@/lib/store/input";
import { useItemsStore } from "@/lib/store/items";
import { getImageUrl } from "@/lib/utils";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

function AdvancedItemsList() {
  const {
    items,
    setSelectedItemIndex,
    selectedItemIndex,
    removeItem,
    clearItems,
  } = useItemsStore();
  const { itemInput } = useInputStore();

  function handleDelete() {
    if (!items[selectedItemIndex]) return;
    const index = items.findIndex(
      (e) => e.name === items[selectedItemIndex]?.name,
    );
    removeItem(items[selectedItemIndex]);
    if (index >= items.length - 1) setSelectedItemIndex(0);
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(itemInput.toLowerCase()),
  );

  return (
    <div className="flex h-full w-1/3 flex-col border-r border-border">
      <div className="border-b border-border p-4">
        <Input placeholder="Search" />
      </div>
      <ScrollArea className="h-full">
        <div className="flex h-full flex-col gap-2 p-4">
          {items.map((item) => {
            return (
              <ContextMenu key={item.name}>
                <ContextMenuTrigger className="flex items-center">
                  <Button
                    asChild
                    className="flex w-full items-center justify-start rounded-r-none from-transparent from-20% to-muted-foreground/5 dark:bg-gradient-to-l"
                    variant="outline"
                    onClick={() =>
                      setSelectedItemIndex(filteredItems.indexOf(item))
                    }
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={getImageUrl(item.files[0]!)}
                        alt={item.name}
                        width={20}
                        height={20}
                        className="size-4"
                      />
                      <p className="truncate">{item.name}</p>
                    </div>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-l-none border-l-0 px-4"
                    onClick={() => {
                      removeItem(item);
                    }}
                  >
                    <Trash className="size-4" />
                  </Button>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem
                    asChild
                    onClick={() => {
                      setSelectedItemIndex(filteredItems.indexOf(item));
                    }}
                  >
                    <Link href={`/items`}>View</Link>
                  </ContextMenuItem>
                  <ContextMenuItem
                    onClick={() => {
                      removeItem(item);
                    }}
                    className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                  >
                    Delete
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}

export { AdvancedItemsList };
