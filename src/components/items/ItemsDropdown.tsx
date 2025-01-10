import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useItemsStore } from "@/lib/store/items";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

function ItemsDropdown({
  setSelectedItem,
}: {
  setSelectedItem: (item: string) => void;
}) {
  const { items } = useItemsStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {items.length} items
          <ChevronDown
            className="-me-1 ms-2 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.sort().map((item) => (
          <DropdownMenuItem
            onSelect={() => setSelectedItem(item.title)}
            key={item.title}
          >
            <Image
              src={
                typeof item.route === "string" ? item.route : item.route.light
              }
              alt={item.title}
              width={100}
              height={100}
              className="size-4"
            />
            {item.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ItemsDropdown };
