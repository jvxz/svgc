import { getAllSvgs } from "@/actions/get-svgs";
import { Suspense } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { SidebarItems } from "./SidebarItems";

async function Sidebar() {
  const svgs = await getAllSvgs();

  return (
    <aside className="min-w-[20%] border-r border-border">
      <ScrollArea className="h-full">
        <Suspense>{svgs && <SidebarItems svgs={svgs} />}</Suspense>
      </ScrollArea>
    </aside>
  );
}

export { Sidebar };
