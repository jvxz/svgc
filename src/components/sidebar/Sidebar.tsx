import { SidebarItems } from "./SidebarItems";
import { SidebarNav } from "./SidebarNav";

function Sidebar() {
  return (
    <aside className="md:1/2 flex w-2/3 flex-col border-r border-border lg:w-1/3">
      <SidebarNav />
      <SidebarItems />
    </aside>
  );
}

function SidebarNoItemsState() {
  return (
    <div className="motion-preset-focus flex size-full flex-col items-center justify-center gap-2">
      <h1 className="font-mono text-4xl font-bold">svgc</h1>
      <p>Select a logo to begin</p>
    </div>
  );
}

export { Sidebar };
