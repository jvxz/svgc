"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useItemsStore } from "@/lib/store/items";
import { ArrowLeft, ArrowRight, Trash } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { Separator } from "../ui/separator";

function ItemsNavbar() {
  const {
    items,
    setSelectedItemIndex,
    selectedItemIndex,
    removeItem,
    clearItems,
  } = useItemsStore();

  function handleDelete() {
    if (!items[selectedItemIndex]) return;
    const index = items.findIndex(
      (e) => e.name === items[selectedItemIndex]?.name,
    );
    removeItem(items[selectedItemIndex]);
    if (index >= items.length - 1) setSelectedItemIndex(0);
  }

  return (
    <div className="flex min-h-16 items-center justify-center gap-4 border-b border-border px-4">
      <div className="flex flex-1 items-center gap-2">
        <Button
          disabled={items.length === 0}
          onClick={() => {
            if (selectedItemIndex <= 0) setSelectedItemIndex(items.length - 1);
            else setSelectedItemIndex(selectedItemIndex - 1);
          }}
          className="group"
          variant="outline"
        >
          <ArrowLeft
            className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          Previous
        </Button>

        <ContextMenu>
          <ContextMenuTrigger disabled={items.length === 0} className="flex-1">
            <Select
              value={items[selectedItemIndex]?.name}
              defaultValue={items[0]?.name}
              onValueChange={(value) => {
                setSelectedItemIndex(
                  items.findIndex((item) => item.name === value),
                );
              }}
            >
              <SelectTrigger disabled={items.length === 0}>
                <SelectValue aria-label="Select item" placeholder="No items" />
              </SelectTrigger>
              <SelectContent>
                {items.map((item) => (
                  <SelectItem key={item.name} value={item.name}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem asChild>
              <Link href={items[selectedItemIndex]?.url ?? ""} target="_blank">
                Visit website
              </Link>
            </ContextMenuItem>
            <ContextMenuItem
              onClick={handleDelete}
              className="text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <Button
          disabled={items.length === 0}
          onClick={() => {
            if (selectedItemIndex >= items.length - 1) setSelectedItemIndex(0);
            else setSelectedItemIndex(selectedItemIndex + 1);
          }}
          variant="outline"
          className="group"
        >
          Next
          <ArrowRight
            className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </Button>
      </div>
      <Separator orientation="vertical" />

      <ContextMenu>
        <ContextMenuTrigger asChild>
          <Button
            disabled={items.length === 0}
            onClick={() => {
              if (items[selectedItemIndex]) {
                if (selectedItemIndex === items.length - 1)
                  setSelectedItemIndex(0);
                removeItem(items[selectedItemIndex]);
              }
            }}
            variant="destructive"
          >
            <Trash
              className="-ms-1 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Delete
          </Button>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem
            onClick={() => {
              clearItems();
            }}
            className="text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            Delete all
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}

export { ItemsNavbar };
