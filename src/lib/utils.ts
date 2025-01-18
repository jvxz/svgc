import { type Item } from "@/actions/get-svgs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { addItem, removeItem } from "./store/items";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(svgLink: Item["files"][number]) {
  return `https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos/${svgLink}`;
}

export const handleItemToggle = (isPressed: boolean, svg: Item) => {
  if (isPressed) addItem(svg, {});
  else removeItem(svg);
};


