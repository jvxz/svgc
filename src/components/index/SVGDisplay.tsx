import { Copy, ExternalLink, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { getAllSvgs, type iSVG } from "@/actions/get-svgs";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";

async function SVGDisplay() {
  "use cache";
  const svgs = await getAllSvgs();

  return (
    <ScrollArea className="size-full">
      <div className="flex flex-wrap gap-6">
        {svgs ? (
          svgs.map((svg) => {
            return <SVGCard key={svg.id} svg={svg} />;
          })
        ) : (
          <p>No svgs found</p>
        )}
      </div>
    </ScrollArea>
  );
}

function SVGCard({ svg }: { svg: iSVG }) {
  return (
    <div className="flex h-64 w-72 flex-col rounded-xl border border-border text-center">
      <div className="flex min-h-12 items-center justify-center text-lg">
        <p>{svg.title}</p>
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
          <Badge variant="outline">test</Badge>
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

export { SVGDisplay };
