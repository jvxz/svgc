"use client";
import { type iSVG } from "@/actions/get-svgs";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { SVGCard } from "./SVGCard";

function SVGDisplay({ svgs }: { svgs: iSVG[] }) {
  const [svgsSection, setSvgSection] = useState(24);

  return (
    <ScrollArea className="size-full">
      <div className="flex flex-wrap justify-around gap-6 p-6">
        {svgs ? (
          svgs.slice(0, svgsSection).map((svg) => {
            return <SVGCard key={svg.id} svg={svg} />;
          })
        ) : (
          <p>No svgs found</p>
        )}
      </div>

      {svgsSection < svgs.length && (
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
