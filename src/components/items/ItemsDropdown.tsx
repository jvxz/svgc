"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useItemsStore } from "@/lib/store/items";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

function ItemsDropdown() {
  const { items, setSelectedItemIndex, selectedItemIndex } = useItemsStore();

  return (
    <div className="flex h-16 items-center justify-evenly border-b border-border px-8">
      <Button
        onClick={() => {
          if (selectedItemIndex <= 0) setSelectedItemIndex(items.length - 1);
          else setSelectedItemIndex(selectedItemIndex - 1);
        }}
        variant="ghost"
        size="icon"
        disabled={items.length === 0}
      >
        <ChevronLeft />
      </Button>
      <Select
        value={items[selectedItemIndex]?.name}
        defaultValue={items[0]?.name}
        onValueChange={(value) => {
          setSelectedItemIndex(items.findIndex((item) => item.name === value));
        }}
      >
        <SelectTrigger className="w-1/2" disabled={items.length === 0}>
          <SelectValue placeholder="No items" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.name} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        disabled={items.length === 0}
        onClick={() => {
          if (selectedItemIndex >= items.length - 1) setSelectedItemIndex(0);
          else setSelectedItemIndex(selectedItemIndex + 1);
        }}
        variant="ghost"
        size="icon"
      >
        <ChevronRight />
      </Button>
    </div>
  );
}

export { ItemsDropdown };
