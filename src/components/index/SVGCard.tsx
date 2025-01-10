"use client";
import { type iSVG } from "@/actions/get-svgs";
import { useItemsStore } from "@/lib/store/items";
import { Copy, ExternalLink, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { BadgeLink } from "../ui/badge-link";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

function SVGCard({ svg }: { svg: iSVG }) {
  const { addItem, removeItem, items } = useItemsStore();

  const categories = () => {
    if (typeof svg.category === "string") {
      return (
        <BadgeLink href={`/category/${svg.category}`}>
          {svg.category === "Authentication" ? "Auth" : svg.category}
        </BadgeLink>
      );
    }

    if (svg.category.length >= 3) {
      const category: string = svg.category[0] ?? "";
      return (
        <>
          <BadgeLink href={`/category/${category}`}>
            {category === "Authentication" ? "Auth" : category}
          </BadgeLink>
          <Tooltip delayDuration={0}>
            <TooltipTrigger className="cursor-default">
              <Badge variant="outline">...</Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>{svg.category.join(", ")}</p>
            </TooltipContent>
          </Tooltip>
        </>
      );
    } else {
      return svg.category.map((category) => (
        <BadgeLink key={category} href={`/category/${category}`}>
          {category === "Authentication" ? "Auth" : category}
        </BadgeLink>
      ));
    }
  };

  return (
    <div className="flex size-52 flex-col rounded-xl border border-border text-center">
      <div className="flex min-h-10 items-end justify-center">
        <Link
          className="cursor-pointer underline-offset-2 hover:underline"
          target="_blank"
          href={svg.url}
        >
          {svg.title}
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image
          src={typeof svg.route === "string" ? svg.route : svg.route.light}
          alt={svg.title}
          width={48}
          height={48}
          className="block size-12 dark:hidden"
          blurDataURL={
            typeof svg.route === "string" ? svg.route : svg.route.light
          }
          placeholder="blur"
        />
        <Image
          src={typeof svg.route === "string" ? svg.route : svg.route.dark}
          alt={svg.title}
          width={48}
          height={48}
          className="hidden size-12 dark:block"
          blurDataURL={
            typeof svg.route === "string" ? svg.route : svg.route.dark
          }
          placeholder="blur"
        />
      </div>
      <div className="flex min-h-20 flex-col gap-3">
        <div className="flex items-center justify-center gap-1">
          {categories()}
        </div>
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
  );
}

export { SVGCard };
