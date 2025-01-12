"use client";
import { type Logo } from "@/actions/get-svgs";
import { useItemsStore } from "@/lib/store/items";
import { ExternalLink, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function SVGCard({ svg }: { svg: Logo }) {
  const { addItem, removeItem, items } = useItemsStore();

  return (
    <div className="relative flex size-52 flex-col rounded-xl border border-border text-center">
      <div className="absolute inset-0 size-full -translate-y-2 scale-[0.35] rounded-full bg-foreground opacity-10 blur-3xl dark:opacity-[5%]" />
      <div className="flex min-h-10 items-end justify-center">
        <p className="mx-4 truncate" title={svg.name}>
          {svg.name}
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image
          loading="lazy"
          unoptimized
          src={`https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos/${svg.files[0]}`}
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

          <Button asChild className="!size-8 rounded-full" variant="ghost">
            <Link href={svg.url} target="_blank">
              <ExternalLink className="!size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export { SVGCard };
