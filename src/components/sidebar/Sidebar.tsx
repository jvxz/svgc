import { ScrollArea } from "../ui/scroll-area";
import { SidebarSearch } from "./SidebarSearch";
import { SidebarItems } from "./SidebarItems";

function Sidebar() {
  return (
    <aside className="min-w-[20%] border-r border-border">
      <div className="h-[4.25rem] border-b border-border p-4">
        <SidebarSearch />
      </div>
      <ScrollArea className="h-[calc(100%-4.25rem)]">
        <SidebarItems />
      </ScrollArea>
    </aside>
  );
}

export { Sidebar };
