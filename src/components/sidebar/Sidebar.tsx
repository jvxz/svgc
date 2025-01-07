import { type iSVG } from "@/actions/get-svgs";
import { Badge } from "../ui/badge";
import { Toggle } from "../ui/toggle";

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
      <div className="flex flex-col gap-2 p-4">
        {categories.map((category) => (
          <Toggle
            className="flex items-center justify-between"
            key={category.name}
            variant="outline"
          >
            {category.name}
            <Badge variant="outline">{category.count}</Badge>
          </Toggle>
        ))}
      </div>
    </aside>
  );
}

export { Sidebar };
