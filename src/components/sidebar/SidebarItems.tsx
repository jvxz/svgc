"use client";
import { useInputStore } from "@/lib/store/input";
import { useItemsStore } from "@/lib/store/items";
import { getImageUrl } from "@/lib/utils";
import autoAnimate from "@formkit/auto-animate";
import { Ellipsis } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function SidebarItems() {
  const parent = useRef(null);
  const { items, removeItem, setSelectedItemIndex } = useItemsStore();
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
          <ContextMenu key={item.name}>
            <ContextMenuTrigger className="flex items-center">
              <Button
                asChild
                className="flex w-full items-center justify-between rounded-r-none"
                variant="outline"
                onClick={() =>
                  setSelectedItemIndex(filteredItems.indexOf(item))
                }
              >
                <Link href={`/items`} className="flex items-center gap-2">
                  <Image
                    src={getImageUrl(item.files[0]!)}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="size-4"
                  />
                  {item.name}
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-l-none border-l-0 px-4"
                  >
                    <Ellipsis className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>View</DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      removeItem(item);
                    }}
                    className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>View</ContextMenuItem>
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
        ))}
      </div>
    </div>
  );
}

export { SidebarItems };
