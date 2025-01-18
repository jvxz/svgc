import { type Item } from "@/actions/get-svgs";
import { getImageUrl } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";

type SVGGridCardProps = {
  svg: Item;
};

function SVGGridCard({ svg }: SVGGridCardProps) {
  const imageUrl = svg.files[0] ? getImageUrl(svg.files[0]) : "";

  return (
    <div className="flex flex-col *:w-full">
      <Toggle className="relative flex h-48 cursor-pointer flex-col rounded-xl rounded-b-none border border-border text-center transition-all hover:bg-muted/30">
        <div className="absolute inset-0 size-full scale-[0.4] rounded-full bg-foreground opacity-10 blur-3xl dark:opacity-[10%]" />
        <Image
          loading="lazy"
          unoptimized
          src={imageUrl}
          alt={svg.name + " logo"}
          width={48}
          height={48}
          className="size-20"
        />
      </Toggle>
      <Button
        asChild
        title="logo"
        className="rounded-t-none border-t-0"
        variant="outline"
      >
        <Link href={svg.url} target="_blank">
          <p className="truncate">{svg.name}</p>
          <ExternalLink className="!size-3" />
        </Link>
      </Button>
    </div>
  );
}

export { SVGGridCard };
