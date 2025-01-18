import { type Item } from "@/actions/get-svgs";
import { getImageUrl } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";

type SVGListCardProps = {
  svg: Item;
};

function SVGListCard({ svg }: SVGListCardProps) {
  const imageUrl = svg.files[0] ? getImageUrl(svg.files[0]) : "";

  return (
    <div className="flex *:h-12">
      <Toggle
        variant="outline"
        className="w-full justify-start gap-2 rounded-r-none"
      >
        <Image
          loading="lazy"
          unoptimized
          src={imageUrl}
          alt={svg.name + " logo"}
          width={48}
          height={48}
          className="size-8"
        />
        {svg.name}
      </Toggle>
      <Button asChild variant="outline" className="rounded-l-none border-l-0">
        <Link href={svg.url} target="_blank">
          <ExternalLink />
        </Link>
      </Button>
    </div>
  );
}

export { SVGListCard };
