"use client";
import { useItemsStore } from "@/lib/store/items";
import Link from "next/link";
import { Button } from "../ui/button";
import { Icon } from "../ui/logos";
import { SidebarItems } from "./SidebarItems";
import { SidebarSearch } from "./SidebarSearch";

function Sidebar() {
  const { items } = useItemsStore();

  return (
    <aside className="flex min-w-[20%] flex-col border-r border-border">
      <SidebarSearch />

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
        <Button asChild variant="link">
          <Link href="https://github.com/jvxz/svgc" target="_blank">
            <Icon.Github />
            Source code
          </Link>
        </Button>
      </div>
    </div>
  );
}

export { Sidebar };
