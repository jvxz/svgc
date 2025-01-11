"use client";
import { type Logo } from "@/actions/get-svgs";
import { useItemsStore } from "@/lib/store/items";
import { getImageUrl } from "@/lib/utils";
import { Copy, ExternalLink, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";

function SVGCard({ svg }: { svg: Logo }) {
  const { addItem, removeItem, items } = useItemsStore();

  const imageUrl = getImageUrl(svg.files[0]!);
  console.log("imageUrl", JSON.stringify(imageUrl, null, 2));

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {" "}
        <div className="relative flex size-52 flex-col rounded-xl border border-border text-center">
          <div className="absolute inset-0 size-full -translate-y-2 scale-[0.35] rounded-full bg-foreground opacity-10 blur-3xl dark:opacity-[5%]" />
          <div className="flex min-h-10 items-end justify-center">
            <Link
              className="mx-4 cursor-pointer truncate underline-offset-2 hover:underline"
              target="_blank"
              href={svg.url}
              title={svg.name}
            >
              {svg.name}
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Image
              loading="lazy"
              unoptimized
              src={`https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos/${svg.files[0]}`}
              // src={`https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos/500px.svg`}
              alt={svg.name}
              width={48}
              height={48}
              className="size-12"
            />
          </div>
          <div className="flex flex-col gap-3 py-4">
            <div className="flex items-center justify-center gap-1">
              <Button
                className="!size-8 rounded-full"
                variant="ghost"
                onClick={() => {
                  if (items.includes(svg)) {
                    removeItem(svg);
                  } else {
                    addItem(svg);
                  }
                }}
              >
                <Plus
                  className={
                    "!size-5 transition-all " +
                    (items.includes(svg) ? "rotate-45 text-red-500" : "")
                  }
                />
              </Button>
              <Button className="!size-8 rounded-full" variant="ghost">
                <Copy className="!size-5" />
              </Button>
              <Button className="!size-8 rounded-full" variant="ghost">
                <ExternalLink className="!size-5" />
              </Button>
            </div>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem
          onClick={() => {
            if (items.includes(svg)) {
              removeItem(svg);
            } else {
              addItem(svg);
            }
          }}
        >
          {items.includes(svg) ? "Remove" : "Add"}
        </ContextMenuItem>
        <ContextMenuItem>View</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export { SVGCard };
