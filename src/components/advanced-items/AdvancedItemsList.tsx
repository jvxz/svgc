"use client";
import { type Logo } from "@/actions/get-svgs";
import { useKeyhold } from "@/lib/hooks/use-keyhold";
import { useInputStore } from "@/lib/store/input";
import { useItemsStore } from "@/lib/store/items";
import { useSelectedItemStore } from "@/lib/store/selected-item";
import { getImageUrl } from "@/lib/utils";
import { Ellipsis, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const { items, removeItem } = useItemsStore();
  const { selectedItem, selectedItems, setSelectedItems } =
    useSelectedItemStore();
  const { itemInput } = useInputStore();

  useKeyhold("Shift", (e) => {
    setShiftHeld(e);
  });

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(itemInput.toLowerCase()),
  );

  return (
    <div className="flex h-full w-1/3 flex-col border-r border-border">
      <div className="flex h-16 items-center gap-2 border-b border-border p-4">
        <Input placeholder="Search items..." />
        <DropdownButton
          multiSelect={multiSelect}
          setMultiSelect={setMultiSelect}
        />
      </div>
      <ScrollArea className="h-full">
        <div className="flex h-full flex-col gap-2 p-4">
          {items.map((item) => (
            <AdvancedItemsListButton
              key={item.name}
              item={item}
              multiSelect={multiSelect}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

type AdvancedItemsListButtonProps = {
  item: Logo;
  multiSelect: boolean;
};

function AdvancedItemsListButton({
  item,
  multiSelect,
}: AdvancedItemsListButtonProps) {
  const { removeItem } = useItemsStore();
  const { selectedItem, setSelectedItem } = useSelectedItemStore();

  function handleDelete() {
    if (!selectedItem) return;
    removeItem(selectedItem);
  }

  const isPressed = (item: Logo) => {
    if (multiSelect) {
      return selectedItem?.name === item.name;
    }
    return selectedItem?.name === item.name;
  };

  return (
    <ContextMenu key={item.name}>
      <ContextMenuTrigger className="flex items-center">
        <Toggle
          asChild
          className="flex w-full cursor-pointer items-center justify-start rounded-r-none from-transparent from-20% to-muted-foreground/5 dark:bg-gradient-to-l"
          variant="outline"
          pressed={isPressed(item)}
          onPressedChange={(e) => {
            if (!e) return;
            setSelectedItem(item);
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
        <ContextMenuItem asChild>
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
}

type DropdownButtonProps = {
  multiSelect: boolean;
  setMultiSelect: (multiSelect: boolean) => void;
};

function DropdownButton({ multiSelect, setMultiSelect }: DropdownButtonProps) {
  const { clearItems } = useItemsStore();

  return (
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
  );
}
export { AdvancedItemsList };
