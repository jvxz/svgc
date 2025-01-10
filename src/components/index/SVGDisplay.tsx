"use client";
import { type Logo } from "@/actions/get-svgs";
import { useInputStore } from "@/lib/store/input";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { SVGCard } from "./SVGCard";

function SVGDisplay({ svgs }: { svgs: Logo[] }) {
  const { searchInput } = useInputStore();
  const [svgsSection, setSvgSection] = useState(32);

  useEffect(() => {
    setSvgSection(32);
  }, [searchInput]);

  const filteredSvgs = svgs.filter((svg) => {
    return svg.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <ScrollArea className="size-full">
      <div className="flex flex-1 flex-wrap justify-evenly gap-6 p-6">
        {filteredSvgs.slice(0, svgsSection).map((svg) => {
          return <SVGCard key={svg.name} svg={svg} />;
        })}
      </div>

      {svgsSection < filteredSvgs.length && (
        <div className="flex justify-center pb-4">
          <Button
            variant="ghost"
            onClick={() => setSvgSection(svgsSection + 32)}
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
