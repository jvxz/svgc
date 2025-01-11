import { type Logo } from "@/actions/get-svgs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(svgLink: Logo["files"][number]) {
  return `https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos/${svgLink}`;
}
