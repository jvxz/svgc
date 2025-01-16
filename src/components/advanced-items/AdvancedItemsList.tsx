"use client";
import { useKeyhold } from "@/lib/hooks/use-keyhold";
import { useInputStore } from "@/lib/store/input";
import { useItemsStore } from "@/lib/store/items";
import { getImageUrl } from "@/lib/utils";
import { Ellipsis, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Toggle } from "../ui/toggle";

function AdvancedItemsList() {
  const [shiftHeld, setShiftHeld] = useState(false);
  const [multiSelect, setMultiSelect] = useState(true);
  const {
    items,
    setSelectedItemIndex,
    selectedItemIndex,
    removeItem,
    clearItems,
    selectedItemIndexes,
    setSelectedItemIndexes,
  } = useItemsStore();
  const { itemInput } = useInputStore();

  useKeyhold("Shift", (e) => {
    setShiftHeld(e);
  });

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

  const isPressed = (index: number) => {
    if (selectedItemIndexes !== null && multiSelect) {
      return selectedItemIndexes?.includes(index);
    }
    return selectedItemIndex === index;
  };

  useEffect(() => {
    if (multiSelect) return;
    setSelectedItemIndexes(null);
  }, [items, multiSelect, setSelectedItemIndexes]);

  return (
    <div className="flex h-full w-1/3 flex-col border-r border-border">
      <div className="flex h-16 items-center gap-2 border-b border-border p-4">
        <Input placeholder="Search" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="aspect-square shadow-none"
              aria-label="Open edit menu"
            >
              <Ellipsis size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setMultiSelect(!multiSelect)}>
              {multiSelect ? "Disable" : "Enable"} multi-select
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={clearItems}
            >
              Clear list
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ScrollArea className="h-full">
        <div className="flex h-full flex-col gap-2 p-4">
          {items.map((item) => {
            return (
              <ContextMenu key={item.name}>
                <ContextMenuTrigger className="flex items-center">
                  <Toggle
                    asChild
                    className="flex w-full cursor-pointer items-center justify-start rounded-r-none from-transparent from-20% to-muted-foreground/5 dark:bg-gradient-to-l"
                    variant="outline"
                    pressed={isPressed(filteredItems.indexOf(item))}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (shiftHeld && multiSelect) {
                        const start = Math.min(
                          selectedItemIndex,
                          filteredItems.indexOf(item),
                        );

                        const end = Math.max(
                          selectedItemIndex,
                          filteredItems.indexOf(item),
                        );

                        function getIndexes(start: number, end: number) {
                          const indexes = [];
                          for (let i = start; i <= end; i++) {
                            indexes.push(i);
                          }
                          return indexes;
                        }

                        setSelectedItemIndexes(getIndexes(start, end));
                      } else {
                        setSelectedItemIndexes(null);
                        setSelectedItemIndex(filteredItems.indexOf(item));
                      }
                    }}
                  >
                    <div className="flex select-none items-center gap-2">
                      <Image
                        src={getImageUrl(item.files[0]!)}
                        alt={item.name}
                        width={20}
                        height={20}
                        className="size-4"
                      />
                      <p className="truncate">{item.name}</p>
                    </div>
                  </Toggle>
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
                    onClick={handleDelete}
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
