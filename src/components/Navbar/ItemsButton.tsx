"use client";
import { Button } from "@/components/ui/button";
import { useItemsStore } from "@/lib/store/items";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Component() {
  const { items } = useItemsStore();

  return (
    <Button asChild className="py-0 pe-0" variant="outline">
      <Link href="/items">
        <ShoppingBag
          className="me-2 opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Items
        <span className="relative ms-3 inline-flex h-full items-center justify-center rounded-full px-3 text-xs font-medium text-muted-foreground before:absolute before:inset-0 before:left-0 before:w-px before:bg-input">
          {items.length}
        </span>
      </Link>
    </Button>
  );
}
