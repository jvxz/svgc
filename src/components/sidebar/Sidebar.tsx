"use client";
import { useItemsStore } from "@/lib/store/items";
import { Button } from "../ui/button";
import { Icon } from "../ui/logos";
import { SidebarItems } from "./SidebarItems";

function Sidebar() {
  const { items } = useItemsStore();

  return (
    <aside className="min-w-[20%] border-r border-border">
      {items.length === 0 ? <SidebarNoItemsState /> : <SidebarItems />}
    </aside>
  );
}

function SidebarNoItemsState() {
  return (
    <div className="motion-preset-focus flex size-full flex-col items-center justify-center gap-2">
      <h1 className="font-mono text-4xl font-bold">svgc</h1>
      <p>Select a brand to begin</p>
      <div className="flex items-center gap-2">
        <Button variant="link">
          <Icon.Github />
          Source code
        </Button>
      </div>
    </div>
  );
}

export { Sidebar };
