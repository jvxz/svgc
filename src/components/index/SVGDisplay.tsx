"use client";
import { type iSVG } from "@/actions/get-svgs";
import { useInputStore } from "@/lib/store/input";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { SVGCard } from "./SVGCard";

function SVGDisplay({ svgs }: { svgs: iSVG[] }) {
  const { searchInput } = useInputStore();
  const [svgsSection, setSvgSection] = useState(24);

  const filteredSvgs = svgs.filter((svg) =>
    svg.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  useEffect(() => {
    setSvgSection(24);
  }, [searchInput]);

  return (
    <ScrollArea className="size-full">
      <div className="flex flex-wrap justify-around gap-6 p-6">
        {filteredSvgs ? (
          filteredSvgs
            .slice(0, svgsSection)
            .filter((svg) =>
              svg.title.toLowerCase().includes(searchInput.toLowerCase()),
            )
            .map((svg) => {
              return <SVGCard key={svg.id} svg={svg} />;
            })
        ) : (
          <p>No svgs found</p>
        )}
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
