"use client";
import { useItemsStore } from "@/lib/store/items";
import { useTheme } from "next-themes";
import Image from "next/image";
import { GridBackground } from "../GridBackground";
import { NoItemsState } from "./NoItemsState";

function ItemsDisplay() {
  const { resolvedTheme } = useTheme();
  const { items } = useItemsStore();

  function getRoute(item: (typeof items)[0]) {
    return typeof item.route === "string"
      ? item.route
      : resolvedTheme === "dark"
        ? item.route.dark
        : item.route.light;
  }

  return (
    <div className="grid size-1/2 h-full place-items-center border-r border-border">
      <GridBackground>
        {items.length > 0 && items[0] && items[1] && items[2] ? (
          <div className="group grid size-full place-items-center duration-500 *:size-24 *:transition-transform">
            <div className="relative -translate-x-1/2">
              <Image
                src={getRoute(items[0])}
                alt={items[0]?.title}
                width={100}
                height={100}
                className="absolute left-1/2 top-1/2 -translate-x-12 -translate-y-1/2 group-hover:-translate-x-24"
              />
              <Image
                src={getRoute(items[1])}
                alt={items[1]?.title}
                width={100}
                height={100}
                className="absolute left-1/2 top-1/2 -translate-y-1/2"
              />
              <Image
                src={getRoute(items[2])}
                alt={items[2]?.title}
                width={100}
                height={100}
                className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-12 group-hover:translate-x-24"
              />
            </div>
          </div>
        ) : (
          <NoItemsState />
        )}
      </GridBackground>
    </div>
  );
}

export { ItemsDisplay };
