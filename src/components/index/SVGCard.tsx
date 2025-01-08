import { type iSVG } from "@/actions/get-svgs";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Image from "next/image";
import { Plus, Copy, ExternalLink } from "lucide-react";
import Link from "next/link";

function SVGCard({ svg }: { svg: iSVG }) {
  const categories = () => {
    if (typeof svg.category === "string") {
      return <Badge variant="outline">{svg.category}</Badge>;
    }

    if (svg.category.length >= 3) {
      return (
        <>
          <Badge variant="outline">{svg.category[0]}</Badge>
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
        <Badge key={category} variant="outline">
          {category}
        </Badge>
      ));
    }
  };

  return (
    <div className="flex h-60 w-64 flex-col rounded-xl border border-border text-center">
      <div className="flex min-h-12 items-center justify-center">
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
          width={24}
          height={24}
          className="size-16"
        />
      </div>
      <div className="flex min-h-20 flex-col gap-3">
        <div className="flex items-center justify-center gap-1">
          {categories()}
        </div>
        <div className="flex items-center justify-center gap-1">
          <Button className="!size-8 rounded-full" variant="ghost">
            <Plus className="!size-5" />
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
