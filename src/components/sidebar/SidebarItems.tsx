"use client";
import { type iSVG } from "@/actions/get-svgs";
import { useInputStore } from "@/lib/store/input";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

function SidebarItems({ svgs }: { svgs: iSVG[] }) {
  const { categoryInput } = useInputStore();

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
      {categories
        .filter((category) =>
          category.name.toLowerCase().includes(categoryInput.toLowerCase()),
        )
        .map((category) => (
          <Button
            asChild
            className="group flex items-center justify-between"
            key={category.name}
            variant="outline"
          >
            <Link href={`/category/${category.name}`}>
              {category.name}
              <Badge variant="outline">{category.count}</Badge>
            </Link>
          </Button>
        ))}
    </div>
  );
}

export { SidebarItems };
