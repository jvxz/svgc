import { ScrollArea } from "../ui/scroll-area";
import { SidebarItems } from "./SidebarItems";
import { SidebarSearch } from "./SidebarSearch";

function Sidebar() {
  return (
    <aside className="min-w-[20%] border-r border-border">
      <div className="max-h-[4.5rem] border-b border-border p-4">
        <SidebarSearch />
      </div>
      <ScrollArea className="h-[calc(100%-4.5rem)]">
        <SidebarItems />
      </ScrollArea>
    </aside>
  );
}

export { Sidebar };
