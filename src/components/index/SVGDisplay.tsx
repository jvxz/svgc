"use client";
import { useSvgs } from "@/hooks/use-svgs";
import { useInputStore } from "@/lib/store/input";
import { useSVGViewModeStore } from "@/lib/store/svg-view-mode";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { SVGDisplaySuspense } from "./SVGDisplaySuspense";
import { SVGGridCard } from "./SVGGridCard";
import { SVGListCard } from "./SVGListCard";

function SVGDisplay() {
  const [svgsSection, setSvgSection] = useState(32);
  const { searchInput } = useInputStore();
  const { viewMode } = useSVGViewModeStore();
  const { svgs, isLoading, error } = useSvgs();

  useEffect(() => {
    setSvgSection(32);
  }, [searchInput]);

  const filteredSvgs = svgs
    // filter by search input
    ?.filter((svg) => {
      return svg.name.toLowerCase().includes(searchInput.toLowerCase());
    })
    // sort by name
    .sort((a, b) => a.name.localeCompare(b.name));

  // sections to display
  const slicedSvgs = filteredSvgs?.slice(0, svgsSection);

  return (
    <ScrollArea className="size-full">
      <div
        className={
          viewMode === "grid"
            ? "pt-navbar grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5"
            : "pt-navbar grid grid-cols-1 gap-4 p-4 lg:grid-cols-2"
        }
        style={{
          paddingTop: "calc(var(--navbar) + 1rem)",
        }}
      >
        {isLoading && <SVGDisplaySuspense />}

        {slicedSvgs?.map((svg) => {
          return viewMode === "grid" ? (
            <SVGGridCard key={svg.name} svg={svg} />
          ) : (
            <SVGListCard key={svg.name} svg={svg} />
          );
        })}

        {error && <div>{error.message}</div>}
      </div>

      {svgsSection < (filteredSvgs?.length ?? 0) && (
        <ShowMoreButton
          svgsSection={svgsSection}
          setSvgSection={setSvgSection}
        />
      )}
    </ScrollArea>
  );
}

function ShowMoreButton({
  svgsSection,
  setSvgSection,
}: {
  svgsSection: number;
  setSvgSection: (svgsSection: number) => void;
}) {
  return (
    <div className="flex justify-center pb-4">
      <Button variant="ghost" onClick={() => setSvgSection(svgsSection + 32)}>
        Show more
        <ChevronDown className="size-4" />
      </Button>
    </div>
  );
}

export { SVGDisplay };
