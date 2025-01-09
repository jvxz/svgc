"use client";
import { type iSVG } from "@/actions/get-svgs";
import { PAGE_SIZE } from "@/lib/config";
import { useQueryState } from "nuqs";
import { ScrollArea } from "../ui/scroll-area";
import { SVGCard } from "./SVGCard";

function SVGDisplay({ svgs }: { svgs: iSVG[] }) {
  const [page] = useQueryState("page");
  const [category] = useQueryState("category");

  const pageNumber = page ? parseInt(page) : 1;

  const start = (pageNumber - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const svgsToDisplay = svgs.slice(start, end);

  return (
    <ScrollArea className="size-full">
      <div className="flex flex-wrap justify-around gap-6 p-6">
        {svgsToDisplay ? (
          svgsToDisplay.map((svg) => {
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
