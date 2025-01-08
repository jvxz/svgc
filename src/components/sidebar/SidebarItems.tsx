import { Toggle } from "../ui/toggle";

import { Badge } from "../ui/badge";
import { getAllSvgs } from "@/actions/get-svgs";

async function SidebarItems() {
  const svgs = await getAllSvgs();

  const getCategories = () => {
    const categories = svgs
      ?.map((svg) => svg.category)
      .flat()
      .sort();

    const uniqueCategories = [...new Set(categories)];
    const categoryCount = uniqueCategories.map((category) => ({
      name: category,
      count: categories?.filter((c) => c === category).length,
    }));
    return categoryCount;
  };

  const categories = getCategories();

  return (
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
  );
}

export { SidebarItems };
