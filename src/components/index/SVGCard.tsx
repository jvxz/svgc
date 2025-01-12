"use client";
import { type Logo } from "@/actions/get-svgs";
import { useItemsStore } from "@/lib/store/items";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";

function SVGCard({ svg }: { svg: Logo }) {
  const { addItem, removeItem, items } = useItemsStore();

  return (
    <div className="flex flex-col">
      <Toggle
        pressed={items.includes(svg)}
        onPressedChange={() => {
          if (items.includes(svg)) {
            removeItem(svg);
          } else {
            addItem(svg);
          }
        }}
        className="relative flex h-48 w-52 cursor-pointer flex-col rounded-xl rounded-b-none border border-border text-center transition-all hover:bg-muted/30"
      >
        <div className="absolute inset-0 size-full scale-[0.35] rounded-full bg-foreground opacity-10 blur-3xl dark:opacity-[5%]" />
        <Image
          loading="lazy"
          unoptimized
          src={`https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos/${svg.files[0]}`}
          alt={svg.name + " logo"}
          width={48}
          height={48}
          className="size-20"
        />
      </Toggle>
      <Button asChild className="rounded-t-none border-t-0" variant="outline">
        <Link href={svg.url} target="_blank">
          {svg.name}
          <ExternalLink className="!size-3" />
        </Link>
      </Button>
    </div>
  );
}

export { SVGCard };
