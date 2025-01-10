"use client";
import { type iSVG } from "@/actions/get-svgs";
import { useInputStore } from "@/lib/store/input";
import { ChevronDown } from "lucide-react";
import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { SVGCard } from "./SVGCard";

function SVGDisplay({ svgs }: { svgs: iSVG[] }) {
  const slug = useQueryState("category");
  const { searchInput } = useInputStore();
  const [svgsSection, setSvgSection] = useState(24);

  useEffect(() => {
    setSvgSection(24);
  }, [searchInput]);

  const filteredSvgs = svgs.filter((svg) => {
    if (slug[0]) {
      return (
        svg.category.includes(slug[0]) &&
        svg.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    return svg.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <ScrollArea className="size-full">
      <div className="flex flex-1 flex-wrap justify-evenly gap-6 p-6">
        {filteredSvgs.slice(0, svgsSection).map((svg) => {
          return <SVGCard key={svg.id} svg={svg} />;
        })}
      </div>

      {svgsSection < filteredSvgs.length && (
        <div className="flex justify-center pb-4">
          <Button
            variant="ghost"
            onClick={() => setSvgSection(svgsSection + 24)}
          >
            Show more
            <ChevronDown className="size-4" />
          </Button>
        </div>
      )}
    </ScrollArea>
  );
}

export { SVGDisplay };
