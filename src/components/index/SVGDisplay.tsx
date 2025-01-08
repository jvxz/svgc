import { type iSVG } from "@/actions/get-svgs";
import { ScrollArea } from "../ui/scroll-area";
import { SVGCard } from "./SVGCard";

async function SVGDisplay({ svgs }: { svgs: iSVG[] }) {
  return (
    <ScrollArea className="size-full">
      <div className="flex flex-wrap justify-around gap-6 p-6">
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

export { SVGDisplay };
