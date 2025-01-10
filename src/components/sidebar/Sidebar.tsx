import { ScrollArea } from "../ui/scroll-area";
import { SidebarItems } from "./SidebarItems";

async function Sidebar() {
  return (
    <aside className="min-w-[20%] border-r border-border">
      <ScrollArea className="h-full">
        <SidebarItems />
      </ScrollArea>
    </aside>
  );
}

export { Sidebar };
