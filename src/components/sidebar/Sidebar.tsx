import { type iSVG } from "@/actions/get-svgs";
import { Badge } from "../ui/badge";
import { Toggle } from "../ui/toggle";
import { ScrollArea } from "../ui/scroll-area";
import { SidebarSearch } from "./SidebarSearch";

function Sidebar({ svgs }: { svgs: iSVG[] }) {
  const getCategories = () => {
    const categories = svgs
      .map((svg) => svg.category)
      .flat()
      .sort();

    const uniqueCategories = [...new Set(categories)];
    const categoryCount = uniqueCategories.map((category) => ({
      name: category,
      count: categories.filter((c) => c === category).length,
    }));
    return categoryCount;
  };

  const categories = getCategories();

  return (
    <aside className="min-w-[20%] border-r border-border">
      <div className="h-[4.25rem] border-b border-border p-4">
        <SidebarSearch />
      </div>
      <ScrollArea className="h-[calc(100%-4.25rem)]">
        <div className="flex flex-col gap-2 p-4">
          {categories.map((category) => (
            <Toggle
              className="group flex items-center justify-between"
              key={category.name}
              variant="outline"
            >
              {category.name}
              <Badge variant="outline">{category.count}</Badge>
            </Toggle>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}

export { Sidebar };
